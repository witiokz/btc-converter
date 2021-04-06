import { CurrencyItem } from "./CurrencyItem";
import { CurrencyUpdateDate } from "./CurrencyUpdateDate";

export interface CurrencyModel {
  currencies: CurrencyItem[];
  chartName: string;
  disclaimer: string;
  time: CurrencyUpdateDate;
}
