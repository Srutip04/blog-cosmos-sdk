import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgCreatePostResponse } from "./types/blog/blog/tx";
import { MsgUpdateParamsResponse } from "./types/blog/blog/tx";
import { MsgUpdateParams } from "./types/blog/blog/tx";
import { Params } from "./types/blog/blog/params";
import { QueryParamsRequest } from "./types/blog/blog/query";
import { QueryShowPostRequest } from "./types/blog/blog/query";
import { MsgDeletePost } from "./types/blog/blog/tx";
import { Post } from "./types/blog/blog/post";
import { MsgUpdatePost } from "./types/blog/blog/tx";
import { GenesisState } from "./types/blog/blog/genesis";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { QueryListPostRequest } from "./types/blog/blog/query";
import { QueryListPostResponse } from "./types/blog/blog/query";
import { MsgUpdatePostResponse } from "./types/blog/blog/tx";
import { MsgDeletePostResponse } from "./types/blog/blog/tx";
import { QueryParamsResponse } from "./types/blog/blog/query";
import { QueryShowPostResponse } from "./types/blog/blog/query";
export { MsgCreatePostResponse, MsgUpdateParamsResponse, MsgUpdateParams, Params, QueryParamsRequest, QueryShowPostRequest, MsgDeletePost, Post, MsgUpdatePost, GenesisState, MsgCreatePost, QueryListPostRequest, QueryListPostResponse, MsgUpdatePostResponse, MsgDeletePostResponse, QueryParamsResponse, QueryShowPostResponse };
type sendMsgCreatePostResponseParams = {
    value: MsgCreatePostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryShowPostRequestParams = {
    value: QueryShowPostRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeletePostParams = {
    value: MsgDeletePost;
    fee?: StdFee;
    memo?: string;
};
type sendPostParams = {
    value: Post;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdatePostParams = {
    value: MsgUpdatePost;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePostParams = {
    value: MsgCreatePost;
    fee?: StdFee;
    memo?: string;
};
type sendQueryListPostRequestParams = {
    value: QueryListPostRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryListPostResponseParams = {
    value: QueryListPostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdatePostResponseParams = {
    value: MsgUpdatePostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeletePostResponseParams = {
    value: MsgDeletePostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryShowPostResponseParams = {
    value: QueryShowPostResponse;
    fee?: StdFee;
    memo?: string;
};
type msgCreatePostResponseParams = {
    value: MsgCreatePostResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryShowPostRequestParams = {
    value: QueryShowPostRequest;
};
type msgDeletePostParams = {
    value: MsgDeletePost;
};
type postParams = {
    value: Post;
};
type msgUpdatePostParams = {
    value: MsgUpdatePost;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCreatePostParams = {
    value: MsgCreatePost;
};
type queryListPostRequestParams = {
    value: QueryListPostRequest;
};
type queryListPostResponseParams = {
    value: QueryListPostResponse;
};
type msgUpdatePostResponseParams = {
    value: MsgUpdatePostResponse;
};
type msgDeletePostResponseParams = {
    value: MsgDeletePostResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryShowPostResponseParams = {
    value: QueryShowPostResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgCreatePostResponse({ value, fee, memo }: sendMsgCreatePostResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryShowPostRequest({ value, fee, memo }: sendQueryShowPostRequestParams): Promise<DeliverTxResponse>;
    sendMsgDeletePost({ value, fee, memo }: sendMsgDeletePostParams): Promise<DeliverTxResponse>;
    sendPost({ value, fee, memo }: sendPostParams): Promise<DeliverTxResponse>;
    sendMsgUpdatePost({ value, fee, memo }: sendMsgUpdatePostParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCreatePost({ value, fee, memo }: sendMsgCreatePostParams): Promise<DeliverTxResponse>;
    sendQueryListPostRequest({ value, fee, memo }: sendQueryListPostRequestParams): Promise<DeliverTxResponse>;
    sendQueryListPostResponse({ value, fee, memo }: sendQueryListPostResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdatePostResponse({ value, fee, memo }: sendMsgUpdatePostResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeletePostResponse({ value, fee, memo }: sendMsgDeletePostResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryShowPostResponse({ value, fee, memo }: sendQueryShowPostResponseParams): Promise<DeliverTxResponse>;
    msgCreatePostResponse({ value }: msgCreatePostResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryShowPostRequest({ value }: queryShowPostRequestParams): EncodeObject;
    msgDeletePost({ value }: msgDeletePostParams): EncodeObject;
    post({ value }: postParams): EncodeObject;
    msgUpdatePost({ value }: msgUpdatePostParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCreatePost({ value }: msgCreatePostParams): EncodeObject;
    queryListPostRequest({ value }: queryListPostRequestParams): EncodeObject;
    queryListPostResponse({ value }: queryListPostResponseParams): EncodeObject;
    msgUpdatePostResponse({ value }: msgUpdatePostResponseParams): EncodeObject;
    msgDeletePostResponse({ value }: msgDeletePostResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryShowPostResponse({ value }: queryShowPostResponseParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        BlogBlog: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
