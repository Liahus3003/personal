export interface CountryCategory {
  category: string;
  countries: CountryMapping[];
}

export interface CountryMapping {
  countryName: string;
  regionName: string;
}
