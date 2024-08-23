# CoinGecko API SDK

This SDK provides a set of functions to interact with the CoinGecko API. It includes methods for fetching a list of coins, retrieving detailed information about specific coins, and more.

Here's a simple README section that explains how to install a package using both npm and yarn:

---

## Installation

To install this package, you can use either npm or Yarn as your package manager.

### Using npm

To install the package with npm, run the following command in your terminal:

```bash
npm install coingecko-sdk
```

### Using Yarn

If you prefer to use Yarn, you can install the package with the following command:

```bash
yarn add coingecko-sdk
```

## Endpoints

| Endpoint                          | Description                                                      |
|-----------------------------------|------------------------------------------------------------------|
| `/coins/list`                     | Fetches a list of all coins available on CoinGecko.              |
| `/coins/{id}`                     | Fetches detailed information about a specific coin.              |
| `/coins/{id}/market_chart`        | Fetches market data for a specific coin.                         |
| `/coins/markets`                  | Fetches market data for multiple coins.                          |
| `/simple/price`                   | Fetches the current price of one or more coins.                  |
| `/coins/{id}/tickers`             | Fetches tickers for a specific coin.                             |
| `/coins/{id}/history`             | Fetches historical data for a specific coin.                     |
| `/coins/{id}/market_chart/range`  | Fetches market data for a specific coin within a date range.     |
| `/coins/{id}/status_updates`      | Fetches status updates for a specific coin.                      |
| `/coins/{id}/ohlc`                | Fetches OHLC (Open, High, Low, Close) data for a specific coin.  |
| `/simple/token_price/{id}`        | Fetches the price of tokens by contract address.                 |
| `/coins/categories`               | Fetches a list of categories supported by CoinGecko.             |
| `/coins/{id}/contract/{contract}` | Fetches data for a coin by contract address.                     |
| `/coins/{id}/market_chart/range`  | Fetches market data for a coin within a date range.              |
| `/coins/{id}/status_updates`      | Fetches status updates for a specific coin.                      |
| `/coins/{id}/ohlc`                | Fetches OHLC data for a specific coin.                           |
| `/coins/{id}/tickers`             | Fetches tickers for a specific coin.                             |
| `/coins/{id}/history`             | Fetches historical data for a specific coin.                     |
| `/coins/{id}/market_chart`        | Fetches market data for a specific coin.                         |
| `/coins/markets`                  | Fetches market data for multiple coins.                          |
| `/simple/price`                   | Fetches the current price of one or more coins.                  |
| `/simple/supported_vs_currencies` | Fetches all supported currencies on CoinGecko.                   |
| `/coins/{id}/contract/{contract}` | Fetches data for a coin by contract address.                     |
| `/coins/categories`               | Fetches a list of categories supported by CoinGecko.             |
| `/coins/{id}/market_chart/range`  | Fetches market data for a coin within a date range.              |
| `/coins/{id}/status_updates`      | Fetches status updates for a specific coin.                      |
| `/coins/{id}/ohlc`                | Fetches OHLC data for a specific coin.                           |
| `/coins/{id}/tickers`             | Fetches tickers for a specific coin.                             |
| `/coins/{id}/history`             | Fetches historical data for a specific coin.                     |
| `/coins/{id}/market_chart`        | Fetches market data for a specific coin.                         |
| `/coins/markets`                  | Fetches market data for multiple coins.                          |
| `/simple/price`                   | Fetches the current price of one or more coins.                  |
| `/simple/supported_vs_currencies` | Fetches all supported currencies on CoinGecko.                   |

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
const coins = await coinGeckoClient.coinsList();
console.log(coins);
```