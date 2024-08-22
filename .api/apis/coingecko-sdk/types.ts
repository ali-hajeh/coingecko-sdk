import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type FetchCoinInfoMetadataParam = FromSchema<typeof schemas.FetchCoinInfo.metadata>;
export type FetchCoinInfoResponse200 = FromSchema<typeof schemas.FetchCoinInfo.response['200']>;
export type FetchCoinInfoResponseDefault = FromSchema<typeof schemas.FetchCoinInfo.response['default']>;
export type FetchCoinListResponse200 = FromSchema<typeof schemas.FetchCoinList.response['200']>;
export type FetchCoinListResponseDefault = FromSchema<typeof schemas.FetchCoinList.response['default']>;
