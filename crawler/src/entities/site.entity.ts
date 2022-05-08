import { ListingEntity, WebEntity } from '.';

export enum EFetchMode {
  ALL_AT_ONCE = 'all_at_once',
  SEQUENCE = 'sequence'
}

export abstract class SiteEntity extends WebEntity {
  protected static readonly mainUrl: string;
  protected static readonly listingsUrl: string;

  public abstract fetchListings(fetchMode: EFetchMode, page?: number, referer?: string): Promise<{ listings: ListingEntity[] }>;

  protected abstract fetchListingUrls(page?: number, referer?: string): Promise<{ listings: string[] }>;
  protected abstract fetchListing(url: string): Promise<ListingEntity>;
}
