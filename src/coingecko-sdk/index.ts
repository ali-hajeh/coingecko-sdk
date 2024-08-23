import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'coingecko-sdk/3.1.0 (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * This endpoint allows you to **check the API server status**.
   *
   * @summary Check API server status
   */
  pingServer(): Promise<FetchResponse<200, types.PingServerResponse200>> {
    return this.core.fetch('/ping', 'get');
  }

  /**
   * This endpoint allows you to **monitor your account's API usage, including rate limits,
   * monthly total credits, remaining credits, and more**.
   *
   * @summary 💼 API Usage
   */
  apiUsage(): Promise<FetchResponse<200, types.ApiUsageResponse200>> {
    return this.core.fetch('/key', 'get');
  }

  /**
   * This endpoint allows you to **query the prices of one or more coins by using their
   * unique Coin API IDs**.
   *
   * @summary Coin Price by IDs
   */
  simplePrice(metadata: types.SimplePriceMetadataParam): Promise<FetchResponse<200, types.SimplePriceResponse200>> {
    return this.core.fetch('/simple/price', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query a token price by using token contract address**.
   *
   * @summary Coin Price by Token Addresses
   */
  simpleTokenPrice(metadata: types.SimpleTokenPriceMetadataParam): Promise<FetchResponse<200, types.SimpleTokenPriceResponse200>> {
    return this.core.fetch('/simple/token_price/{id}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the supported currencies on CoinGecko**.
   *
   * @summary Supported Currencies List
   */
  simpleSupportedCurrencies(): Promise<FetchResponse<200, types.SimpleSupportedCurrenciesResponse200>> {
    return this.core.fetch('/simple/supported_vs_currencies', 'get');
  }

  /**
   * This endpoint allows you to **query all the supported coins on CoinGecko with coins id,
   * name and symbol**.
   *
   * @summary Coins List (ID Map)
   */
  coinsList(metadata?: types.CoinsListMetadataParam): Promise<FetchResponse<200, types.CoinsListResponse200>> {
    return this.core.fetch('/coins/list', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the top 30 coins with largest price gain and loss by
   * a specific time duration**
   *
   * @summary 💼 Top Gainers & Losers
   */
  coinsTopGainersLosers(metadata: types.CoinsTopGainersLosersMetadataParam): Promise<FetchResponse<200, types.CoinsTopGainersLosersResponse200>> {
    return this.core.fetch('/coins/top_gainers_losers', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the latest 200 coins that recently listed on
   * CoinGecko**
   *
   * @summary 💼 Recently Added Coins
   */
  coinsListNew(): Promise<FetchResponse<200, types.CoinsListNewResponse200>> {
    return this.core.fetch('/coins/list/new', 'get');
  }

  /**
   * This endpoint allows you to **query all the supported coins with price, market cap,
   * volume and market related data**.
   *
   * @summary Coins List with Market Data
   */
  coinsMarkets(metadata: types.CoinsMarketsMetadataParam): Promise<FetchResponse<200, types.CoinsMarketsResponse200>> {
    return this.core.fetch('/coins/markets', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the coin data of a coin (name, price, market
   * .... including exchange tickers) on CoinGecko coin page based on a particular coin id**.
   *
   * @summary Coin Data by ID
   */
  coinsId(metadata: types.CoinsIdMetadataParam): Promise<FetchResponse<200, types.CoinsIdResponse200>> {
    return this.core.fetch('/coins/{id}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the coin tickers on both centralized exchange (cex)
   * and decentralized exchange (dex) based on a particular coin id**.
   *
   * @summary Coin Tickers by ID
   */
  coinsIdTickers(metadata: types.CoinsIdTickersMetadataParam): Promise<FetchResponse<200, types.CoinsIdTickersResponse200>> {
    return this.core.fetch('/coins/{id}/tickers', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the historical data (price, market cap, 24hrs
   * volume, etc) at a given date for a coin based on a particular coin id**.
   *
   * @summary Coin Historical Data by ID
   */
  coinsIdHistory(metadata: types.CoinsIdHistoryMetadataParam): Promise<FetchResponse<200, types.CoinsIdHistoryResponse200>> {
    return this.core.fetch('/coins/{id}/history', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get the historical chart data of a coin including time in
   * UNIX, price, market cap and 24hrs volume based on particular coin id**.
   *
   * @summary Coin Historical Chart Data by ID
   */
  coinsIdMarketChart(metadata: types.CoinsIdMarketChartMetadataParam): Promise<FetchResponse<200, types.CoinsIdMarketChartResponse200>> {
    return this.core.fetch('/coins/{id}/market_chart', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get the historical chart data of a coin within certain
   * time range in UNIX along with price, market cap and 24hrs volume based on particular
   * coin id**.
   *
   * @summary Coin Historical Chart Data within Time Range by ID
   */
  coinsIdMarketChartRange(metadata: types.CoinsIdMarketChartRangeMetadataParam): Promise<FetchResponse<200, types.CoinsIdMarketChartRangeResponse200>> {
    return this.core.fetch('/coins/{id}/market_chart/range', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin
   * based on particular coin id**.
   *
   * @summary Coin OHLC Chart by ID
   */
  coinsIdOhlc(metadata: types.CoinsIdOhlcMetadataParam): Promise<FetchResponse<200, types.CoinsIdOhlcResponse200>> {
    return this.core.fetch('/coins/{id}/ohlc', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin
   * within a range of timestamp based on particular coin id**.
   *
   * @summary 💼 Coin OHLC Chart within Time Range by ID
   */
  coinsIdOhlcRange(metadata: types.CoinsIdOhlcRangeMetadataParam): Promise<FetchResponse<200, types.CoinsIdOhlcRangeResponse200>> {
    return this.core.fetch('/coins/{id}/ohlc/range', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the coin data (name, price, market ....
   * including exchange tickers) on CoinGecko coin page based on asset platform and
   * particular token contract address**.
   *
   * @summary Coin Data by Token Address
   */
  coinsContractAddress(metadata: types.CoinsContractAddressMetadataParam): Promise<FetchResponse<200, types.CoinsContractAddressResponse200>> {
    return this.core.fetch('/coins/{id}/contract/{contract_address}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get the historical chart data including time in UNIX,
   * price, market cap and 24hrs volume based on asset platform and particular token contract
   * address**.
   *
   * @summary Coin Historical Chart Data by Token Address
   */
  contractAddressMarketChart(metadata: types.ContractAddressMarketChartMetadataParam): Promise<FetchResponse<200, types.ContractAddressMarketChartResponse200>> {
    return this.core.fetch('/coins/{id}/contract/{contract_address}/market_chart', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get the historical chart data within certain time range in
   * UNIX along with price, market cap and 24hrs volume  based on asset platform and
   * particular token contract address**.
   *
   * @summary Coin Historical Chart Data within Time Range by Token Address
   */
  contractAddressMarketChartRange(metadata: types.ContractAddressMarketChartRangeMetadataParam): Promise<FetchResponse<200, types.ContractAddressMarketChartRangeResponse200>> {
    return this.core.fetch('/coins/{id}/contract/{contract_address}/market_chart/range', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query historical circulating supply of a coin by number of
   * days away from now based on provided coin id**
   *
   * @summary 👑 Circulating Supply Chart by ID
   */
  coinsIdCirculatingSupplyChart(metadata: types.CoinsIdCirculatingSupplyChartMetadataParam): Promise<FetchResponse<200, types.CoinsIdCirculatingSupplyChartResponse200>> {
    return this.core.fetch('/coins/{id}/circulating_supply_chart', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query historical circulating supply of a coin, within a
   * range of timestamp based on the provided coin id**
   *
   * @summary 👑 Circulating Supply chart within Time Range by ID
   */
  coinsIdCirculatingSupplyChartRange(metadata: types.CoinsIdCirculatingSupplyChartRangeMetadataParam): Promise<FetchResponse<200, types.CoinsIdCirculatingSupplyChartRangeResponse200>> {
    return this.core.fetch('/coins/{id}/circulating_supply_chart/range', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query historical total supply of a coin by number of days
   * away from now based on provided coin id**
   *
   * @summary 👑 Total Supply Chart by ID
   */
  coinsIdTotalSupplyChart(metadata: types.CoinsIdTotalSupplyChartMetadataParam): Promise<FetchResponse<200, types.CoinsIdTotalSupplyChartResponse200>> {
    return this.core.fetch('/coins/{id}/total_supply_chart', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query historical total supply of a coin, within a range of
   * timestamp based on the provided coin id**
   *
   * @summary 👑 Total Supply chart within time range by ID
   */
  coinsIdTotalSupplyChartRange(metadata: types.CoinsIdTotalSupplyChartRangeMetadataParam): Promise<FetchResponse<200, types.CoinsIdTotalSupplyChartRangeResponse200>> {
    return this.core.fetch('/coins/{id}/total_supply_chart/range', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the asset platforms on CoinGecko**.
   *
   * @summary Asset Platforms List (ID Map)
   */
  assetPlatformsList(metadata?: types.AssetPlatformsListMetadataParam): Promise<FetchResponse<200, types.AssetPlatformsListResponse200>> {
    return this.core.fetch('/asset_platforms', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get full list of tokens of a blockchain network (asset
   * platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**
   *
   * @summary 👑 Token Lists by Asset Platform ID
   */
  tokenLists(metadata: types.TokenListsMetadataParam): Promise<FetchResponse<200, types.TokenListsResponse200>> {
    return this.core.fetch('/token_lists/{asset_platform_id}/all.json', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the coins categories on CoinGecko**.
   *
   * @summary Coins Categories List (ID Map)
   */
  coinsCategoriesList(): Promise<FetchResponse<200, types.CoinsCategoriesListResponse200>> {
    return this.core.fetch('/coins/categories/list', 'get');
  }

  /**
   * This endpoint allows you to **query all the coins categories with market data (market
   * cap, volume, etc.) on CoinGecko**.
   *
   * @summary Coins Categories List with Market Data
   */
  coinsCategories(metadata?: types.CoinsCategoriesMetadataParam): Promise<FetchResponse<200, types.CoinsCategoriesResponse200>> {
    return this.core.fetch('/coins/categories', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the supported exchanges with exchanges’ data
   * (id, name, country, .... etc) that have active trading volumes on CoinGecko**.
   *
   * @summary Exchanges List with data
   */
  exchanges(metadata?: types.ExchangesMetadataParam): Promise<FetchResponse<200, types.ExchangesResponse200>> {
    return this.core.fetch('/exchanges', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the exchanges with id and name**.
   *
   * @summary Exchanges List (ID Map)
   */
  exchangesList(): Promise<FetchResponse<200, types.ExchangesListResponse200>> {
    return this.core.fetch('/exchanges/list', 'get');
  }

  /**
   * This endpoint allows you to **query exchange’s data (name, year established, country,
   * .... etc), exchange volume in BTC and top 100 tickers based on exchange’s id**.
   *
   * @summary Exchange Data by ID
   */
  exchangesId(metadata: types.ExchangesIdMetadataParam): Promise<FetchResponse<200, types.ExchangesIdResponse200>> {
    return this.core.fetch('/exchanges/{id}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query exchange's tickers based on exchange’s id**.
   *
   * @summary Exchange Tickers by ID
   */
  exchangesIdTickers(metadata: types.ExchangesIdTickersMetadataParam): Promise<FetchResponse<200, types.ExchangesIdTickersResponse200>> {
    return this.core.fetch('/exchanges/{id}/tickers', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the historical volume chart data with time in UNIX
   * and trading volume data in BTC based on exchange’s id**.
   *
   * @summary Exchange Volume Chart by ID
   */
  exchangesIdVolumeChart(metadata: types.ExchangesIdVolumeChartMetadataParam): Promise<FetchResponse<200, types.ExchangesIdVolumeChartResponse200>> {
    return this.core.fetch('/exchanges/{id}/volume_chart', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the historical volume chart data in BTC by
   * specifying date range in UNIX based on exchange’s id**
   *
   * @summary 💼 Exchange Volume Chart within Time Range by ID
   */
  exchangesIdVolumeChartRange(metadata: types.ExchangesIdVolumeChartRangeMetadataParam): Promise<FetchResponse<200, types.ExchangesIdVolumeChartRangeResponse200>> {
    return this.core.fetch('/exchanges/{id}/volume_chart/range', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the tickers from derivatives exchanges on
   * CoinGecko**.
   *
   * @summary Derivatives Tickers List
   */
  derivativesTickers(): Promise<FetchResponse<200, types.DerivativesTickersResponse200>> {
    return this.core.fetch('/derivatives', 'get');
  }

  /**
   * This endpoint allows you to **query all the derivatives exchanges with related data (id,
   * name, open interest, .... etc) on CoinGecko**.
   *
   * @summary Derivatives Exchanges List with Data
   */
  derivativesExchanges(metadata?: types.DerivativesExchangesMetadataParam): Promise<FetchResponse<200, types.DerivativesExchangesResponse200>> {
    return this.core.fetch('/derivatives/exchanges', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the derivatives exchange’s related data (id, name,
   * open interest, .... etc) based on the exchanges’ id**.
   *
   * @summary Derivatives Exchange Data by ID
   */
  derivativesExchangesId(metadata: types.DerivativesExchangesIdMetadataParam): Promise<FetchResponse<200, types.DerivativesExchangesIdResponse200>> {
    return this.core.fetch('/derivatives/exchanges/{id}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the derivatives exchanges with id and name on
   * CoinGecko**.
   *
   * @summary Derivatives Exchanges List (ID Map)
   */
  derivativesExchangesList(): Promise<FetchResponse<200, types.DerivativesExchangesListResponse200>> {
    return this.core.fetch('/derivatives/exchanges/list', 'get');
  }

  /**
   * This endpoint allows you to **query all supported NFTs with id, contract address, name,
   * asset platform id and symbol on CoinGecko**.
   *
   * @summary NFTs List (ID Map)
   */
  nftsList(metadata?: types.NftsListMetadataParam): Promise<FetchResponse<200, types.NftsListResponse200>> {
    return this.core.fetch('/nfts/list', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24 hr
   * volume....) based on the nft collection id**.
   *
   * @summary NFTs Collection Data by ID
   */
  nftsId(metadata: types.NftsIdMetadataParam): Promise<FetchResponse<200, types.NftsIdResponse200>> {
    return this.core.fetch('/nfts/{id}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24 hr
   * volume....) based on the nft collection contract address and respective asset
   * platform**.
   *
   * @summary NFTs Collection Data by Contract Address
   */
  nftsContractAddress(metadata: types.NftsContractAddressMetadataParam): Promise<FetchResponse<200, types.NftsContractAddressResponse200>> {
    return this.core.fetch('/nfts/{asset_platform_id}/contract/{contract_address}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the supported NFT collections with floor price,
   * market cap, volume and market related data on CoinGecko**
   *
   * @summary 💼 NFTs List with Market Data
   */
  nftsMarkets(metadata?: types.NftsMarketsMetadataParam): Promise<FetchResponse<200, types.NftsMarketsResponse200>> {
    return this.core.fetch('/nfts/markets', 'get', metadata);
  }

  /**
   * This endpoint allows you **query historical market data of a NFT collection, including
   * floor price, market cap, and 24h volume, by number of days away from now**
   *
   * @summary 💼 NFTs Collection Historical Chart Data by ID
   */
  nftsIdMarketChart(metadata: types.NftsIdMarketChartMetadataParam): Promise<FetchResponse<200, types.NftsIdMarketChartResponse200>> {
    return this.core.fetch('/nfts/{id}/market_chart', 'get', metadata);
  }

  /**
   * This endpoint allows you **query historical market data of a NFT collection, including
   * floor price, market cap, and 24h volume, by number of days away from now based on the
   * provided contract address**
   *
   * @summary 💼 NFTs Collection Historical Chart Data by Contract Address
   */
  nftsContractAddressMarketChart(metadata: types.NftsContractAddressMarketChartMetadataParam): Promise<FetchResponse<200, types.NftsContractAddressMarketChartResponse200>> {
    return this.core.fetch('/nfts/{asset_platform_id}/contract/{contract_address}/market_chart', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the latest floor price and 24h volume of a NFT
   * collection, on each NFT marketplace, e.g. OpenSea and LooksRare**
   *
   * @summary 💼 NFTs Collection Tickers by ID
   */
  nftsIdTickers(metadata: types.NftsIdTickersMetadataParam): Promise<FetchResponse<200, types.NftsIdTickersResponse200>> {
    return this.core.fetch('/nfts/{id}/tickers', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query BTC exchange rates with other currencies**.
   *
   * @summary BTC-to-Currency Exchange Rates
   */
  exchangeRates(): Promise<FetchResponse<200, types.ExchangeRatesResponse200>> {
    return this.core.fetch('/exchange_rates', 'get');
  }

  /**
   * This endpoint allows you to **search for coins, categories and markets listed on
   * CoinGecko**.
   *
   * @summary Search Queries
   */
  searchData(metadata: types.SearchDataMetadataParam): Promise<FetchResponse<200, types.SearchDataResponse200>> {
    return this.core.fetch('/search', 'get', metadata);
  }

  /**
   * This endpoint allows you **query trending search coins, nfts and categories on CoinGecko
   * in the last 24 hours**.
   *
   * @summary Trending Search List
   */
  trendingSearch(): Promise<FetchResponse<200, types.TrendingSearchResponse200>> {
    return this.core.fetch('/search/trending', 'get');
  }

  /**
   * This endpoint allows you **query cryptocurrency global data including active
   * cryptocurrencies, markets, total crypto market cap and etc**.
   *
   * @summary Crypto Global Market Data
   */
  cryptoGlobal(): Promise<FetchResponse<200, types.CryptoGlobalResponse200>> {
    return this.core.fetch('/global', 'get');
  }

  /**
   * This endpoint allows you **query top 100 cryptocurrency global decentralized finance
   * (defi) data including defi market cap, trading volume**.
   *
   * @summary Global De-Fi Market Data
   */
  globalDeFi(): Promise<FetchResponse<200, types.GlobalDeFiResponse200>> {
    return this.core.fetch('/global/decentralized_finance_defi', 'get');
  }

  /**
   * This endpoint allows you to **query historical global market cap and volume data by
   * number of days away from now**
   *
   * @summary 💼 Global Market Cap Chart Data
   */
  globalMarketCapChart(metadata: types.GlobalMarketCapChartMetadataParam): Promise<FetchResponse<200, types.GlobalMarketCapChartResponse200>> {
    return this.core.fetch('/global/market_cap_chart', 'get', metadata);
  }

  /**
   * This endpoint allows you **query public companies’ bitcoin or ethereum holdings**.
   *
   * @summary Public Companies Holdings
   */
  companiesPublicTreasury(metadata: types.CompaniesPublicTreasuryMetadataParam): Promise<FetchResponse<200, types.CompaniesPublicTreasuryResponse200>> {
    return this.core.fetch('/companies/public_treasury/{coin_id}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get token price based on the provided token contract
   * address on a network**
   *
   * @summary Token Price by Token Addresses
   */
  onchainSimplePrice(metadata: types.OnchainSimplePriceMetadataParam): Promise<FetchResponse<200, types.OnchainSimplePriceResponse200>> {
    return this.core.fetch('/onchain/simple/networks/{network}/token_price/{addresses}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the supported networks on GeckoTerminal**
   *
   * @summary Supported Networks List (ID Map)
   */
  networksList(metadata?: types.NetworksListMetadataParam): Promise<FetchResponse<200, types.NetworksListResponse200>> {
    return this.core.fetch('/onchain/networks', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the supported decentralized exchanges (dexes)
   * based on the provided network on GeckoTerminal**
   *
   * @summary Supported Dexes List by Network (ID Map)
   */
  dexesList(metadata: types.DexesListMetadataParam): Promise<FetchResponse<200, types.DexesListResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/dexes', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the trending pools across all networks on
   * GeckoTerminal**
   *
   * @summary Trending Pools List
   */
  trendingPoolsList(metadata?: types.TrendingPoolsListMetadataParam): Promise<FetchResponse<200, types.TrendingPoolsListResponse200>> {
    return this.core.fetch('/onchain/networks/trending_pools', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the trending pools based on the provided network**
   *
   * @summary Trending Pools by Network
   */
  trendingPoolsNetwork(metadata: types.TrendingPoolsNetworkMetadataParam): Promise<FetchResponse<200, types.TrendingPoolsNetworkResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/trending_pools', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the specific pool based on the provided network and
   * pool address**
   *
   * @summary Specific Pool Data by Pool Address
   */
  poolAddress(metadata: types.PoolAddressMetadataParam): Promise<FetchResponse<200, types.PoolAddressResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/pools/{address}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query multiple pools based on the provided network and
   * pool address**
   *
   * @summary Multiple Pools Data by Pool Addresses
   */
  poolsAddresses(metadata: types.PoolsAddressesMetadataParam): Promise<FetchResponse<200, types.PoolsAddressesResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/pools/multi/{addresses}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the top pools based on the provided network**
   *
   * @summary Top Pools by Network
   */
  topPoolsNetwork(metadata: types.TopPoolsNetworkMetadataParam): Promise<FetchResponse<200, types.TopPoolsNetworkResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/pools', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the top pools based on the provided network and
   * decentralized exchange (dex)**
   *
   * @summary Top Pools by Dex
   */
  topPoolsDex(metadata: types.TopPoolsDexMetadataParam): Promise<FetchResponse<200, types.TopPoolsDexResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/dexes/{dex}/pools', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the latest pools based on provided network**
   *
   * @summary New Pools by Network
   */
  latestPoolsNetwork(metadata: types.LatestPoolsNetworkMetadataParam): Promise<FetchResponse<200, types.LatestPoolsNetworkResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/new_pools', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query all the latest pools across all networks on
   * GeckoTerminal**
   *
   * @summary New Pools List
   */
  latestPoolsList(metadata?: types.LatestPoolsListMetadataParam): Promise<FetchResponse<200, types.LatestPoolsListResponse200>> {
    return this.core.fetch('/onchain/networks/new_pools', 'get', metadata);
  }

  /**
   * This endpoint allows you to **search for pools on a network**
   *
   * @summary Search Pools
   */
  searchPools(metadata?: types.SearchPoolsMetadataParam): Promise<FetchResponse<200, types.SearchPoolsResponse200>> {
    return this.core.fetch('/onchain/search/pools', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query top pools based on the provided token contract
   * address on a network**
   *
   * @summary Top Pools by Token Address
   */
  topPoolsContractAddress(metadata: types.TopPoolsContractAddressMetadataParam): Promise<FetchResponse<200, types.TopPoolsContractAddressResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/tokens/{token_address}/pools', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query specific token data based on the provided token
   * contract address on a network**
   *
   * @summary Token Data by Token Address
   */
  tokenDataContractAddress(metadata: types.TokenDataContractAddressMetadataParam): Promise<FetchResponse<200, types.TokenDataContractAddressResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/tokens/{address}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query multiple tokens data based on the provided token
   * contract addresses on a network**
   *
   * @summary Tokens Data by Token Addresses
   */
  tokensDataContractAddresses(metadata: types.TokensDataContractAddressesMetadataParam): Promise<FetchResponse<200, types.TokensDataContractAddressesResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/tokens/multi/{addresses}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query specific token info such as name,symbol, coingecko
   * id etc. based on provided token contract address on a network**
   *
   * @summary Token Info by Token Address
   */
  tokenInfoContractAddress(metadata: types.TokenInfoContractAddressMetadataParam): Promise<FetchResponse<200, types.TokenInfoContractAddressResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/tokens/{address}/info', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query pool info including base and quote token info based
   * on provided pool contract address on a network**
   *
   * @summary Pool Tokens Info by Pool Address
   */
  poolTokenInfoContractAddress(metadata: types.PoolTokenInfoContractAddressMetadataParam): Promise<FetchResponse<200, types.PoolTokenInfoContractAddressResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/pools/{pool_address}/info', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query 100 most recently updated tokens info across all
   * networks on GeckoTerminal**
   *
   * @summary Most Recently Updated Tokens List
   */
  tokensInfoRecentUpdated(metadata?: types.TokensInfoRecentUpdatedMetadataParam): Promise<FetchResponse<200, types.TokensInfoRecentUpdatedResponse200>> {
    return this.core.fetch('/onchain/tokens/info_recently_updated', 'get', metadata);
  }

  /**
   * This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a
   * pool based on the provided pool address on a network**
   *
   * @summary Pool OHLCV chart by Pool Address
   */
  poolOhlcvContractAddress(metadata: types.PoolOhlcvContractAddressMetadataParam): Promise<FetchResponse<200, types.PoolOhlcvContractAddressResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}', 'get', metadata);
  }

  /**
   * This endpoint allows you to **query the last 300 trades in the past 24 hours based on
   * the provided pool address**
   *
   * @summary Past 24 Hour Trades by Pool Address
   */
  poolTradesContractAddress(metadata: types.PoolTradesContractAddressMetadataParam): Promise<FetchResponse<200, types.PoolTradesContractAddressResponse200>> {
    return this.core.fetch('/onchain/networks/{network}/pools/{pool_address}/trades', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { ApiUsageResponse200, AssetPlatformsListMetadataParam, AssetPlatformsListResponse200, CoinsCategoriesListResponse200, CoinsCategoriesMetadataParam, CoinsCategoriesResponse200, CoinsContractAddressMetadataParam, CoinsContractAddressResponse200, CoinsIdCirculatingSupplyChartMetadataParam, CoinsIdCirculatingSupplyChartRangeMetadataParam, CoinsIdCirculatingSupplyChartRangeResponse200, CoinsIdCirculatingSupplyChartResponse200, CoinsIdHistoryMetadataParam, CoinsIdHistoryResponse200, CoinsIdMarketChartMetadataParam, CoinsIdMarketChartRangeMetadataParam, CoinsIdMarketChartRangeResponse200, CoinsIdMarketChartResponse200, CoinsIdMetadataParam, CoinsIdOhlcMetadataParam, CoinsIdOhlcRangeMetadataParam, CoinsIdOhlcRangeResponse200, CoinsIdOhlcResponse200, CoinsIdResponse200, CoinsIdTickersMetadataParam, CoinsIdTickersResponse200, CoinsIdTotalSupplyChartMetadataParam, CoinsIdTotalSupplyChartRangeMetadataParam, CoinsIdTotalSupplyChartRangeResponse200, CoinsIdTotalSupplyChartResponse200, CoinsListMetadataParam, CoinsListNewResponse200, CoinsListResponse200, CoinsMarketsMetadataParam, CoinsMarketsResponse200, CoinsTopGainersLosersMetadataParam, CoinsTopGainersLosersResponse200, CompaniesPublicTreasuryMetadataParam, CompaniesPublicTreasuryResponse200, ContractAddressMarketChartMetadataParam, ContractAddressMarketChartRangeMetadataParam, ContractAddressMarketChartRangeResponse200, ContractAddressMarketChartResponse200, CryptoGlobalResponse200, DerivativesExchangesIdMetadataParam, DerivativesExchangesIdResponse200, DerivativesExchangesListResponse200, DerivativesExchangesMetadataParam, DerivativesExchangesResponse200, DerivativesTickersResponse200, DexesListMetadataParam, DexesListResponse200, ExchangeRatesResponse200, ExchangesIdMetadataParam, ExchangesIdResponse200, ExchangesIdTickersMetadataParam, ExchangesIdTickersResponse200, ExchangesIdVolumeChartMetadataParam, ExchangesIdVolumeChartRangeMetadataParam, ExchangesIdVolumeChartRangeResponse200, ExchangesIdVolumeChartResponse200, ExchangesListResponse200, ExchangesMetadataParam, ExchangesResponse200, GlobalDeFiResponse200, GlobalMarketCapChartMetadataParam, GlobalMarketCapChartResponse200, LatestPoolsListMetadataParam, LatestPoolsListResponse200, LatestPoolsNetworkMetadataParam, LatestPoolsNetworkResponse200, NetworksListMetadataParam, NetworksListResponse200, NftsContractAddressMarketChartMetadataParam, NftsContractAddressMarketChartResponse200, NftsContractAddressMetadataParam, NftsContractAddressResponse200, NftsIdMarketChartMetadataParam, NftsIdMarketChartResponse200, NftsIdMetadataParam, NftsIdResponse200, NftsIdTickersMetadataParam, NftsIdTickersResponse200, NftsListMetadataParam, NftsListResponse200, NftsMarketsMetadataParam, NftsMarketsResponse200, OnchainSimplePriceMetadataParam, OnchainSimplePriceResponse200, PingServerResponse200, PoolAddressMetadataParam, PoolAddressResponse200, PoolOhlcvContractAddressMetadataParam, PoolOhlcvContractAddressResponse200, PoolTokenInfoContractAddressMetadataParam, PoolTokenInfoContractAddressResponse200, PoolTradesContractAddressMetadataParam, PoolTradesContractAddressResponse200, PoolsAddressesMetadataParam, PoolsAddressesResponse200, SearchDataMetadataParam, SearchDataResponse200, SearchPoolsMetadataParam, SearchPoolsResponse200, SimplePriceMetadataParam, SimplePriceResponse200, SimpleSupportedCurrenciesResponse200, SimpleTokenPriceMetadataParam, SimpleTokenPriceResponse200, TokenDataContractAddressMetadataParam, TokenDataContractAddressResponse200, TokenInfoContractAddressMetadataParam, TokenInfoContractAddressResponse200, TokenListsMetadataParam, TokenListsResponse200, TokensDataContractAddressesMetadataParam, TokensDataContractAddressesResponse200, TokensInfoRecentUpdatedMetadataParam, TokensInfoRecentUpdatedResponse200, TopPoolsContractAddressMetadataParam, TopPoolsContractAddressResponse200, TopPoolsDexMetadataParam, TopPoolsDexResponse200, TopPoolsNetworkMetadataParam, TopPoolsNetworkResponse200, TrendingPoolsListMetadataParam, TrendingPoolsListResponse200, TrendingPoolsNetworkMetadataParam, TrendingPoolsNetworkResponse200, TrendingSearchResponse200 } from './types';
