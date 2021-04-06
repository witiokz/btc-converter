import { CurrencyUpdateDate } from "./CurrencyUpdateDate";

export interface CurrencyResponse {
  bpi: any;
  chartName: string;
  disclaimer: string;
  time: CurrencyUpdateDate;
}
