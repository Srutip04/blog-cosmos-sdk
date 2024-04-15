import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Post } from "./post";
export declare const protobufPackage = "blog.blog";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryShowPostRequest {
    id: number;
}
export interface QueryShowPostResponse {
    post: Post | undefined;
}
export interface QueryListPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryListPostResponse {
    post: Post[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QueryShowPostRequest: {
    encode(message: QueryShowPostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowPostRequest;
    fromJSON(object: any): QueryShowPostRequest;
    toJSON(message: QueryShowPostRequest): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): QueryShowPostRequest;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): QueryShowPostRequest;
};
export declare const QueryShowPostResponse: {
    encode(message: QueryShowPostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowPostResponse;
    fromJSON(object: any): QueryShowPostResponse;
    toJSON(message: QueryShowPostResponse): unknown;
    create<I extends {
        post?: {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        };
    } & {
        post?: {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        } & {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        } & { [K in Exclude<keyof I["post"], keyof Post>]: never; };
    } & { [K_1 in Exclude<keyof I, "post">]: never; }>(base?: I): QueryShowPostResponse;
    fromPartial<I_1 extends {
        post?: {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        };
    } & {
        post?: {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        } & {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        } & { [K_2 in Exclude<keyof I_1["post"], keyof Post>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "post">]: never; }>(object: I_1): QueryShowPostResponse;
};
export declare const QueryListPostRequest: {
    encode(message: QueryListPostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListPostRequest;
    fromJSON(object: any): QueryListPostRequest;
    toJSON(message: QueryListPostRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryListPostRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryListPostRequest;
};
export declare const QueryListPostResponse: {
    encode(message: QueryListPostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListPostResponse;
    fromJSON(object: any): QueryListPostResponse;
    toJSON(message: QueryListPostResponse): unknown;
    create<I extends {
        post?: {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        post?: {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        }[] & ({
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        } & {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        } & { [K in Exclude<keyof I["post"][number], keyof Post>]: never; })[] & { [K_1 in Exclude<keyof I["post"], keyof {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof QueryListPostResponse>]: never; }>(base?: I): QueryListPostResponse;
    fromPartial<I_1 extends {
        post?: {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        post?: {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        }[] & ({
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        } & {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        } & { [K_4 in Exclude<keyof I_1["post"][number], keyof Post>]: never; })[] & { [K_5 in Exclude<keyof I_1["post"], keyof {
            title?: string;
            body?: string;
            creator?: string;
            id?: number;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof QueryListPostResponse>]: never; }>(object: I_1): QueryListPostResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of ShowPost items. */
    ShowPost(request: QueryShowPostRequest): Promise<QueryShowPostResponse>;
    /** Queries a list of ListPost items. */
    ListPost(request: QueryListPostRequest): Promise<QueryListPostResponse>;
}
export declare const QueryServiceName = "blog.blog.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    ShowPost(request: QueryShowPostRequest): Promise<QueryShowPostResponse>;
    ListPost(request: QueryListPostRequest): Promise<QueryListPostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
