import { CurrencyModel } from "../model/CurrencyModel";
import { CurrencyResponse } from "../model/CurrencyResponse";

const baseApiUrl = "https://api.coindesk.com";
export const getCurrencyPriceDataApiUrl = `${baseApiUrl}/v1/bpi/currentprice.json`;

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export const http = async <T extends unknown>(request: RequestInfo): Promise<HttpResponse<T>> => {
  const response: HttpResponse<T> = await fetch(request);

  try {
    response.parsedBody = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

export const getCurrencyPriceData = async (): Promise<CurrencyModel | null> => {
  const currencyPriceDataResponse = await http<CurrencyResponse>(getCurrencyPriceDataApiUrl);
  const currencyData = currencyPriceDataResponse.parsedBody;

  if (currencyData) {
    const currencyModel: CurrencyModel = {
      chartName: currencyData.chartName,
      disclaimer: currencyData.disclaimer,
      time: currencyData.time,
      currencies: Object.values(currencyData.bpi),
    };

    return currencyModel;
  }

  return null;
};
