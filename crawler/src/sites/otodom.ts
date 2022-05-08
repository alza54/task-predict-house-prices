import debug from 'debug';

import { EFetchMode, IOtodomListing, OtodomListingEntity, SiteEntity, TCurrency } from '../entities';
import { CrawlerParseError } from '../errors';
import { OtodomListing, OtodomResults } from '../types';
import { fetchSequence, sanitizeNumber } from '../core';

export class OtodomCrawler extends SiteEntity {
  protected static readonly mainUrl: string = 'https://www.otodom.pl/';
  protected static readonly listingsUrl: string = 'https://www.otodom.pl/pl/oferty/sprzedaz/mieszkanie/cala-polska';

  public static readonly listingPageConfigRegex = new RegExp(/<script id="__NEXT_DATA__" type="application\/json">(.+?)<\/script>/);

  private debug = debug('crawler:otodom');

  public async fetchListings(
    fetchMode = EFetchMode.ALL_AT_ONCE,
    page?: number,
    referer: string = OtodomCrawler.listingsUrl
  ): Promise<{ listings: OtodomListingEntity[]; pageConfig: OtodomResults.PageConfig; url: string }> {
    const { listings: listingUrls, pageConfig, url } = await this.fetchListingUrls(page, referer);

    const listings = fetchMode === EFetchMode.ALL_AT_ONCE
      ? await Promise.all(listingUrls.map((listingUrl: string) => this.fetchListing(listingUrl)))
      : await fetchSequence(listingUrls.map((listingUrls: string) => () => this.fetchListing(listingUrls)));

    return { listings, pageConfig, url };
  }

  protected async fetchListingUrls(page?: number, referer: string = OtodomCrawler.listingsUrl): Promise<{ listings: string[], pageConfig: OtodomResults.PageConfig; url: string }> {
    const searchParams: Record<string, string> = {};

    if (typeof page === 'number') {
      searchParams.page = String(page);
    }

    const { body, url } = await this.httpClient.get(OtodomCrawler.listingsUrl, { searchParams });

    const listingUrls = Array.from(body.matchAll(/href="(\/pl\/oferta\/.+?)"/g))
      .map((match: RegExpMatchArray) => match[1])
      .filter(Boolean);

    return {
      // Convert listing pathes to URLs
      listings: listingUrls.map((listingPath: string) => OtodomCrawler.mainUrl.slice(0, -1) + listingPath),
      pageConfig: this.getPageConfig<OtodomResults.PageConfig>(body),
      url
    }
  }

  protected async fetchListing(url: string): Promise<OtodomListingEntity> {
    this.debug('Fetching listing %s', url);

    const { body } = await this.httpClient.get(url);

    const { props: { pageProps: { ad, ad: { id, location, breadcrumbs, target }, adTrackingData } } } = this.getPageConfig<OtodomListing.PageConfig>(body);

    this.debug('Got response from %s', url);

    const listing: IOtodomListing = {
      uri: url,
      internal_id: id,
      date_published: ad.dateCreated,
      date_modified: ad.dateModified,
      property_type: target.ProperType,
      location: {
        gps: {
          lat: location.coordinates.latitude,
          lng: location.coordinates.longitude
        },
        city: adTrackingData.city_name,
        region: adTrackingData.region_name,
        subregion: adTrackingData.subregion_id,
        address: breadcrumbs
          .find((breadcrumb: OtodomListing.Breadcrumb) => breadcrumb.url.includes('?locations'))
          ?.label.replace('ul. ', ''),
        floor: sanitizeNumber(Number.parseInt(target.Floor_no?.[0]?.replace('floor_', ''), 10)),
        floor_total: sanitizeNumber(Number.parseInt(target.Building_floors_num, 10)),
        build_year: sanitizeNumber(Number.parseInt(target.Build_year, 10)) ?? 0,
        has_lift: ad.additionalInformation
          .find((field: OtodomListing.AdditionalInformation) => field.label === 'lift')
          ?.values[0]?.slice(2) ?? 'n'
      },
      price: {
        value: adTrackingData.ad_price,
        currency: adTrackingData.price_currency as TCurrency
      },
      rooms: sanitizeNumber(Number.parseInt(target.Rooms_num?.[0] ?? '0', 10)) ?? 0,
      square_meters: sanitizeNumber(Number.parseFloat(target?.Area ?? '0')) ?? 0,
      equipment: target.Equipment_types ?? [],
      extras: target.Extras_types ?? [],
      details: ad
    }

    return new OtodomListingEntity(listing);
  }

  private getPageConfig<PayloadType>(body: string): PayloadType {
    const pageConfigString = body.match(OtodomCrawler.listingPageConfigRegex)?.[1];

    if (typeof pageConfigString !== 'string') {
      throw new CrawlerParseError('Failed to find listing page config.', body, OtodomCrawler.listingPageConfigRegex.toString());
    }

    const pageConfig: PayloadType = JSON.parse(pageConfigString);

    return pageConfig
  }
}
