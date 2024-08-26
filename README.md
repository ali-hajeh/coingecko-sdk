# CoinGecko API SDK

This SDK provides a set of functions to interact with the CoinGecko API. It includes methods for fetching a list of coins, retrieving detailed information about specific coins, and more.

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

## Setup

To use the SDK, you need to initialize the client first. Here's how you can do it:

```typescript
import { initClient } from "coingecko-sdk";

// For free API
initClient();

// For Pro API (requires an access key)
initClient({ pro: true, accessKey: "YOUR_ACCESS_KEY" });
```

## Usage Examples

Here are a couple of examples to get you started:

### Fetching a List of Coins

```typescript
import { initClient, coinsMarkets } from "coingecko-sdk";

initClient();

async function getTopCoins() {
  try {
    const response = await coinsMarkets({
      query: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    });
    console.log("Top 10 coins by market cap:", response);
  } catch (error) {
    console.error("Error fetching top coins:", error);
  }
}

getTopCoins();
```

### Getting Detailed Information for a Specific Coin

```typescript
import { initClient, coinsId } from "coingecko-sdk";

const client = initClient();

async function getBitcoinInfo() {
  try {
    const response = await coinsId({
      query: {
        id: "bitcoin",
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    });
    console.log("Bitcoin information:", response);
  } catch (error) {
    console.error("Error fetching Bitcoin info:", error);
  }
}

getBitcoinInfo();
```

## Available Endpoints

This SDK covers a wide range of CoinGecko API endpoints. Here are some of the key endpoints available:
| Category | Endpoint | Description |
|----------|----------|-------------|
| Simple | `/simple/price` | Fetches the current price of one or more coins. |
| Simple | `/simple/token_price/{id}` | Queries token price by contract address. |
| Simple | `/simple/supported_vs_currencies` | Lists all supported currencies. |
| Coins | `/coins/list` | Fetches a list of all coins with id, name, and symbol. |
| Coins | `/coins/markets` | Fetches market data for multiple coins. |
| Coins | `/coins/{id}` | Fetches detailed information about a specific coin. |
| Coins | `/coins/{id}/tickers` | Fetches tickers for a specific coin. |
| Coins | `/coins/{id}/history` | Fetches historical data for a specific coin. |
| Coins | `/coins/{id}/market_chart` | Fetches historical market data for a specific coin. |
| Coins | `/coins/{id}/market_chart/range` | Fetches market data for a specific coin within a date range. |
| Coins | `/coins/{id}/ohlc` | Fetches OHLC data for a specific coin. |
| Coins | `/coins/top_gainers_losers` | Lists top gainers and losers. |
| Coins | `/coins/list/new` | Lists recently added coins. |
| Contract | `/coins/{id}/contract/{contract_address}` | Fetches coin data by contract address. |
| Contract | `/coins/{id}/contract/{contract_address}/market_chart` | Fetches historical market data by contract address. |
| Contract | `/coins/{id}/contract/{contract_address}/market_chart/range` | Fetches market data by contract address within a date range. |
| Categories | `/coins/categories/list` | Lists all coin categories. |
| Categories | `/coins/categories` | Lists categories with market data. |
| Exchanges | `/exchanges` | Lists exchanges with data. |
| Exchanges | `/exchanges/list` | Lists all exchanges. |
| Exchanges | `/exchanges/{id}` | Fetches data for a specific exchange. |
| Exchanges | `/exchanges/{id}/tickers` | Fetches tickers for a specific exchange. |
| Exchanges | `/exchanges/{id}/volume_chart` | Fetches volume chart for a specific exchange. |
| Derivatives | `/derivatives` | Lists all derivative tickers. |
| Derivatives | `/derivatives/exchanges` | Lists all derivative exchanges. |
| NFTs | `/nfts/list` | Lists all NFT ids. |
| NFTs | `/nfts/{id}` | Fetches data for a specific NFT. |
| NFTs | `/nfts/markets` | Lists NFTs with market data. |
| Global | `/global` | Fetches cryptocurrency global data. |
| Global | `/global/decentralized_finance_defi` | Fetches global DeFi data. |
| Search | `/search` | Searches for coins, categories, and markets. |
| Trending | `/search/trending` | Lists trending coins, NFTs, and categories. |
| Companies | `/companies/public_treasury/{coin_id}` | Lists public companies' holdings for a specific coin. |
| Exchange Rates | `/exchange_rates` | Fetches BTC-to-Currency exchange rates. |
| Onchain | `/onchain/simple/networks/{network}/token_price/{addresses}` | Fetches token price by contract address on a specific network. |
| Onchain | `/onchain/networks` | Lists supported networks. |
| Onchain | `/onchain/networks/{network}/dexes` | Lists supported DEXes for a specific network. |
| Onchain | `/onchain/networks/trending_pools` | Lists trending pools across all networks. |
| Onchain | `/onchain/networks/{network}/pools/{address}` | Fetches data for a specific pool. |
For a complete list of available endpoints and their parameters, please refer to the [CoinGecko API documentation](https://www.coingecko.com/en/api/documentation).

## License

This project is licensed under the ISC License.