import coinGeckoApi from "./coingecko-sdk/index";

class CoinGeckoSdk {
  public static initClient({
    accessKey,
    pro = true,
  }: {
    pro: boolean;
    accessKey: string;
  }) {
    coinGeckoApi.auth(accessKey);

    if (!pro) {
      coinGeckoApi.server("https://api.coingecko.com/api/v3");
    }

    return coinGeckoApi;
  }
}

export default CoinGeckoSdk;
