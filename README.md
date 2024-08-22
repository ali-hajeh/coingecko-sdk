# CoinGecko API SDK

This SDK provides a set of functions to interact with the CoinGecko API. It includes methods for fetching a list of coins and retrieving detailed information about specific coins.

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
const coins = await CoinGeckoController.fetchCoinList();
console.log(coins);
