import { client } from "./client";

export const getClient = ({
  accessKey,
  pro = true,
}: {
  pro: boolean;
  accessKey?: string;
}) => {
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
