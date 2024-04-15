import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "blog.blog";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgCreatePost {
    creator: string;
    title: string;
    body: string;
}
export interface MsgCreatePostResponse {
    id: number;
}
export interface MsgUpdatePost {
    creator: string;
    title: string;
    body: string;
    id: number;
}
export interface MsgUpdatePostResponse {
}
export interface MsgDeletePost {
    creator: string;
    id: number;
}
export interface MsgDeletePostResponse {
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(base?: I): MsgUpdateParams;
    fromPartial<I_1 extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof MsgUpdateParams>]: never; }>(object: I_1): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdateParamsResponse;
};
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    create<I extends {
        creator?: string;
        title?: string;
        body?: string;
    } & {
        creator?: string;
        title?: string;
        body?: string;
    } & { [K in Exclude<keyof I, keyof MsgCreatePost>]: never; }>(base?: I): MsgCreatePost;
    fromPartial<I_1 extends {
        creator?: string;
        title?: string;
        body?: string;
    } & {
        creator?: string;
        title?: string;
        body?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreatePost>]: never; }>(object: I_1): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(message: MsgCreatePostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(object: any): MsgCreatePostResponse;
    toJSON(message: MsgCreatePostResponse): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): MsgCreatePostResponse;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): MsgCreatePostResponse;
};
export declare const MsgUpdatePost: {
    encode(message: MsgUpdatePost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePost;
    fromJSON(object: any): MsgUpdatePost;
    toJSON(message: MsgUpdatePost): unknown;
    create<I extends {
        creator?: string;
        title?: string;
        body?: string;
        id?: number;
    } & {
        creator?: string;
        title?: string;
        body?: string;
        id?: number;
    } & { [K in Exclude<keyof I, keyof MsgUpdatePost>]: never; }>(base?: I): MsgUpdatePost;
    fromPartial<I_1 extends {
        creator?: string;
        title?: string;
        body?: string;
        id?: number;
    } & {
        creator?: string;
        title?: string;
        body?: string;
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdatePost>]: never; }>(object: I_1): MsgUpdatePost;
};
export declare const MsgUpdatePostResponse: {
    encode(_: MsgUpdatePostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePostResponse;
    fromJSON(_: any): MsgUpdatePostResponse;
    toJSON(_: MsgUpdatePostResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdatePostResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdatePostResponse;
};
export declare const MsgDeletePost: {
    encode(message: MsgDeletePost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePost;
    fromJSON(object: any): MsgDeletePost;
    toJSON(message: MsgDeletePost): unknown;
    create<I extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K in Exclude<keyof I, keyof MsgDeletePost>]: never; }>(base?: I): MsgDeletePost;
    fromPartial<I_1 extends {
        creator?: string;
        id?: number;
    } & {
        creator?: string;
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDeletePost>]: never; }>(object: I_1): MsgDeletePost;
};
export declare const MsgDeletePostResponse: {
    encode(_: MsgDeletePostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePostResponse;
    fromJSON(_: any): MsgDeletePostResponse;
    toJSON(_: MsgDeletePostResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgDeletePostResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgDeletePostResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
    DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
}
export declare const MsgServiceName = "blog.blog.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
    DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
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
