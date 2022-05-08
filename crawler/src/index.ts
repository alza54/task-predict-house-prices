import { EFetchMode, OtodomListingEntity } from './entities';
import { OtodomCrawler } from './sites';
import { createObjectCsvWriter } from 'csv-writer';
import path from 'path';

function today (): string {
  return new Date().toISOString().slice(0, 10);
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function entryPoint (): Promise<void> {
  const crawler = { otodom: new OtodomCrawler() };
  const crawledListings = new Map<number, OtodomListingEntity>();
  const csv = createObjectCsvWriter({
    path: path.resolve(__dirname, `../../dataset/otodom-${today()}.csv`),
    header: [
      'uri',
      'internal_id',
      'date_published',
      'date_modified',
      'property_type',
      'location.gps.lat',
      'location.gps.lng',
      'location.city',
      'location.region',
      'location.subregion',
      'location.address',
      'location.floor',
      'location.floor_total',
      'location.build_year',
      'location.has_lift',
      'price.value',
      'price.currency',
      'rooms',
      'square_meters',
      'equipment',
      'extras'
    ].map(header => ({ id: header, title: header })),
    fieldDelimiter: ';',
    append: false
  });

  const maxResults = 500e3;

  let canQueryNextPage = true;
  let page = 1;
  let referer: string | undefined;

  while (canQueryNextPage && crawledListings.size < maxResults) {
    const { url, listings, pageConfig: { props: { pageProps: { tracking } } } } = await crawler.otodom.fetchListings(EFetchMode.ALL_AT_ONCE, page, referer);

    if (typeof tracking === 'undefined') {
      page += 1;
      continue;
    }

    console.log(`Fetched ${listings.length} result(s) from ${url} (page ${page}/${tracking.listing.page_count}). Total ${tracking.listing.result_count} results available.`);

    await csv.writeRecords(
      listings
        .filter((listing: OtodomListingEntity) => !crawledListings.has(listing.internal_id))
        .map((listing: OtodomListingEntity) => listing.getForCsv())
    );

    for (const listing of listings) {
      crawledListings.set(listing.internal_id, listing);
    }

    page += 1;
    referer = url;
    canQueryNextPage = tracking.listing.page_nb < tracking.listing.page_count;

    await sleep(1e3 + 1e3 * Math.random());
  }
}

entryPoint()
  .catch(console.error.bind(console));
