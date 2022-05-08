export namespace OtodomResults {
  export interface MapViewParams {
    urlZoomLevel?: any;
    urlMapLat?: any;
    urlMapLng?: any;
  }

  export interface LocationLabel {
    locale: string;
    value: string;
    __typename: string;
  }

  export interface Image {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    __typename: string;
  }

  export interface Agency {
    id: number;
    name: string;
    imageUrl: string;
    type: string;
    brandingVisible: boolean;
    __typename: string;
  }

  export interface TotalPrice {
    value: number;
    currency: string;
    __typename: string;
  }

  export interface PricePerSquareMeter {
    value: number;
    currency: string;
    __typename: string;
  }

  export interface Item {
    id: number;
    title: string;
    slug: string;
    estate: string;
    transaction: string;
    locationLabel: LocationLabel;
    images: Image[];
    isExclusiveOffer: boolean;
    isPrivateOwner: boolean;
    isPromoted: boolean;
    agency: Agency;
    openDays: string;
    totalPrice: TotalPrice;
    priceFromPerSquareMeter?: any;
    pricePerSquareMeter: PricePerSquareMeter;
    areaInSquareMeters: number;
    terrainAreaInSquareMeters?: any;
    roomsNumber: string;
    hidePrice: boolean;
    investmentState?: any;
    investmentUnitsAreaInSquareMeters?: any;
    peoplePerRoom?: any;
    dateCreated: string;
    investmentUnitsNumber?: any;
    investmentUnitsRoomsNumber?: any;
    investmentEstimatedDelivery?: any;
    __typename: string;
  }

  export interface TrackingSet {
    cat_l1_id: number;
    cat_l1_name: string;
    business: string;
    selected_street_id: string;
    selected_district_id: string;
    selected_city_id: string;
    selected_subregion_id: string;
    selected_region_id: string;
  }

  export interface Pagination {
    totalResults: number;
    itemsPerPage: number;
    page: number;
    totalPages: number;
    __typename: string;
  }

  export interface SearchAds {
    recommendationLink?: any;
    items: Item[];
    trackingSet: TrackingSet;
    pagination: Pagination;
    locationsData: any[];
    locationString: string;
    __typename: string;
  }

  export interface LocationLabel2 {
    locale: string;
    value: string;
    __typename: string;
  }

  export interface Image2 {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    __typename: string;
  }

  export interface TotalPrice2 {
    value: number;
    currency: string;
    __typename: string;
  }

  export interface PricePerSquareMeter2 {
    value: number;
    currency: string;
    __typename: string;
  }

  export interface Item2 {
    id: number;
    title: string;
    slug: string;
    estate: string;
    transaction: string;
    locationLabel: LocationLabel2;
    images: Image2[];
    isExclusiveOffer: boolean;
    isPrivateOwner: boolean;
    isPromoted: boolean;
    agency?: any;
    openDays: string;
    totalPrice: TotalPrice2;
    priceFromPerSquareMeter?: any;
    pricePerSquareMeter: PricePerSquareMeter2;
    areaInSquareMeters: number;
    terrainAreaInSquareMeters?: any;
    roomsNumber: string;
    hidePrice: boolean;
    investmentState?: any;
    investmentUnitsAreaInSquareMeters?: any;
    peoplePerRoom?: any;
    dateCreated: string;
    investmentUnitsNumber?: any;
    investmentUnitsRoomsNumber?: any;
    investmentEstimatedDelivery?: any;
    __typename: string;
  }

  export interface SearchAdsRandomPromoted {
    items: Item2[];
    __typename: string;
  }

  export interface Item3 {
    id: string;
    image: string;
    price: string;
    location: string;
    title: string;
    hidePrice?: any;
    businessName: string;
    slug: string;
    __typename: string;
  }

  export interface SearchAdsRandomInvestments {
    items: Item3[];
    __typename: string;
  }

  export interface Item4 {
    name: string;
    estate: string;
    transaction: string;
    location: string;
    count: number;
    __typename: string;
  }

  export interface SearchLinksLocations {
    items: Item4[];
    __typename: string;
  }

  export interface Data {
    searchAds: SearchAds;
    searchAdsRandomPromoted: SearchAdsRandomPromoted;
    searchAdsRandomInvestments: SearchAdsRandomInvestments;
    searchLinksLocations: SearchLinksLocations;
  }

  export interface FilteringQueryParams {
    page: number;
    limit: number;
    market: string;
    estate?: any;
    transaction?: any;
    locations: any[];
  }

  export interface ByUrlPath {
    urlPath?: any;
  }

  export interface FilterLocations {
    byUrlPath: ByUrlPath;
  }

  export interface FilterAttributes {
    market: string;
    estate: string;
    transaction: string;
  }

  export interface SortingOption {
    by: string;
    direction: string;
  }

  export interface Listing {
    cat_l1_id: number;
    cat_l1_name: string;
    business: string;
    page_nb: number;
    page_count: number;
    result_count: number;
    listing_format: string;
    ad_impressions: number[];
    selected_locations_id: any[];
    market: string;
    order_by: string;
    re_seller_type: string[];
  }

  export interface Search {
    cat_l1_id: number;
    cat_l1_name: string;
    business: string;
    market: string;
    selected_locations_id: any[];
    from_price?: any;
    to_price?: any;
    from_surface?: any;
    to_surface?: any;
    floor?: any;
    building_type?: any;
    building_material?: any;
    from_construction_year?: any;
    to_construction_year?: any;
    exclusive?: any;
    ad_inserted_since?: any;
    with_photo?: any;
    with_movie?: any;
    with_3d_view?: any;
    with_ac?: any;
    with_balcony?: any;
    with_cellar?: any;
    with_garage?: any;
    with_garden?: any;
    with_lift?: any;
    with_maisonette?: any;
    with_parking?: any;
    with_separate_kitchen?: any;
    with_storage_room?: any;
    with_terrace?: any;
    free_from?: any;
    nb_people?: any;
    non_smoker?: any;
    from_price_m2?: any;
    to_price_m2?: any;
    roof_type?: any;
    only_recreation?: any;
    bungalow?: any;
    remote_services?: any;
    nb_rooms?: any;
    from_nb_floors?: any;
    to_nb_floors?: any;
    only_private?: any;
    only_open_day?: any;
    ad_id_selected?: any;
    from_land_area?: any;
    to_land_area?: any;
    media?: any;
    heating?: any;
    plot_type?: any;
    vicinity_types?: any;
    use_types?: any;
    from_height?: any;
    to_height?: any;
    keyword?: any;
    rent_to_students?: any;
    structure?: any;
    re_seller_type: string[];
    condition?: any;
    divisioning_type?: any;
    wc_count?: any;
    main?: any;
    infrastructure?: any;
    commodity?: any;
    surroundings?: any;
    security?: any;
  }

  export interface Tracking {
    listing: Listing;
    search: Search;
  }

  export interface Targeting {
    Country: string;
    env: string;
    ProperType: string;
    OfferType: string;
    RegularUser: string;
    City: any[];
    Region: any[];
    Subregion: any[];
    Market: string;
  }

  export interface Options {
    DEFAULT: string[];
  }

  export interface Payload {
    defaultValue: string;
    options: Options;
  }

  export interface Estate {
    fieldType: string;
    payload: Payload;
  }

  export interface Options2 {
    DEFAULT: string[];
  }

  export interface Payload2 {
    defaultValue: string;
    options: Options2;
  }

  export interface Market {
    fieldType: string;
    payload: Payload2;
  }

  export interface Options3 {
    DEFAULT: string[];
  }

  export interface Payload3 {
    defaultValue: string;
    options: Options3;
  }

  export interface OwnerTypeSingleSelect {
    fieldType: string;
    payload: Payload3;
  }

  export interface Options4 {
    DEFAULT: string[];
    ROOM: string[];
  }

  export interface Payload4 {
    defaultValue: string;
    options: Options4;
  }

  export interface Transaction {
    fieldType: string;
    payload: Payload4;
  }

  export interface Options5 {
    DEFAULT: string[];
  }

  export interface Payload5 {
    defaultValue: string;
    options: Options5;
  }

  export interface DistanceRadius {
    fieldType: string;
    payload: Payload5;
  }

  export interface Options6 {
    DEFAULT: string[];
  }

  export interface Payload6 {
    defaultValue?: any;
    options: Options6;
  }

  export interface FreeFrom {
    fieldType: string;
    payload: Payload6;
  }

  export interface Options7 {
    defaultValue: string;
    DEFAULT: string[];
  }

  export interface Payload7 {
    options: Options7;
  }

  export interface InvestmentEstateType {
    fieldType: string;
    payload: Payload7;
  }

  export interface Payload8 {
    defaultValue: string;
  }

  export interface AdvertId {
    fieldType: string;
    payload: Payload8;
  }

  export interface Payload9 {
    defaultValue: string;
  }

  export interface Description {
    fieldType: string;
    payload: Payload9;
  }

  export interface Payload10 {
    defaultValue: string;
  }

  export interface InvestmentName {
    fieldType: string;
    payload: Payload10;
  }

  export interface Payload11 {
    defaultValue: string;
  }

  export interface DeveloperName {
    fieldType: string;
    payload: Payload11;
  }

  export interface Payload12 {
    defaultValue: string;
  }

  export interface Price {
    fieldType: string;
    payload: Payload12;
  }

  export interface Payload13 {
    defaultValue: string;
  }

  export interface Area {
    fieldType: string;
    payload: Payload13;
  }

  export interface Options8 {
    DEFAULT: string[];
  }

  export interface Payload14 {
    defaultValue: any[];
    options: Options8;
  }

  export interface RoomsNumber {
    fieldType: string;
    payload: Payload14;
  }

  export interface Options9 {
    FLAT: string[];
    HOUSE: string[];
  }

  export interface Payload15 {
    defaultValue: any[];
    options: Options9;
  }

  export interface BuildingType {
    fieldType: string;
    payload: Payload15;
  }

  export interface Payload16 {
    defaultValue: boolean;
  }

  export interface HasPhotos {
    fieldType: string;
    payload: Payload16;
  }

  export interface Payload17 {
    defaultValue: string;
  }

  export interface PricePerMeter {
    fieldType: string;
    payload: Payload17;
  }

  export interface Options10 {
    FLAT: string[];
    HOUSE: string[];
  }

  export interface Payload18 {
    defaultValue: any[];
    options: Options10;
  }

  export interface BuildingMaterial {
    fieldType: string;
    payload: Payload18;
  }

  export interface Options11 {
    DEFAULT: string[];
  }

  export interface Payload19 {
    defaultValue: any[];
    options: Options11;
  }

  export interface Floors {
    fieldType: string;
    payload: Payload19;
  }

  export interface Payload20 {
    defaultValue: string;
  }

  export interface FloorsNumber {
    fieldType: string;
    payload: Payload20;
  }

  export interface Payload21 {
    defaultValue: string;
  }

  export interface Height {
    fieldType: string;
    payload: Payload21;
  }

  export interface Payload22 {
    defaultValue: string;
  }

  export interface BuildYear {
    fieldType: string;
    payload: Payload22;
  }

  export interface Payload23 {
    defaultValue: boolean;
  }

  export interface IsPrivateOwner {
    fieldType: string;
    payload: Payload23;
  }

  export interface Payload24 {
    defaultValue: boolean;
  }

  export interface HasOpenDay {
    fieldType: string;
    payload: Payload24;
  }

  export interface Payload25 {
    defaultValue: boolean;
  }

  export interface IsExclusiveOffer {
    fieldType: string;
    payload: Payload25;
  }

  export interface Options12 {
    DEFAULT: string[];
  }

  export interface Payload26 {
    defaultValue?: any;
    options: Options12;
  }

  export interface DaysSinceCreated {
    fieldType: string;
    payload: Payload26;
  }

  export interface Payload27 {
    defaultValue: boolean;
  }

  export interface IsForStudents {
    fieldType: string;
    payload: Payload27;
  }

  export interface Payload28 {
    defaultValue: boolean;
  }

  export interface HasMovie {
    fieldType: string;
    payload: Payload28;
  }

  export interface Payload29 {
    defaultValue: boolean;
  }

  export interface IsBungalov {
    fieldType: string;
    payload: Payload29;
  }

  export interface Payload30 {
    defaultValue: boolean;
  }

  export interface IsRecreational {
    fieldType: string;
    payload: Payload30;
  }

  export interface Payload31 {
    defaultValue: boolean;
  }

  export interface HasWalkaround {
    fieldType: string;
    payload: Payload31;
  }

  export interface Payload32 {
    defaultValue: boolean;
  }

  export interface HasRemoteServices {
    fieldType: string;
    payload: Payload32;
  }

  export interface Options13 {
    FLAT: string[];
    COMMERCIAL_PROPERTY: string[];
  }

  export interface Payload33 {
    defaultValue: any[];
    options: Options13;
  }

  export interface Extras {
    fieldType: string;
    payload: Payload33;
  }

  export interface Payload34 {
    defaultValue: string;
  }

  export interface TerrainArea {
    fieldType: string;
    payload: Payload34;
  }

  export interface Options14 {
    DEFAULT: string[];
  }

  export interface Payload35 {
    defaultValue: any[];
    options: Options14;
  }

  export interface RoofType {
    fieldType: string;
    payload: Payload35;
  }

  export interface Options15 {
    DEFAULT: string[];
  }

  export interface Payload36 {
    defaultValue?: any;
    options: Options15;
  }

  export interface InvestmentState {
    fieldType: string;
    payload: Payload36;
  }

  export interface Options16 {
    FLAT: string[];
    HOUSE: string[];
    ROOM: string[];
  }

  export interface Payload37 {
    defaultValue: any[];
    options: Options16;
  }

  export interface Media {
    fieldType: string;
    payload: Payload37;
  }

  export interface Options17 {
    DEFAULT: string[];
  }

  export interface Payload38 {
    defaultValue: any[];
    options: Options17;
  }

  export interface PlotType {
    fieldType: string;
    payload: Payload38;
  }

  export interface Options18 {
    DEFAULT: string[];
  }

  export interface Payload39 {
    defaultValue: any[];
    options: Options18;
  }

  export interface Vicinity {
    fieldType: string;
    payload: Payload39;
  }

  export interface Options19 {
    COMMERCIAL_PROPERTY: string[];
    HALL: string[];
  }

  export interface Payload40 {
    defaultValue: any[];
    options: Options19;
  }

  export interface UseTypes {
    fieldType: string;
    payload: Payload40;
  }

  export interface Options20 {
    DEFAULT: string[];
  }

  export interface Payload41 {
    defaultValue: any[];
    options: Options20;
  }

  export interface Structure {
    fieldType: string;
    payload: Payload41;
  }

  export interface Options21 {
    FLAT: string[];
    HALL: string[];
  }

  export interface Payload42 {
    defaultValue: any[];
    options: Options21;
  }

  export interface Heating {
    fieldType: string;
    payload: Payload42;
  }

  export interface Options22 {
    DEFAULT: string[];
  }

  export interface Payload43 {
    defaultValue: any[];
    options: Options22;
  }

  export interface PeoplePerRoom {
    fieldType: string;
    payload: Payload43;
  }

  export interface FieldsMetadata {
    estate: Estate;
    market: Market;
    ownerTypeSingleSelect: OwnerTypeSingleSelect;
    transaction: Transaction;
    distanceRadius: DistanceRadius;
    freeFrom: FreeFrom;
    investmentEstateType: InvestmentEstateType;
    advertId: AdvertId;
    description: Description;
    investmentName: InvestmentName;
    developerName: DeveloperName;
    price: Price;
    area: Area;
    roomsNumber: RoomsNumber;
    buildingType: BuildingType;
    hasPhotos: HasPhotos;
    pricePerMeter: PricePerMeter;
    buildingMaterial: BuildingMaterial;
    floors: Floors;
    floorsNumber: FloorsNumber;
    height: Height;
    buildYear: BuildYear;
    isPrivateOwner: IsPrivateOwner;
    hasOpenDay: HasOpenDay;
    isExclusiveOffer: IsExclusiveOffer;
    daysSinceCreated: DaysSinceCreated;
    isForStudents: IsForStudents;
    hasMovie: HasMovie;
    isBungalov: IsBungalov;
    isRecreational: IsRecreational;
    hasWalkaround: HasWalkaround;
    hasRemoteServices: HasRemoteServices;
    extras: Extras;
    terrainArea: TerrainArea;
    roofType: RoofType;
    investmentState: InvestmentState;
    media: Media;
    plotType: PlotType;
    vicinity: Vicinity;
    useTypes: UseTypes;
    structure: Structure;
    heating: Heating;
    peoplePerRoom: PeoplePerRoom;
  }

  export interface PageProps {
    translations: Record<string, string>;
    lang: string;
    frontGraphQLUrl: string;
    environment: string;
    staticAssetsPrefix: string;
    fbCognitoLoginUrl: string;
    googleCognitoLoginUrl: string;
    currentUser?: any;
    laquesisResult: string;
    urlViewType: string;
    mapViewParams: MapViewParams;
    favorites: any[];
    pageTitle: string;
    pageHeading?: any;
    pageDescription: string;
    transaction: string;
    estate: string;
    location: string;
    data: Data;
    savedSearches: any[];
    filteringQueryParams: FilteringQueryParams;
    filterLocations: FilterLocations;
    filterAttributes: FilterAttributes;
    googleApiKey: string;
    sortingOption: SortingOption;
    tracking: Tracking;
    targeting: Targeting;
    canonicalURL: string;
    userSessionId: string;
    isBrandingFeatureEnabled: boolean;
    isOldSaveSearchQueryEnabled: boolean;
    isHelpForUkraineButtonEnabled: boolean;
    isMapEnabled: boolean;
    fieldsMetadata: FieldsMetadata;
    isListingItemContactSectionEnabled: boolean;
    experiments: any;
  }

  export interface Props {
    pageProps: PageProps;
    __N_SSP: boolean;
  }

  export interface Query {
    page: string;
    lang: string;
    searchingCriteria: string[];
  }

  export interface PageConfig {
    props: Props;
    page: string;
    query: Query;
    buildId: string;
    assetPrefix: string;
    isFallback: boolean;
    gssp: boolean;
    customServer: boolean;
  }

}

export namespace OtodomListing {
  export interface FeaturesByCategory {
    label: string;
    values: string[];
    __typename: string;
  }

  export interface OpenDay {
    date?: any;
    timeFrom?: any;
    timeTo?: any;
    __typename: string;
  }

  export interface Target {
    Area: string;
    AreaRange: any[];
    Build_year: string;
    Building_floors_num: string;
    Building_ownership: string[];
    Building_type: string[];
    City: string;
    City_id: string;
    Construction_status: string[];
    Country: string;
    Extras_types: string[];
    Equipment_types?: string[];
    Floor_no: string[];
    Heating: string[];
    Id: string;
    MarketType: string;
    Media_types: string[];
    ObidoAdvert: string;
    OfferType: string;
    Photo: string;
    Price: number;
    PriceRange: string[];
    Price_per_m: number;
    ProperType: string;
    Province: string;
    RegularUser: string;
    Rent: number;
    Rooms_num: string[];
    Subregion: string;
    Title: string;
    categoryId: string;
    env: string;
    hidePrice: string;
    seller_id: string;
    user_type: string;
  }

  export interface TopInformation {
    label: string;
    values: string[];
    unit: string;
    __typename: string;
  }

  export interface AdditionalInformation {
    label: string;
    values: string[];
    unit: string;
    __typename: string;
  }

  export interface Name {
    locale: string;
    value: string;
    __typename: string;
  }

  export interface Category {
    id: number;
    name: Name[];
    __typename: string;
  }

  export interface Characteristic {
    key: string;
    value: string;
    label: string;
    localizedValue: string;
    currency: string;
    suffix: string;
    __typename: string;
  }

  export interface Image {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    __typename: string;
  }

  export interface Links {
    localPlanUrl: string;
    videoUrl: string;
    view3dUrl: string;
    walkaroundUrl: string;
    __typename: string;
  }

  export interface Coordinates {
    latitude: number;
    longitude: number;
    radius: number;
    zoomLevel: number;
    __typename: string;
  }

  export interface Address {
    locale: string;
    value: string;
    __typename: string;
  }

  export interface GeoLevel {
    id: string;
    label: string;
    type: string;
    __typename: string;
  }

  export interface Location {
    coordinates: Coordinates;
    address: Address[];
    geoLevels: GeoLevel[];
    __typename: string;
  }

  export interface GeoLevel2 {
    name: string;
    __typename: string;
  }

  export interface Reference {
    geoLevel: GeoLevel2;
    areaPrice: string;
    areaPriceUnit: string;
    price: string;
    priceUnit: string;
    __typename: string;
  }

  export interface GeoLevel3 {
    name: string;
    __typename: string;
  }

  export interface Constraints {
    category: string;
    date: string;
    geoLevel: GeoLevel3;
    typology: string;
    __typename: string;
  }

  export interface Value {
    minValue: string;
    meanValue: string;
    maxValue: string;
    unit: string;
    __typename: string;
  }

  export interface PriceTrend {
    constraints: Constraints;
    value: Value;
    __typename: string;
  }

  export interface GeoLevel4 {
    name: string;
    __typename: string;
  }

  export interface Constraints2 {
    category: string;
    date: string;
    geoLevel: GeoLevel4;
    typology: string;
    __typename: string;
  }

  export interface Value2 {
    minValue: string;
    meanValue: string;
    maxValue: string;
    unit: string;
    __typename: string;
  }

  export interface AreaPriceTrend {
    constraints: Constraints2;
    value: Value2;
    __typename: string;
  }

  export interface Statistics {
    reference: Reference;
    priceTrend: PriceTrend[];
    areaPriceTrend: AreaPriceTrend[];
    __typename: string;
  }

  export interface Owner {
    id: number;
    name: string;
    type: string;
    phones: string[];
    imageUrl: string;
    contacts: any[];
    __typename: string;
  }

  export interface Agency {
    id: number;
    name: string;
    licenseNumber: string;
    type: string;
    phones: string[];
    address: string;
    imageUrl: string;
    url: string;
    leaderYear: string;
    brandingVisible: boolean;
    __typename: string;
  }

  export interface Seo {
    title: string;
    description: string;
    __typename: string;
  }

  export interface Breadcrumb {
    label: string;
    locative: string;
    url: string;
    __typename: string;
  }

  export interface Price {
    value: string;
    unit: string;
    __typename: string;
  }

  export interface UserAdvert {
    url: string;
    image: string;
    roomsNum: string;
    pricePerM: number;
    price: Price;
    netArea: string;
    title: string;
    __typename: string;
  }

  export interface PaginatedUnits {
    items?: any;
    isPriceHidden?: any;
    pagination?: any;
    facets?: any;
    __typename: string;
  }

  export interface ContactDetails {
    name: string;
    type: string;
    phones: string[];
    imageURLSmall: string;
  }

  export interface Ad {
    id: number;
    publicId: string;
    slug: string;
    advertiserType: string;
    advertType: string;
    dateCreated: string;
    dateModified: string;
    description: string;
    developmentId: number;
    developmentTitle: string;
    developmentUrl: string;
    exclusiveOffer: boolean;
    externalId: string;
    features: string[];
    featuresByCategory: FeaturesByCategory[];
    featuresWithoutCategory: any[];
    openDay: OpenDay;
    referenceId: string;
    target: Target;
    title: string;
    topInformation: TopInformation[];
    additionalInformation: AdditionalInformation[];
    url: string;
    status: string;
    category: Category;
    characteristics: Characteristic[];
    images: Image[];
    links: Links;
    location: Location;
    statistics: Statistics;
    owner: Owner;
    agency: Agency;
    seo: Seo;
    breadcrumbs: Breadcrumb[];
    userAdverts: UserAdvert[];
    paginatedUnits: PaginatedUnits;
    __typename: string;
    contactDetails: ContactDetails;
  }

  export interface AdTrackingData {
    touch_point_page: string;
    lat: number;
    long: number;
    ad_photo: number;
    price_currency: string;
    cat_l1_id: number;
    cat_l1_name: string;
    ad_id: string;
    ad_price: number;
    business: string;
    city_id: string;
    city_name: string;
    market: string;
    poster_type: string;
    surface?: any;
    region_id: string;
    region_name: string;
    subregion_id: string;
    seller_id: string;
    obido_advert: string;
  }

  export interface PageProps {
    translations: Record<string, string>;
    lang: string;
    frontGraphQLUrl: string;
    environment: string;
    staticAssetsPrefix: string;
    fbCognitoLoginUrl: string;
    googleCognitoLoginUrl: string;
    currentUser?: any;
    laquesisResult: string;
    id: string;
    ad: Ad;
    googleApiKey: string;
    sphereApiToken: string;
    relativeUrl: string;
    adTrackingData: AdTrackingData;
    referer?: any;
    userSessionId: string;
    isBrandingFeatureEnabled: boolean;
    isAdFinanceLinkEnabled: boolean;
    isNewInformationEnabled: boolean;
    isNewProjectPageEnabled: boolean;
    isNewApartmentsForSalePostingFormEnabled: boolean;
    areAdPageExtraContactOptionsAvailable: boolean;
    experiments: any;
  }

  export interface Props {
    pageProps: PageProps;
    __N_SSP: boolean;
  }

  export interface Query {
    lang: string;
    id: string;
  }

  export interface PageConfig {
    props: Props;
    page: string;
    query: Query;
    buildId: string;
    assetPrefix: string;
    isFallback: boolean;
    gssp: boolean;
    customServer: boolean;
  }
}
