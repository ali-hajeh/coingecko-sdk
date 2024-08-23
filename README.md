# CoinGecko API SDK

This SDK provides a set of functions to interact with the CoinGecko API. It includes methods for fetching a list of coins, retrieving detailed information about specific coins, and more.

## Functions

### `fetchCoinList`

Fetches a list of all coins available on CoinGecko.

- **Method**: `GET`
- **Endpoint**: `/coins/list`

#### Returns
- **Type**: `Promise<Partial<CoinGeckoToken>[]>`
- **Description**: Returns a promise that resolves to an array of coin objects, each containing partial information (e.g., `id`, `symbol`, `name`).

#### Example
```javascript
const coins = await coinGeckoClient.coins.list();
console.log(coins);
```

### `fetchCoinInfo`

Retrieves information for a specific coin by its ID.

- **Method**: `GET`
- **Endpoint**: `/coins/{id}`

#### Parameters
- **id**: `string` - The ID of the coin.

#### Returns
- **Type**: `Promise<CoinGeckoCoin>`
- **Description**: Returns a promise that resolves to detailed information about the specified coin.

#### Example
```javascript
const coinInfo = await coinGeckoClient.coins.get('bitcoin');
console.log(coinInfo);
```

### `fetchCoinMarketData`

Retrieves market data for a specific coin.

- **Method**: `GET`
- **Endpoint**: `/coins/markets`

#### Parameters
- **id**: `string` - The ID of the coin.
- **vs_currency**: `string` - The target currency.

#### Returns
- **Type**: `Promise<Partial<CoinGeckoMarketData>>`
- **Description**: Returns a promise that resolves to the market data for the specified coin.

#### Example
```javascript
const marketData = await coinGeckoClient.coins.markets('bitcoin', 'usd');
console.log(marketData);
```

### `fetchCoinHistoricalData`

Retrieves historical data for a specific coin on a given date.

- **Method**: `GET`
- **Endpoint**: `/coins/{id}/history`

#### Parameters
- **id**: `string` - The ID of the coin.
- **date**: `string` - The date in YYYY-MM-DD format.

#### Returns
- **Type**: `Promise<CoinGeckoHistoricalData>`
- **Description**: Returns a promise that resolves to historical data for the specified coin on the given date.

#### Example
```javascript
const historicalData = await coinGeckoClient.coins.history('bitcoin', '2022-01-01');
console.log(historicalData);
```

### `fetchCoinMarketChart`

Retrieves market chart data for a specific coin.

- **Method**: `GET`
- **Endpoint**: `/coins/{id}/market_chart`

#### Parameters
- **id**: `string` - The ID of the coin.
- **vs_currency**: `string` - The target currency.
- **days**: `number` - Number of days of data to fetch.

#### Returns
- **Type**: `Promise<CoinGeckoMarketChartData>`
- **Description**: Returns a promise that resolves to market chart data for the specified coin.

#### Example
```javascript
const marketChart = await coinGeckoClient.coins.marketChart('bitcoin', 'usd', 30);
console.log(marketChart);
```

### `fetchCoinOHLC`

Retrieves OHLC (Open, High, Low, Close) data for a specific coin.

- **Method**: `GET`
- **Endpoint**: `/coins/{id}/ohlc`

#### Parameters
- **id**: `string` - The ID of the coin.
- **vs_currency**: `string` - The target currency.

#### Returns
- **Type**: `Promise<CoinGeckoOHLCData>`
- **Description**: Returns a promise that resolves to OHLC data for the specified coin.

#### Example
```javascript
const ohlcData = await coinGeckoClient.coins.ohlc('bitcoin', 'usd');
console.log(ohlcData);
```

### `fetchSupportedNetworks`

Retrieves a list of all supported networks.

- **Method**: `GET`
- **Endpoint**: `/networks`

#### Returns
- **Type**: `Promise<Partial<NetworkInfo>[]>`
- **Description**: Returns a promise that resolves to a list of supported networks.

#### Example
```javascript
const networks = await coinGeckoClient.networks.list();
console.log(networks);
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```

You can save this text as a `.txt` file if needed.