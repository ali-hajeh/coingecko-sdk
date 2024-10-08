// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { PingServerError, PingServerResponse, ApiUsageError, ApiUsageResponse, SimplePriceData, SimplePriceError, SimplePriceResponse, SimpleTokenPriceData, SimpleTokenPriceError, SimpleTokenPriceResponse, SimpleSupportedCurrenciesError, SimpleSupportedCurrenciesResponse, CoinsListData, CoinsListError, CoinsListResponse, CoinsTopGainersLosersData, CoinsTopGainersLosersError, CoinsTopGainersLosersResponse, CoinsListNewError, CoinsListNewResponse, CoinsMarketsData, CoinsMarketsError, CoinsMarketsResponse, CoinsIdData, CoinsIdError, CoinsIdResponse, CoinsIdTickersData, CoinsIdTickersError, CoinsIdTickersResponse, CoinsIdHistoryData, CoinsIdHistoryError, CoinsIdHistoryResponse, CoinsIdMarketChartData, CoinsIdMarketChartError, CoinsIdMarketChartResponse, CoinsIdMarketChartRangeData, CoinsIdMarketChartRangeError, CoinsIdMarketChartRangeResponse, CoinsIdOhlcData, CoinsIdOhlcError, CoinsIdOhlcResponse, CoinsIdOhlcRangeData, CoinsIdOhlcRangeError, CoinsIdOhlcRangeResponse, CoinsContractAddressData, CoinsContractAddressError, CoinsContractAddressResponse, ContractAddressMarketChartData, ContractAddressMarketChartError, ContractAddressMarketChartResponse, ContractAddressMarketChartRangeData, ContractAddressMarketChartRangeError, ContractAddressMarketChartRangeResponse, CoinsIdCirculatingSupplyChartData, CoinsIdCirculatingSupplyChartError, CoinsIdCirculatingSupplyChartResponse, CoinsIdCirculatingSupplyChartRangeData, CoinsIdCirculatingSupplyChartRangeError, CoinsIdCirculatingSupplyChartRangeResponse, CoinsIdTotalSupplyChartData, CoinsIdTotalSupplyChartError, CoinsIdTotalSupplyChartResponse, CoinsIdTotalSupplyChartRangeData, CoinsIdTotalSupplyChartRangeError, CoinsIdTotalSupplyChartRangeResponse, AssetPlatformsListData, AssetPlatformsListError, AssetPlatformsListResponse, TokenListsData, TokenListsError, TokenListsResponse, CoinsCategoriesListError, CoinsCategoriesListResponse, CoinsCategoriesData, CoinsCategoriesError, CoinsCategoriesResponse, ExchangesData, ExchangesError, ExchangesResponse, ExchangesListError, ExchangesListResponse, ExchangesIdData, ExchangesIdError, ExchangesIdResponse, ExchangesIdTickersData, ExchangesIdTickersError, ExchangesIdTickersResponse, ExchangesIdVolumeChartData, ExchangesIdVolumeChartError, ExchangesIdVolumeChartResponse, ExchangesIdVolumeChartRangeData, ExchangesIdVolumeChartRangeError, ExchangesIdVolumeChartRangeResponse, DerivativesTickersError, DerivativesTickersResponse, DerivativesExchangesData, DerivativesExchangesError, DerivativesExchangesResponse, DerivativesExchangesIdData, DerivativesExchangesIdError, DerivativesExchangesIdResponse, DerivativesExchangesListError, DerivativesExchangesListResponse, NftsListData, NftsListError, NftsListResponse, NftsIdData, NftsIdError, NftsIdResponse, NftsContractAddressData, NftsContractAddressError, NftsContractAddressResponse, NftsMarketsData, NftsMarketsError, NftsMarketsResponse, NftsIdMarketChartData, NftsIdMarketChartError, NftsIdMarketChartResponse, NftsContractAddressMarketChartData, NftsContractAddressMarketChartError, NftsContractAddressMarketChartResponse, NftsIdTickersData, NftsIdTickersError, NftsIdTickersResponse, ExchangeRatesError, ExchangeRatesResponse, SearchDataData, SearchDataError, SearchDataResponse, TrendingSearchError, TrendingSearchResponse, CryptoGlobalError, CryptoGlobalResponse, GlobalDeFiError, GlobalDeFiResponse, GlobalMarketCapChartData, GlobalMarketCapChartError, GlobalMarketCapChartResponse, CompaniesPublicTreasuryData, CompaniesPublicTreasuryError, CompaniesPublicTreasuryResponse, OnchainSimplePriceData, OnchainSimplePriceError, OnchainSimplePriceResponse, NetworksListData, NetworksListError, NetworksListResponse, DexesListData, DexesListError, DexesListResponse, TrendingPoolsListData, TrendingPoolsListError, TrendingPoolsListResponse, TrendingPoolsNetworkData, TrendingPoolsNetworkError, TrendingPoolsNetworkResponse, PoolAddressData, PoolAddressError, PoolAddressResponse, PoolsAddressesData, PoolsAddressesError, PoolsAddressesResponse, TopPoolsNetworkData, TopPoolsNetworkError, TopPoolsNetworkResponse, TopPoolsDexData, TopPoolsDexError, TopPoolsDexResponse, LatestPoolsNetworkData, LatestPoolsNetworkError, LatestPoolsNetworkResponse, LatestPoolsListData, LatestPoolsListError, LatestPoolsListResponse, SearchPoolsData, SearchPoolsError, SearchPoolsResponse, TopPoolsContractAddressData, TopPoolsContractAddressError, TopPoolsContractAddressResponse, TokenDataContractAddressData, TokenDataContractAddressError, TokenDataContractAddressResponse, TokensDataContractAddressesData, TokensDataContractAddressesError, TokensDataContractAddressesResponse, TokenInfoContractAddressData, TokenInfoContractAddressError, TokenInfoContractAddressResponse, PoolTokenInfoContractAddressData, PoolTokenInfoContractAddressError, PoolTokenInfoContractAddressResponse, TokensInfoRecentUpdatedData, TokensInfoRecentUpdatedError, TokensInfoRecentUpdatedResponse, PoolOhlcvContractAddressData, PoolOhlcvContractAddressError, PoolOhlcvContractAddressResponse, PoolTradesContractAddressData, PoolTradesContractAddressError, PoolTradesContractAddressResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Check API server status
 * This endpoint allows you to **check the API server status**.
 */
export const pingServer = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<PingServerResponse, PingServerError, ThrowOnError>({
    ...options,
    url: '/ping'
}); };

/**
 * 💼 API Usage
 * This endpoint allows you to **monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more**.
 */
export const apiUsage = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<ApiUsageResponse, ApiUsageError, ThrowOnError>({
    ...options,
    url: '/key'
}); };

/**
 * Coin Price by IDs
 * This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs**.
 */
export const simplePrice = <ThrowOnError extends boolean = false>(options: Options<SimplePriceData, ThrowOnError>) => { return (options?.client ?? client).get<SimplePriceResponse, SimplePriceError, ThrowOnError>({
    ...options,
    url: '/simple/price'
}); };

/**
 * Coin Price by Token Addresses
 * This endpoint allows you to **query a token price by using token contract address**.
 */
export const simpleTokenPrice = <ThrowOnError extends boolean = false>(options: Options<SimpleTokenPriceData, ThrowOnError>) => { return (options?.client ?? client).get<SimpleTokenPriceResponse, SimpleTokenPriceError, ThrowOnError>({
    ...options,
    url: '/simple/token_price/{id}'
}); };

/**
 * Supported Currencies List
 * This endpoint allows you to **query all the supported currencies on CoinGecko**.
 */
export const simpleSupportedCurrencies = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<SimpleSupportedCurrenciesResponse, SimpleSupportedCurrenciesError, ThrowOnError>({
    ...options,
    url: '/simple/supported_vs_currencies'
}); };

/**
 * Coins List (ID Map)
 * This endpoint allows you to **query all the supported coins on CoinGecko with coins id, name and symbol**.
 */
export const coinsList = <ThrowOnError extends boolean = false>(options?: Options<CoinsListData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsListResponse, CoinsListError, ThrowOnError>({
    ...options,
    url: '/coins/list'
}); };

/**
 * 💼 Top Gainers & Losers
 * This endpoint allows you to **query the top 30 coins with largest price gain and loss by a specific time duration**
 */
export const coinsTopGainersLosers = <ThrowOnError extends boolean = false>(options: Options<CoinsTopGainersLosersData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsTopGainersLosersResponse, CoinsTopGainersLosersError, ThrowOnError>({
    ...options,
    url: '/coins/top_gainers_losers'
}); };

/**
 * 💼 Recently Added Coins
 * This endpoint allows you to **query the latest 200 coins that recently listed on CoinGecko**
 */
export const coinsListNew = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<CoinsListNewResponse, CoinsListNewError, ThrowOnError>({
    ...options,
    url: '/coins/list/new'
}); };

/**
 * Coins List with Market Data
 * This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**.
 */
export const coinsMarkets = <ThrowOnError extends boolean = false>(options: Options<CoinsMarketsData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsMarketsResponse, CoinsMarketsError, ThrowOnError>({
    ...options,
    url: '/coins/markets'
}); };

/**
 * Coin Data by ID
 * This endpoint allows you to **query all the coin data of a coin (name, price, market .... including exchange tickers) on CoinGecko coin page based on a particular coin id**.
 */
export const coinsId = <ThrowOnError extends boolean = false>(options: Options<CoinsIdData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdResponse, CoinsIdError, ThrowOnError>({
    ...options,
    url: '/coins/{id}'
}); };

/**
 * Coin Tickers by ID
 * This endpoint allows you to **query the coin tickers on both centralized exchange (cex) and decentralized exchange (dex) based on a particular coin id**.
 */
export const coinsIdTickers = <ThrowOnError extends boolean = false>(options: Options<CoinsIdTickersData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdTickersResponse, CoinsIdTickersError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/tickers'
}); };

/**
 * Coin Historical Data by ID
 * This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, etc) at a given date for a coin based on a particular coin id**.
 */
export const coinsIdHistory = <ThrowOnError extends boolean = false>(options: Options<CoinsIdHistoryData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdHistoryResponse, CoinsIdHistoryError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/history'
}); };

/**
 * Coin Historical Chart Data by ID
 * This endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin id**.
 */
export const coinsIdMarketChart = <ThrowOnError extends boolean = false>(options: Options<CoinsIdMarketChartData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdMarketChartResponse, CoinsIdMarketChartError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/market_chart'
}); };

/**
 * Coin Historical Chart Data within Time Range by ID
 * This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin id**.
 */
export const coinsIdMarketChartRange = <ThrowOnError extends boolean = false>(options: Options<CoinsIdMarketChartRangeData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdMarketChartRangeResponse, CoinsIdMarketChartRangeError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/market_chart/range'
}); };

/**
 * Coin OHLC Chart by ID
 * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin id**.
 */
export const coinsIdOhlc = <ThrowOnError extends boolean = false>(options: Options<CoinsIdOhlcData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdOhlcResponse, CoinsIdOhlcError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/ohlc'
}); };

/**
 * 💼 Coin OHLC Chart within Time Range by ID
 * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin id**.
 */
export const coinsIdOhlcRange = <ThrowOnError extends boolean = false>(options: Options<CoinsIdOhlcRangeData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdOhlcRangeResponse, CoinsIdOhlcRangeError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/ohlc/range'
}); };

/**
 * Coin Data by Token Address
 * This endpoint allows you to **query all the coin data (name, price, market .... including exchange tickers) on CoinGecko coin page based on asset platform and particular token contract address**.
 */
export const coinsContractAddress = <ThrowOnError extends boolean = false>(options: Options<CoinsContractAddressData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsContractAddressResponse, CoinsContractAddressError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/contract/{contract_address}'
}); };

/**
 * Coin Historical Chart Data by Token Address
 * This endpoint allows you to **get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address**.
 */
export const contractAddressMarketChart = <ThrowOnError extends boolean = false>(options: Options<ContractAddressMarketChartData, ThrowOnError>) => { return (options?.client ?? client).get<ContractAddressMarketChartResponse, ContractAddressMarketChartError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/contract/{contract_address}/market_chart'
}); };

/**
 * Coin Historical Chart Data within Time Range by Token Address
 * This endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume  based on asset platform and particular token contract address**.
 */
export const contractAddressMarketChartRange = <ThrowOnError extends boolean = false>(options: Options<ContractAddressMarketChartRangeData, ThrowOnError>) => { return (options?.client ?? client).get<ContractAddressMarketChartRangeResponse, ContractAddressMarketChartRangeError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/contract/{contract_address}/market_chart/range'
}); };

/**
 * 👑 Circulating Supply Chart by ID
 * This endpoint allows you to **query historical circulating supply of a coin by number of days away from now based on provided coin id**
 */
export const coinsIdCirculatingSupplyChart = <ThrowOnError extends boolean = false>(options: Options<CoinsIdCirculatingSupplyChartData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdCirculatingSupplyChartResponse, CoinsIdCirculatingSupplyChartError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/circulating_supply_chart'
}); };

/**
 * 👑 Circulating Supply chart within Time Range by ID
 * This endpoint allows you to **query historical circulating supply of a coin, within a range of timestamp based on the provided coin id**
 */
export const coinsIdCirculatingSupplyChartRange = <ThrowOnError extends boolean = false>(options: Options<CoinsIdCirculatingSupplyChartRangeData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdCirculatingSupplyChartRangeResponse, CoinsIdCirculatingSupplyChartRangeError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/circulating_supply_chart/range'
}); };

/**
 * 👑 Total Supply Chart by ID
 * This endpoint allows you to **query historical total supply of a coin by number of days away from now based on provided coin id**
 */
export const coinsIdTotalSupplyChart = <ThrowOnError extends boolean = false>(options: Options<CoinsIdTotalSupplyChartData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdTotalSupplyChartResponse, CoinsIdTotalSupplyChartError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/total_supply_chart'
}); };

/**
 * 👑 Total Supply chart within time range by ID
 * This endpoint allows you to **query historical total supply of a coin, within a range of timestamp based on the provided coin id**
 */
export const coinsIdTotalSupplyChartRange = <ThrowOnError extends boolean = false>(options: Options<CoinsIdTotalSupplyChartRangeData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsIdTotalSupplyChartRangeResponse, CoinsIdTotalSupplyChartRangeError, ThrowOnError>({
    ...options,
    url: '/coins/{id}/total_supply_chart/range'
}); };

/**
 * Asset Platforms List (ID Map)
 * This endpoint allows you to **query all the asset platforms on CoinGecko**.
 */
export const assetPlatformsList = <ThrowOnError extends boolean = false>(options?: Options<AssetPlatformsListData, ThrowOnError>) => { return (options?.client ?? client).get<AssetPlatformsListResponse, AssetPlatformsListError, ThrowOnError>({
    ...options,
    url: '/asset_platforms'
}); };

/**
 * 👑 Token Lists by Asset Platform ID
 * This endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**
 */
export const tokenLists = <ThrowOnError extends boolean = false>(options: Options<TokenListsData, ThrowOnError>) => { return (options?.client ?? client).get<TokenListsResponse, TokenListsError, ThrowOnError>({
    ...options,
    url: '/token_lists/{asset_platform_id}/all.json'
}); };

/**
 * Coins Categories List (ID Map)
 * This endpoint allows you to **query all the coins categories on CoinGecko**.
 */
export const coinsCategoriesList = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<CoinsCategoriesListResponse, CoinsCategoriesListError, ThrowOnError>({
    ...options,
    url: '/coins/categories/list'
}); };

/**
 * Coins Categories List with Market Data
 * This endpoint allows you to **query all the coins categories with market data (market cap, volume, etc.) on CoinGecko**.
 */
export const coinsCategories = <ThrowOnError extends boolean = false>(options?: Options<CoinsCategoriesData, ThrowOnError>) => { return (options?.client ?? client).get<CoinsCategoriesResponse, CoinsCategoriesError, ThrowOnError>({
    ...options,
    url: '/coins/categories'
}); };

/**
 * Exchanges List with data
 * This endpoint allows you to **query all the supported exchanges with exchanges’ data (id, name, country, .... etc) that have active trading volumes on CoinGecko**.
 */
export const exchanges = <ThrowOnError extends boolean = false>(options?: Options<ExchangesData, ThrowOnError>) => { return (options?.client ?? client).get<ExchangesResponse, ExchangesError, ThrowOnError>({
    ...options,
    url: '/exchanges'
}); };

/**
 * Exchanges List (ID Map)
 * This endpoint allows you to **query all the exchanges with id and name**.
 */
export const exchangesList = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<ExchangesListResponse, ExchangesListError, ThrowOnError>({
    ...options,
    url: '/exchanges/list'
}); };

/**
 * Exchange Data by ID
 * This endpoint allows you to **query exchange’s data (name, year established, country, .... etc), exchange volume in BTC and top 100 tickers based on exchange’s id**.
 */
export const exchangesId = <ThrowOnError extends boolean = false>(options: Options<ExchangesIdData, ThrowOnError>) => { return (options?.client ?? client).get<ExchangesIdResponse, ExchangesIdError, ThrowOnError>({
    ...options,
    url: '/exchanges/{id}'
}); };

/**
 * Exchange Tickers by ID
 * This endpoint allows you to **query exchange's tickers based on exchange’s id**.
 */
export const exchangesIdTickers = <ThrowOnError extends boolean = false>(options: Options<ExchangesIdTickersData, ThrowOnError>) => { return (options?.client ?? client).get<ExchangesIdTickersResponse, ExchangesIdTickersError, ThrowOnError>({
    ...options,
    url: '/exchanges/{id}/tickers'
}); };

/**
 * Exchange Volume Chart by ID
 * This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s id**.
 */
export const exchangesIdVolumeChart = <ThrowOnError extends boolean = false>(options: Options<ExchangesIdVolumeChartData, ThrowOnError>) => { return (options?.client ?? client).get<ExchangesIdVolumeChartResponse, ExchangesIdVolumeChartError, ThrowOnError>({
    ...options,
    url: '/exchanges/{id}/volume_chart'
}); };

/**
 * 💼 Exchange Volume Chart within Time Range by ID
 * This endpoint allows you to **query the historical volume chart data in BTC by specifying date range in UNIX based on exchange’s id**
 */
export const exchangesIdVolumeChartRange = <ThrowOnError extends boolean = false>(options: Options<ExchangesIdVolumeChartRangeData, ThrowOnError>) => { return (options?.client ?? client).get<ExchangesIdVolumeChartRangeResponse, ExchangesIdVolumeChartRangeError, ThrowOnError>({
    ...options,
    url: '/exchanges/{id}/volume_chart/range'
}); };

/**
 * Derivatives Tickers List
 * This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**.
 */
export const derivativesTickers = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<DerivativesTickersResponse, DerivativesTickersError, ThrowOnError>({
    ...options,
    url: '/derivatives'
}); };

/**
 * Derivatives Exchanges List with Data
 * This endpoint allows you to **query all the derivatives exchanges with related data (id, name, open interest, .... etc) on CoinGecko**.
 */
export const derivativesExchanges = <ThrowOnError extends boolean = false>(options?: Options<DerivativesExchangesData, ThrowOnError>) => { return (options?.client ?? client).get<DerivativesExchangesResponse, DerivativesExchangesError, ThrowOnError>({
    ...options,
    url: '/derivatives/exchanges'
}); };

/**
 * Derivatives Exchange Data by ID
 * This endpoint allows you to **query the derivatives exchange’s related data (id, name, open interest, .... etc) based on the exchanges’ id**.
 */
export const derivativesExchangesId = <ThrowOnError extends boolean = false>(options: Options<DerivativesExchangesIdData, ThrowOnError>) => { return (options?.client ?? client).get<DerivativesExchangesIdResponse, DerivativesExchangesIdError, ThrowOnError>({
    ...options,
    url: '/derivatives/exchanges/{id}'
}); };

/**
 * Derivatives Exchanges List (ID Map)
 * This endpoint allows you to **query all the derivatives exchanges with id and name on CoinGecko**.
 */
export const derivativesExchangesList = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<DerivativesExchangesListResponse, DerivativesExchangesListError, ThrowOnError>({
    ...options,
    url: '/derivatives/exchanges/list'
}); };

/**
 * NFTs List (ID Map)
 * This endpoint allows you to **query all supported NFTs with id, contract address, name, asset platform id and symbol on CoinGecko**.
 */
export const nftsList = <ThrowOnError extends boolean = false>(options?: Options<NftsListData, ThrowOnError>) => { return (options?.client ?? client).get<NftsListResponse, NftsListError, ThrowOnError>({
    ...options,
    url: '/nfts/list'
}); };

/**
 * NFTs Collection Data by ID
 * This endpoint allows you to **query all the NFT data (name, floor price, 24 hr volume....) based on the nft collection id**.
 */
export const nftsId = <ThrowOnError extends boolean = false>(options: Options<NftsIdData, ThrowOnError>) => { return (options?.client ?? client).get<NftsIdResponse, NftsIdError, ThrowOnError>({
    ...options,
    url: '/nfts/{id}'
}); };

/**
 * NFTs Collection Data by Contract Address
 * This endpoint allows you to **query all the NFT data (name, floor price, 24 hr volume....) based on the nft collection contract address and respective asset platform**.
 */
export const nftsContractAddress = <ThrowOnError extends boolean = false>(options: Options<NftsContractAddressData, ThrowOnError>) => { return (options?.client ?? client).get<NftsContractAddressResponse, NftsContractAddressError, ThrowOnError>({
    ...options,
    url: '/nfts/{asset_platform_id}/contract/{contract_address}'
}); };

/**
 * 💼 NFTs List with Market Data
 * This endpoint allows you to **query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko**
 */
export const nftsMarkets = <ThrowOnError extends boolean = false>(options?: Options<NftsMarketsData, ThrowOnError>) => { return (options?.client ?? client).get<NftsMarketsResponse, NftsMarketsError, ThrowOnError>({
    ...options,
    url: '/nfts/markets'
}); };

/**
 * 💼 NFTs Collection Historical Chart Data by ID
 * This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24h volume, by number of days away from now**
 */
export const nftsIdMarketChart = <ThrowOnError extends boolean = false>(options: Options<NftsIdMarketChartData, ThrowOnError>) => { return (options?.client ?? client).get<NftsIdMarketChartResponse, NftsIdMarketChartError, ThrowOnError>({
    ...options,
    url: '/nfts/{id}/market_chart'
}); };

/**
 * 💼 NFTs Collection Historical Chart Data by Contract Address
 * This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24h volume, by number of days away from now based on the provided contract address**
 */
export const nftsContractAddressMarketChart = <ThrowOnError extends boolean = false>(options: Options<NftsContractAddressMarketChartData, ThrowOnError>) => { return (options?.client ?? client).get<NftsContractAddressMarketChartResponse, NftsContractAddressMarketChartError, ThrowOnError>({
    ...options,
    url: '/nfts/{asset_platform_id}/contract/{contract_address}/market_chart'
}); };

/**
 * 💼 NFTs Collection Tickers by ID
 * This endpoint allows you to **query the latest floor price and 24h volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare**
 */
export const nftsIdTickers = <ThrowOnError extends boolean = false>(options: Options<NftsIdTickersData, ThrowOnError>) => { return (options?.client ?? client).get<NftsIdTickersResponse, NftsIdTickersError, ThrowOnError>({
    ...options,
    url: '/nfts/{id}/tickers'
}); };

/**
 * BTC-to-Currency Exchange Rates
 * This endpoint allows you to **query BTC exchange rates with other currencies**.
 */
export const exchangeRates = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<ExchangeRatesResponse, ExchangeRatesError, ThrowOnError>({
    ...options,
    url: '/exchange_rates'
}); };

/**
 * Search Queries
 * This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**.
 */
export const searchData = <ThrowOnError extends boolean = false>(options: Options<SearchDataData, ThrowOnError>) => { return (options?.client ?? client).get<SearchDataResponse, SearchDataError, ThrowOnError>({
    ...options,
    url: '/search'
}); };

/**
 * Trending Search List
 * This endpoint allows you **query trending search coins, nfts and categories on CoinGecko in the last 24 hours**.
 */
export const trendingSearch = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<TrendingSearchResponse, TrendingSearchError, ThrowOnError>({
    ...options,
    url: '/search/trending'
}); };

/**
 * Crypto Global Market Data
 * This endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**.
 */
export const cryptoGlobal = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<CryptoGlobalResponse, CryptoGlobalError, ThrowOnError>({
    ...options,
    url: '/global'
}); };

/**
 * Global De-Fi Market Data
 * This endpoint allows you **query top 100 cryptocurrency global decentralized finance (defi) data including defi market cap, trading volume**.
 */
export const globalDeFi = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<GlobalDeFiResponse, GlobalDeFiError, ThrowOnError>({
    ...options,
    url: '/global/decentralized_finance_defi'
}); };

/**
 * 💼 Global Market Cap Chart Data
 * This endpoint allows you to **query historical global market cap and volume data by number of days away from now**
 */
export const globalMarketCapChart = <ThrowOnError extends boolean = false>(options: Options<GlobalMarketCapChartData, ThrowOnError>) => { return (options?.client ?? client).get<GlobalMarketCapChartResponse, GlobalMarketCapChartError, ThrowOnError>({
    ...options,
    url: '/global/market_cap_chart'
}); };

/**
 * Public Companies Holdings
 * This endpoint allows you **query public companies’ bitcoin or ethereum holdings**.
 */
export const companiesPublicTreasury = <ThrowOnError extends boolean = false>(options: Options<CompaniesPublicTreasuryData, ThrowOnError>) => { return (options?.client ?? client).get<CompaniesPublicTreasuryResponse, CompaniesPublicTreasuryError, ThrowOnError>({
    ...options,
    url: '/companies/public_treasury/{coin_id}'
}); };

/**
 * Token Price by Token Addresses
 * This endpoint allows you to **get token price based on the provided token contract address on a network**
 */
export const onchainSimplePrice = <ThrowOnError extends boolean = false>(options: Options<OnchainSimplePriceData, ThrowOnError>) => { return (options?.client ?? client).get<OnchainSimplePriceResponse, OnchainSimplePriceError, ThrowOnError>({
    ...options,
    url: '/onchain/simple/networks/{network}/token_price/{addresses}'
}); };

/**
 * Supported Networks List (ID Map)
 * This endpoint allows you to **query all the supported networks on GeckoTerminal**
 */
export const networksList = <ThrowOnError extends boolean = false>(options?: Options<NetworksListData, ThrowOnError>) => { return (options?.client ?? client).get<NetworksListResponse, NetworksListError, ThrowOnError>({
    ...options,
    url: '/onchain/networks'
}); };

/**
 * Supported Dexes List by Network (ID Map)
 * This endpoint allows you to **query all the supported decentralized exchanges (dexes) based on the provided network on GeckoTerminal**
 */
export const dexesList = <ThrowOnError extends boolean = false>(options: Options<DexesListData, ThrowOnError>) => { return (options?.client ?? client).get<DexesListResponse, DexesListError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/dexes'
}); };

/**
 * Trending Pools List
 * This endpoint allows you to **query all the trending pools across all networks on GeckoTerminal**
 */
export const trendingPoolsList = <ThrowOnError extends boolean = false>(options?: Options<TrendingPoolsListData, ThrowOnError>) => { return (options?.client ?? client).get<TrendingPoolsListResponse, TrendingPoolsListError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/trending_pools'
}); };

/**
 * Trending Pools by Network
 * This endpoint allows you to **query the trending pools based on the provided network**
 */
export const trendingPoolsNetwork = <ThrowOnError extends boolean = false>(options: Options<TrendingPoolsNetworkData, ThrowOnError>) => { return (options?.client ?? client).get<TrendingPoolsNetworkResponse, TrendingPoolsNetworkError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/trending_pools'
}); };

/**
 * Specific Pool Data by Pool Address
 * This endpoint allows you to **query the specific pool based on the provided network and pool address**
 */
export const poolAddress = <ThrowOnError extends boolean = false>(options: Options<PoolAddressData, ThrowOnError>) => { return (options?.client ?? client).get<PoolAddressResponse, PoolAddressError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/pools/{address}'
}); };

/**
 * Multiple Pools Data by Pool Addresses
 * This endpoint allows you to **query multiple pools based on the provided network and pool address**
 */
export const poolsAddresses = <ThrowOnError extends boolean = false>(options: Options<PoolsAddressesData, ThrowOnError>) => { return (options?.client ?? client).get<PoolsAddressesResponse, PoolsAddressesError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/pools/multi/{addresses}'
}); };

/**
 * Top Pools by Network
 * This endpoint allows you to **query all the top pools based on the provided network**
 */
export const topPoolsNetwork = <ThrowOnError extends boolean = false>(options: Options<TopPoolsNetworkData, ThrowOnError>) => { return (options?.client ?? client).get<TopPoolsNetworkResponse, TopPoolsNetworkError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/pools'
}); };

/**
 * Top Pools by Dex
 * This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (dex)**
 */
export const topPoolsDex = <ThrowOnError extends boolean = false>(options: Options<TopPoolsDexData, ThrowOnError>) => { return (options?.client ?? client).get<TopPoolsDexResponse, TopPoolsDexError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/dexes/{dex}/pools'
}); };

/**
 * New Pools by Network
 * This endpoint allows you to **query all the latest pools based on provided network**
 */
export const latestPoolsNetwork = <ThrowOnError extends boolean = false>(options: Options<LatestPoolsNetworkData, ThrowOnError>) => { return (options?.client ?? client).get<LatestPoolsNetworkResponse, LatestPoolsNetworkError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/new_pools'
}); };

/**
 * New Pools List
 * This endpoint allows you to **query all the latest pools across all networks on GeckoTerminal**
 */
export const latestPoolsList = <ThrowOnError extends boolean = false>(options?: Options<LatestPoolsListData, ThrowOnError>) => { return (options?.client ?? client).get<LatestPoolsListResponse, LatestPoolsListError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/new_pools'
}); };

/**
 * Search Pools
 * This endpoint allows you to **search for pools on a network**
 */
export const searchPools = <ThrowOnError extends boolean = false>(options?: Options<SearchPoolsData, ThrowOnError>) => { return (options?.client ?? client).get<SearchPoolsResponse, SearchPoolsError, ThrowOnError>({
    ...options,
    url: '/onchain/search/pools'
}); };

/**
 * Top Pools by Token Address
 * This endpoint allows you to **query top pools based on the provided token contract address on a network**
 */
export const topPoolsContractAddress = <ThrowOnError extends boolean = false>(options: Options<TopPoolsContractAddressData, ThrowOnError>) => { return (options?.client ?? client).get<TopPoolsContractAddressResponse, TopPoolsContractAddressError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/tokens/{token_address}/pools'
}); };

/**
 * Token Data by Token Address
 * This endpoint allows you to **query specific token data based on the provided token contract address on a network**
 */
export const tokenDataContractAddress = <ThrowOnError extends boolean = false>(options: Options<TokenDataContractAddressData, ThrowOnError>) => { return (options?.client ?? client).get<TokenDataContractAddressResponse, TokenDataContractAddressError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/tokens/{address}'
}); };

/**
 * Tokens Data by Token Addresses
 * This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**
 */
export const tokensDataContractAddresses = <ThrowOnError extends boolean = false>(options: Options<TokensDataContractAddressesData, ThrowOnError>) => { return (options?.client ?? client).get<TokensDataContractAddressesResponse, TokensDataContractAddressesError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/tokens/multi/{addresses}'
}); };

/**
 * Token Info by Token Address
 * This endpoint allows you to **query specific token info such as name,symbol, coingecko id etc. based on provided token contract address on a network**
 */
export const tokenInfoContractAddress = <ThrowOnError extends boolean = false>(options: Options<TokenInfoContractAddressData, ThrowOnError>) => { return (options?.client ?? client).get<TokenInfoContractAddressResponse, TokenInfoContractAddressError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/tokens/{address}/info'
}); };

/**
 * Pool Tokens Info by Pool Address
 * This endpoint allows you to **query pool info including base and quote token info based on provided pool contract address on a network**
 */
export const poolTokenInfoContractAddress = <ThrowOnError extends boolean = false>(options: Options<PoolTokenInfoContractAddressData, ThrowOnError>) => { return (options?.client ?? client).get<PoolTokenInfoContractAddressResponse, PoolTokenInfoContractAddressError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/pools/{pool_address}/info'
}); };

/**
 * Most Recently Updated Tokens List
 * This endpoint allows you to **query 100 most recently updated tokens info across all networks on GeckoTerminal**
 */
export const tokensInfoRecentUpdated = <ThrowOnError extends boolean = false>(options?: Options<TokensInfoRecentUpdatedData, ThrowOnError>) => { return (options?.client ?? client).get<TokensInfoRecentUpdatedResponse, TokensInfoRecentUpdatedError, ThrowOnError>({
    ...options,
    url: '/onchain/tokens/info_recently_updated'
}); };

/**
 * Pool OHLCV chart by Pool Address
 * This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network**
 */
export const poolOhlcvContractAddress = <ThrowOnError extends boolean = false>(options: Options<PoolOhlcvContractAddressData, ThrowOnError>) => { return (options?.client ?? client).get<PoolOhlcvContractAddressResponse, PoolOhlcvContractAddressError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}'
}); };

/**
 * Past 24 Hour Trades by Pool Address
 * This endpoint allows you to **query the last 300 trades in the past 24 hours based on the provided pool address**
 */
export const poolTradesContractAddress = <ThrowOnError extends boolean = false>(options: Options<PoolTradesContractAddressData, ThrowOnError>) => { return (options?.client ?? client).get<PoolTradesContractAddressResponse, PoolTradesContractAddressError, ThrowOnError>({
    ...options,
    url: '/onchain/networks/{network}/pools/{pool_address}/trades'
}); };