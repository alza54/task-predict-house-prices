import { flattenObject } from '../core';
import { OtodomListing } from '../types';

export enum EPropertyType {
  HOUSE = 'house',
  FLAT = 'flat',
  OTHER = 'other',
  UNKNOWN = 'unknown'
}

export const Currencies = ['PLN', 'EUR', 'USD', 'CHF'] as const;

export type TCurrency = typeof Currencies[number];

export type TDateTime = string;

export interface IPrice<Currency extends TCurrency> {
  value: number;
  currency: Currency;
}

export interface ILocation<PropertyType extends EPropertyType> {
  gps: {
    lat: number;
    lng: number;
  }
  city: string;
  region: string;
  subregion: string;
  address?: string;
  floor: PropertyType extends EPropertyType.FLAT ? number : (PropertyType extends EPropertyType.UNKNOWN ? number | undefined : never);
  floor_total: PropertyType extends EPropertyType.FLAT ? number : (PropertyType extends EPropertyType.UNKNOWN ? number | undefined : never);
  build_year: number;
  has_lift: string;
}

export interface IListing<PropertyType extends EPropertyType = EPropertyType, Currency extends TCurrency = TCurrency> {
  uri: string;
  internal_id: number;
  date_published: TDateTime;
  date_modified: TDateTime;
  property_type: string;
  location: ILocation<PropertyType>;
  price: IPrice<Currency>;
  rooms: number;
  square_meters: number;
  equipment: string[];
  extras: string[];
  construction_status: string[];
}

export interface IOtodomListing extends IListing<EPropertyType.UNKNOWN> {
  details: OtodomListing.Ad;
}

export class ListingEntity<
  PropertyType extends EPropertyType = EPropertyType,
  Currency extends TCurrency = TCurrency
> implements Readonly<IListing<PropertyType, Currency>> {
  private data: Readonly<IListing<PropertyType, Currency>>;

  constructor(listingData: IListing<PropertyType, Currency>) {
    this.data = listingData;
  }

  get (): IListing<PropertyType, Currency> {
    return this.data;
  }

  getForCsv (): Record<string, string | number> {
    return flattenObject(this.data);
  }

  get uri (): string {
    return this.data.uri;
  }

  get internal_id (): number {
    return this.data.internal_id;
  }

  get date_published (): string {
    return this.data.date_published;
  }

  get date_modified (): string {
    return this.data.date_modified;
  }

  get property_type (): string {
    return this.data.property_type;
  }

  get location (): ILocation<PropertyType> {
    return this.data.location;
  }

  get price (): IPrice<Currency> {
    return this.data.price;
  }

  get rooms (): number {
    return this.data.rooms;
  }

  get square_meters ():  number {
    return this.data.square_meters;
  }

  get equipment (): string[] {
    return this.data.equipment;
  }

  get extras (): string[] {
    return this.data.extras;
  }

  get construction_status (): string[] {
    return this.data.construction_status;
  }
}

export class OtodomListingEntity extends ListingEntity<EPropertyType.UNKNOWN> implements Readonly<IOtodomListing> {
  private _details: OtodomListing.Ad;

  constructor({ details, ...listingData }: IOtodomListing) {
    super(listingData);

    this._details = details;
  }

  get details (): OtodomListing.Ad {
    return this._details;
  }
}
