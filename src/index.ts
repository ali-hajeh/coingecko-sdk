import { client, coinsMarkets } from "./client";

export const initClient = ({
  accessKey,
  pro = false,
}: {
  accessKey?: string;
  pro?: boolean;
} & (
  | {
      pro?: undefined | false;
      accessKey?: never;
    }
  | {
      pro: true;
      accessKey: string;
    }
) = {}) => {
  client.setConfig({
    baseUrl: pro
      ? "https://pro-api.coingecko.com/api/v3"
      : "https://api.coingecko.com/api/v3",
    headers: pro && {
      "x-cg-pro-api-key": accessKey,
    },
  });

  return client;
};

export * from "./client";
