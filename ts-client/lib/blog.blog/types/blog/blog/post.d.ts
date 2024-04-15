import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "blog.blog";
export interface Post {
    title: string;
    body: string;
    creator: string;
    id: number;
}
export declare const Post: {
    encode(message: Post, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Post;
    fromJSON(object: any): Post;
    toJSON(message: Post): unknown;
    create<I extends {
        title?: string;
        body?: string;
        creator?: string;
        id?: number;
    } & {
        title?: string;
        body?: string;
        creator?: string;
        id?: number;
    } & { [K in Exclude<keyof I, keyof Post>]: never; }>(base?: I): Post;
    fromPartial<I_1 extends {
        title?: string;
        body?: string;
        creator?: string;
        id?: number;
    } & {
        title?: string;
        body?: string;
        creator?: string;
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Post>]: never; }>(object: I_1): Post;
};
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
