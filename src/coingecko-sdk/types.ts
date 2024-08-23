import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type ApiUsageResponse200 = FromSchema<typeof schemas.ApiUsage.response['200']>;
export type AssetPlatformsListMetadataParam = FromSchema<typeof schemas.AssetPlatformsList.metadata>;
export type AssetPlatformsListResponse200 = FromSchema<typeof schemas.AssetPlatformsList.response['200']>;
export type CoinsCategoriesListResponse200 = FromSchema<typeof schemas.CoinsCategoriesList.response['200']>;
export type CoinsCategoriesMetadataParam = FromSchema<typeof schemas.CoinsCategories.metadata>;
export type CoinsCategoriesResponse200 = FromSchema<typeof schemas.CoinsCategories.response['200']>;
export type CoinsContractAddressMetadataParam = FromSchema<typeof schemas.CoinsContractAddress.metadata>;
export type CoinsContractAddressResponse200 = FromSchema<typeof schemas.CoinsContractAddress.response['200']>;
export type CoinsIdCirculatingSupplyChartMetadataParam = FromSchema<typeof schemas.CoinsIdCirculatingSupplyChart.metadata>;
export type CoinsIdCirculatingSupplyChartRangeMetadataParam = FromSchema<typeof schemas.CoinsIdCirculatingSupplyChartRange.metadata>;
export type CoinsIdCirculatingSupplyChartRangeResponse200 = FromSchema<typeof schemas.CoinsIdCirculatingSupplyChartRange.response['200']>;
export type CoinsIdCirculatingSupplyChartResponse200 = FromSchema<typeof schemas.CoinsIdCirculatingSupplyChart.response['200']>;
export type CoinsIdHistoryMetadataParam = FromSchema<typeof schemas.CoinsIdHistory.metadata>;
export type CoinsIdHistoryResponse200 = FromSchema<typeof schemas.CoinsIdHistory.response['200']>;
export type CoinsIdMarketChartMetadataParam = FromSchema<typeof schemas.CoinsIdMarketChart.metadata>;
export type CoinsIdMarketChartRangeMetadataParam = FromSchema<typeof schemas.CoinsIdMarketChartRange.metadata>;
export type CoinsIdMarketChartRangeResponse200 = FromSchema<typeof schemas.CoinsIdMarketChartRange.response['200']>;
export type CoinsIdMarketChartResponse200 = FromSchema<typeof schemas.CoinsIdMarketChart.response['200']>;
export type CoinsIdMetadataParam = FromSchema<typeof schemas.CoinsId.metadata>;
export type CoinsIdOhlcMetadataParam = FromSchema<typeof schemas.CoinsIdOhlc.metadata>;
export type CoinsIdOhlcRangeMetadataParam = FromSchema<typeof schemas.CoinsIdOhlcRange.metadata>;
export type CoinsIdOhlcRangeResponse200 = FromSchema<typeof schemas.CoinsIdOhlcRange.response['200']>;
export type CoinsIdOhlcResponse200 = FromSchema<typeof schemas.CoinsIdOhlc.response['200']>;
export type CoinsIdResponse200 = FromSchema<typeof schemas.CoinsId.response['200']>;
export type CoinsIdTickersMetadataParam = FromSchema<typeof schemas.CoinsIdTickers.metadata>;
export type CoinsIdTickersResponse200 = FromSchema<typeof schemas.CoinsIdTickers.response['200']>;
export type CoinsIdTotalSupplyChartMetadataParam = FromSchema<typeof schemas.CoinsIdTotalSupplyChart.metadata>;
export type CoinsIdTotalSupplyChartRangeMetadataParam = FromSchema<typeof schemas.CoinsIdTotalSupplyChartRange.metadata>;
export type CoinsIdTotalSupplyChartRangeResponse200 = FromSchema<typeof schemas.CoinsIdTotalSupplyChartRange.response['200']>;
export type CoinsIdTotalSupplyChartResponse200 = FromSchema<typeof schemas.CoinsIdTotalSupplyChart.response['200']>;
export type CoinsListMetadataParam = FromSchema<typeof schemas.CoinsList.metadata>;
export type CoinsListNewResponse200 = FromSchema<typeof schemas.CoinsListNew.response['200']>;
export type CoinsListResponse200 = FromSchema<typeof schemas.CoinsList.response['200']>;
export type CoinsMarketsMetadataParam = FromSchema<typeof schemas.CoinsMarkets.metadata>;
export type CoinsMarketsResponse200 = FromSchema<typeof schemas.CoinsMarkets.response['200']>;
export type CoinsTopGainersLosersMetadataParam = FromSchema<typeof schemas.CoinsTopGainersLosers.metadata>;
export type CoinsTopGainersLosersResponse200 = FromSchema<typeof schemas.CoinsTopGainersLosers.response['200']>;
export type CompaniesPublicTreasuryMetadataParam = FromSchema<typeof schemas.CompaniesPublicTreasury.metadata>;
export type CompaniesPublicTreasuryResponse200 = FromSchema<typeof schemas.CompaniesPublicTreasury.response['200']>;
export type ContractAddressMarketChartMetadataParam = FromSchema<typeof schemas.ContractAddressMarketChart.metadata>;
export type ContractAddressMarketChartRangeMetadataParam = FromSchema<typeof schemas.ContractAddressMarketChartRange.metadata>;
export type ContractAddressMarketChartRangeResponse200 = FromSchema<typeof schemas.ContractAddressMarketChartRange.response['200']>;
export type ContractAddressMarketChartResponse200 = FromSchema<typeof schemas.ContractAddressMarketChart.response['200']>;
export type CryptoGlobalResponse200 = FromSchema<typeof schemas.CryptoGlobal.response['200']>;
export type DerivativesExchangesIdMetadataParam = FromSchema<typeof schemas.DerivativesExchangesId.metadata>;
export type DerivativesExchangesIdResponse200 = FromSchema<typeof schemas.DerivativesExchangesId.response['200']>;
export type DerivativesExchangesListResponse200 = FromSchema<typeof schemas.DerivativesExchangesList.response['200']>;
export type DerivativesExchangesMetadataParam = FromSchema<typeof schemas.DerivativesExchanges.metadata>;
export type DerivativesExchangesResponse200 = FromSchema<typeof schemas.DerivativesExchanges.response['200']>;
export type DerivativesTickersResponse200 = FromSchema<typeof schemas.DerivativesTickers.response['200']>;
export type DexesListMetadataParam = FromSchema<typeof schemas.DexesList.metadata>;
export type DexesListResponse200 = FromSchema<typeof schemas.DexesList.response['200']>;
export type ExchangeRatesResponse200 = FromSchema<typeof schemas.ExchangeRates.response['200']>;
export type ExchangesIdMetadataParam = FromSchema<typeof schemas.ExchangesId.metadata>;
export type ExchangesIdResponse200 = FromSchema<typeof schemas.ExchangesId.response['200']>;
export type ExchangesIdTickersMetadataParam = FromSchema<typeof schemas.ExchangesIdTickers.metadata>;
export type ExchangesIdTickersResponse200 = FromSchema<typeof schemas.ExchangesIdTickers.response['200']>;
export type ExchangesIdVolumeChartMetadataParam = FromSchema<typeof schemas.ExchangesIdVolumeChart.metadata>;
export type ExchangesIdVolumeChartRangeMetadataParam = FromSchema<typeof schemas.ExchangesIdVolumeChartRange.metadata>;
export type ExchangesIdVolumeChartRangeResponse200 = FromSchema<typeof schemas.ExchangesIdVolumeChartRange.response['200']>;
export type ExchangesIdVolumeChartResponse200 = FromSchema<typeof schemas.ExchangesIdVolumeChart.response['200']>;
export type ExchangesListResponse200 = FromSchema<typeof schemas.ExchangesList.response['200']>;
export type ExchangesMetadataParam = FromSchema<typeof schemas.Exchanges.metadata>;
export type ExchangesResponse200 = FromSchema<typeof schemas.Exchanges.response['200']>;
export type GlobalDeFiResponse200 = FromSchema<typeof schemas.GlobalDeFi.response['200']>;
export type GlobalMarketCapChartMetadataParam = FromSchema<typeof schemas.GlobalMarketCapChart.metadata>;
export type GlobalMarketCapChartResponse200 = FromSchema<typeof schemas.GlobalMarketCapChart.response['200']>;
export type LatestPoolsListMetadataParam = FromSchema<typeof schemas.LatestPoolsList.metadata>;
export type LatestPoolsListResponse200 = FromSchema<typeof schemas.LatestPoolsList.response['200']>;
export type LatestPoolsNetworkMetadataParam = FromSchema<typeof schemas.LatestPoolsNetwork.metadata>;
export type LatestPoolsNetworkResponse200 = FromSchema<typeof schemas.LatestPoolsNetwork.response['200']>;
export type NetworksListMetadataParam = FromSchema<typeof schemas.NetworksList.metadata>;
export type NetworksListResponse200 = FromSchema<typeof schemas.NetworksList.response['200']>;
export type NftsContractAddressMarketChartMetadataParam = FromSchema<typeof schemas.NftsContractAddressMarketChart.metadata>;
export type NftsContractAddressMarketChartResponse200 = FromSchema<typeof schemas.NftsContractAddressMarketChart.response['200']>;
export type NftsContractAddressMetadataParam = FromSchema<typeof schemas.NftsContractAddress.metadata>;
export type NftsContractAddressResponse200 = FromSchema<typeof schemas.NftsContractAddress.response['200']>;
export type NftsIdMarketChartMetadataParam = FromSchema<typeof schemas.NftsIdMarketChart.metadata>;
export type NftsIdMarketChartResponse200 = FromSchema<typeof schemas.NftsIdMarketChart.response['200']>;
export type NftsIdMetadataParam = FromSchema<typeof schemas.NftsId.metadata>;
export type NftsIdResponse200 = FromSchema<typeof schemas.NftsId.response['200']>;
export type NftsIdTickersMetadataParam = FromSchema<typeof schemas.NftsIdTickers.metadata>;
export type NftsIdTickersResponse200 = FromSchema<typeof schemas.NftsIdTickers.response['200']>;
export type NftsListMetadataParam = FromSchema<typeof schemas.NftsList.metadata>;
export type NftsListResponse200 = FromSchema<typeof schemas.NftsList.response['200']>;
export type NftsMarketsMetadataParam = FromSchema<typeof schemas.NftsMarkets.metadata>;
export type NftsMarketsResponse200 = FromSchema<typeof schemas.NftsMarkets.response['200']>;
export type OnchainSimplePriceMetadataParam = FromSchema<typeof schemas.OnchainSimplePrice.metadata>;
export type OnchainSimplePriceResponse200 = FromSchema<typeof schemas.OnchainSimplePrice.response['200']>;
export type PingServerResponse200 = FromSchema<typeof schemas.PingServer.response['200']>;
export type PoolAddressMetadataParam = FromSchema<typeof schemas.PoolAddress.metadata>;
export type PoolAddressResponse200 = FromSchema<typeof schemas.PoolAddress.response['200']>;
export type PoolOhlcvContractAddressMetadataParam = FromSchema<typeof schemas.PoolOhlcvContractAddress.metadata>;
export type PoolOhlcvContractAddressResponse200 = FromSchema<typeof schemas.PoolOhlcvContractAddress.response['200']>;
export type PoolTokenInfoContractAddressMetadataParam = FromSchema<typeof schemas.PoolTokenInfoContractAddress.metadata>;
export type PoolTokenInfoContractAddressResponse200 = FromSchema<typeof schemas.PoolTokenInfoContractAddress.response['200']>;
export type PoolTradesContractAddressMetadataParam = FromSchema<typeof schemas.PoolTradesContractAddress.metadata>;
export type PoolTradesContractAddressResponse200 = FromSchema<typeof schemas.PoolTradesContractAddress.response['200']>;
export type PoolsAddressesMetadataParam = FromSchema<typeof schemas.PoolsAddresses.metadata>;
export type PoolsAddressesResponse200 = FromSchema<typeof schemas.PoolsAddresses.response['200']>;
export type SearchDataMetadataParam = FromSchema<typeof schemas.SearchData.metadata>;
export type SearchDataResponse200 = FromSchema<typeof schemas.SearchData.response['200']>;
export type SearchPoolsMetadataParam = FromSchema<typeof schemas.SearchPools.metadata>;
export type SearchPoolsResponse200 = FromSchema<typeof schemas.SearchPools.response['200']>;
export type SimplePriceMetadataParam = FromSchema<typeof schemas.SimplePrice.metadata>;
export type SimplePriceResponse200 = FromSchema<typeof schemas.SimplePrice.response['200']>;
export type SimpleSupportedCurrenciesResponse200 = FromSchema<typeof schemas.SimpleSupportedCurrencies.response['200']>;
export type SimpleTokenPriceMetadataParam = FromSchema<typeof schemas.SimpleTokenPrice.metadata>;
export type SimpleTokenPriceResponse200 = FromSchema<typeof schemas.SimpleTokenPrice.response['200']>;
export type TokenDataContractAddressMetadataParam = FromSchema<typeof schemas.TokenDataContractAddress.metadata>;
export type TokenDataContractAddressResponse200 = FromSchema<typeof schemas.TokenDataContractAddress.response['200']>;
export type TokenInfoContractAddressMetadataParam = FromSchema<typeof schemas.TokenInfoContractAddress.metadata>;
export type TokenInfoContractAddressResponse200 = FromSchema<typeof schemas.TokenInfoContractAddress.response['200']>;
export type TokenListsMetadataParam = FromSchema<typeof schemas.TokenLists.metadata>;
export type TokenListsResponse200 = FromSchema<typeof schemas.TokenLists.response['200']>;
export type TokensDataContractAddressesMetadataParam = FromSchema<typeof schemas.TokensDataContractAddresses.metadata>;
export type TokensDataContractAddressesResponse200 = FromSchema<typeof schemas.TokensDataContractAddresses.response['200']>;
export type TokensInfoRecentUpdatedMetadataParam = FromSchema<typeof schemas.TokensInfoRecentUpdated.metadata>;
export type TokensInfoRecentUpdatedResponse200 = FromSchema<typeof schemas.TokensInfoRecentUpdated.response['200']>;
export type TopPoolsContractAddressMetadataParam = FromSchema<typeof schemas.TopPoolsContractAddress.metadata>;
export type TopPoolsContractAddressResponse200 = FromSchema<typeof schemas.TopPoolsContractAddress.response['200']>;
export type TopPoolsDexMetadataParam = FromSchema<typeof schemas.TopPoolsDex.metadata>;
export type TopPoolsDexResponse200 = FromSchema<typeof schemas.TopPoolsDex.response['200']>;
export type TopPoolsNetworkMetadataParam = FromSchema<typeof schemas.TopPoolsNetwork.metadata>;
export type TopPoolsNetworkResponse200 = FromSchema<typeof schemas.TopPoolsNetwork.response['200']>;
export type TrendingPoolsListMetadataParam = FromSchema<typeof schemas.TrendingPoolsList.metadata>;
export type TrendingPoolsListResponse200 = FromSchema<typeof schemas.TrendingPoolsList.response['200']>;
export type TrendingPoolsNetworkMetadataParam = FromSchema<typeof schemas.TrendingPoolsNetwork.metadata>;
export type TrendingPoolsNetworkResponse200 = FromSchema<typeof schemas.TrendingPoolsNetwork.response['200']>;
export type TrendingSearchResponse200 = FromSchema<typeof schemas.TrendingSearch.response['200']>;
