export interface Country {
  countryId: number;
  name: string;
  isocodeTwo: string;
  isocodeThree: string;
  associatedCountryCodeTwo: string;
  associatedCountryCodeThree: string;
  territory: boolean;
  region: string;
  shopEnabled: boolean;
  enrollmentEnabled: boolean;
  corporatesiteEnabled: boolean;
  titanPlatformEnabled: boolean;
  shopUrl: string;
  enrollmentUrl: string;
  corporateSiteUrl: string;
  rowStateId: number;
  defaultLangName: string;
  defaultLangCode: string;
}
