import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Class, NFT } from "./nft";
export declare const protobufPackage = "cosmos.nft.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
    /** class_id associated with the nft */
    classId: string;
    /** owner is the owner address of the nft */
    owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
    /** amount is the number of all NFTs of a given class owned by the owner */
    amount: number;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the NFT */
    id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    /** owner is the owner address of the nft */
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
    /** class_id associated with the nft */
    classId: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    /** amount is the number of all NFTs from the given class */
    amount: number;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
    /** class_id associated with the nft */
    classId: string;
    /** owner is the owner address of the nft */
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
    /** NFT defines the NFT */
    nfts: NFT[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the NFT */
    id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    /** owner is the owner address of the nft */
    nft: NFT | undefined;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
    /** class_id associated with the nft */
    classId: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
    /** class defines the class of the nft type. */
    class: Class | undefined;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
    /** class defines the class of the nft type. */
    classes: Class[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    create<I extends {
        classId?: string;
        owner?: string;
    } & {
        classId?: string;
        owner?: string;
    } & { [K in Exclude<keyof I, keyof QueryBalanceRequest>]: never; }>(base?: I): QueryBalanceRequest;
    fromPartial<I_1 extends {
        classId?: string;
        owner?: string;
    } & {
        classId?: string;
        owner?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryBalanceRequest>]: never; }>(object: I_1): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    create<I extends {
        amount?: number;
    } & {
        amount?: number;
    } & { [K in Exclude<keyof I, "amount">]: never; }>(base?: I): QueryBalanceResponse;
    fromPartial<I_1 extends {
        amount?: number;
    } & {
        amount?: number;
    } & { [K_1 in Exclude<keyof I_1, "amount">]: never; }>(object: I_1): QueryBalanceResponse;
};
export declare const QueryOwnerRequest: {
    encode(message: QueryOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest;
    fromJSON(object: any): QueryOwnerRequest;
    toJSON(message: QueryOwnerRequest): unknown;
    create<I extends {
        classId?: string;
        id?: string;
    } & {
        classId?: string;
        id?: string;
    } & { [K in Exclude<keyof I, keyof QueryOwnerRequest>]: never; }>(base?: I): QueryOwnerRequest;
    fromPartial<I_1 extends {
        classId?: string;
        id?: string;
    } & {
        classId?: string;
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryOwnerRequest>]: never; }>(object: I_1): QueryOwnerRequest;
};
export declare const QueryOwnerResponse: {
    encode(message: QueryOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse;
    fromJSON(object: any): QueryOwnerResponse;
    toJSON(message: QueryOwnerResponse): unknown;
    create<I extends {
        owner?: string;
    } & {
        owner?: string;
    } & { [K in Exclude<keyof I, "owner">]: never; }>(base?: I): QueryOwnerResponse;
    fromPartial<I_1 extends {
        owner?: string;
    } & {
        owner?: string;
    } & { [K_1 in Exclude<keyof I_1, "owner">]: never; }>(object: I_1): QueryOwnerResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    create<I extends {
        classId?: string;
    } & {
        classId?: string;
    } & { [K in Exclude<keyof I, "classId">]: never; }>(base?: I): QuerySupplyRequest;
    fromPartial<I_1 extends {
        classId?: string;
    } & {
        classId?: string;
    } & { [K_1 in Exclude<keyof I_1, "classId">]: never; }>(object: I_1): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    create<I extends {
        amount?: number;
    } & {
        amount?: number;
    } & { [K in Exclude<keyof I, "amount">]: never; }>(base?: I): QuerySupplyResponse;
    fromPartial<I_1 extends {
        amount?: number;
    } & {
        amount?: number;
    } & { [K_1 in Exclude<keyof I_1, "amount">]: never; }>(object: I_1): QuerySupplyResponse;
};
export declare const QueryNFTsRequest: {
    encode(message: QueryNFTsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest;
    fromJSON(object: any): QueryNFTsRequest;
    toJSON(message: QueryNFTsRequest): unknown;
    create<I extends {
        classId?: string;
        owner?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        classId?: string;
        owner?: string;
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
    } & { [K_1 in Exclude<keyof I, keyof QueryNFTsRequest>]: never; }>(base?: I): QueryNFTsRequest;
    fromPartial<I_1 extends {
        classId?: string;
        owner?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        classId?: string;
        owner?: string;
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
    } & { [K_3 in Exclude<keyof I_1, keyof QueryNFTsRequest>]: never; }>(object: I_1): QueryNFTsRequest;
};
export declare const QueryNFTsResponse: {
    encode(message: QueryNFTsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse;
    fromJSON(object: any): QueryNFTsResponse;
    toJSON(message: QueryNFTsResponse): unknown;
    create<I extends {
        nfts?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        nfts?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K in Exclude<keyof I["nfts"][number]["data"], keyof import("../../../google/protobuf/any").Any>]: never; };
        } & { [K_1 in Exclude<keyof I["nfts"][number], keyof NFT>]: never; })[] & { [K_2 in Exclude<keyof I["nfts"], keyof {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof QueryNFTsResponse>]: never; }>(base?: I): QueryNFTsResponse;
    fromPartial<I_1 extends {
        nfts?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        nfts?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_5 in Exclude<keyof I_1["nfts"][number]["data"], keyof import("../../../google/protobuf/any").Any>]: never; };
        } & { [K_6 in Exclude<keyof I_1["nfts"][number], keyof NFT>]: never; })[] & { [K_7 in Exclude<keyof I_1["nfts"], keyof {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_8 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof QueryNFTsResponse>]: never; }>(object: I_1): QueryNFTsResponse;
};
export declare const QueryNFTRequest: {
    encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest;
    fromJSON(object: any): QueryNFTRequest;
    toJSON(message: QueryNFTRequest): unknown;
    create<I extends {
        classId?: string;
        id?: string;
    } & {
        classId?: string;
        id?: string;
    } & { [K in Exclude<keyof I, keyof QueryNFTRequest>]: never; }>(base?: I): QueryNFTRequest;
    fromPartial<I_1 extends {
        classId?: string;
        id?: string;
    } & {
        classId?: string;
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryNFTRequest>]: never; }>(object: I_1): QueryNFTRequest;
};
export declare const QueryNFTResponse: {
    encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse;
    fromJSON(object: any): QueryNFTResponse;
    toJSON(message: QueryNFTResponse): unknown;
    create<I extends {
        nft?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        nft?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K in Exclude<keyof I["nft"]["data"], keyof import("../../../google/protobuf/any").Any>]: never; };
        } & { [K_1 in Exclude<keyof I["nft"], keyof NFT>]: never; };
    } & { [K_2 in Exclude<keyof I, "nft">]: never; }>(base?: I): QueryNFTResponse;
    fromPartial<I_1 extends {
        nft?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        nft?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_3 in Exclude<keyof I_1["nft"]["data"], keyof import("../../../google/protobuf/any").Any>]: never; };
        } & { [K_4 in Exclude<keyof I_1["nft"], keyof NFT>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "nft">]: never; }>(object: I_1): QueryNFTResponse;
};
export declare const QueryClassRequest: {
    encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    create<I extends {
        classId?: string;
    } & {
        classId?: string;
    } & { [K in Exclude<keyof I, "classId">]: never; }>(base?: I): QueryClassRequest;
    fromPartial<I_1 extends {
        classId?: string;
    } & {
        classId?: string;
    } & { [K_1 in Exclude<keyof I_1, "classId">]: never; }>(object: I_1): QueryClassRequest;
};
export declare const QueryClassResponse: {
    encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    create<I extends {
        class?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        class?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K in Exclude<keyof I["class"]["data"], keyof import("../../../google/protobuf/any").Any>]: never; };
        } & { [K_1 in Exclude<keyof I["class"], keyof Class>]: never; };
    } & { [K_2 in Exclude<keyof I, "class">]: never; }>(base?: I): QueryClassResponse;
    fromPartial<I_1 extends {
        class?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        class?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_3 in Exclude<keyof I_1["class"]["data"], keyof import("../../../google/protobuf/any").Any>]: never; };
        } & { [K_4 in Exclude<keyof I_1["class"], keyof Class>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "class">]: never; }>(object: I_1): QueryClassResponse;
};
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryClassesRequest;
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
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryClassesRequest;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    create<I extends {
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K in Exclude<keyof I["classes"][number]["data"], keyof import("../../../google/protobuf/any").Any>]: never; };
        } & { [K_1 in Exclude<keyof I["classes"][number], keyof Class>]: never; })[] & { [K_2 in Exclude<keyof I["classes"], keyof {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof QueryClassesResponse>]: never; }>(base?: I): QueryClassesResponse;
    fromPartial<I_1 extends {
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_5 in Exclude<keyof I_1["classes"][number]["data"], keyof import("../../../google/protobuf/any").Any>]: never; };
        } & { [K_6 in Exclude<keyof I_1["classes"][number], keyof Class>]: never; })[] & { [K_7 in Exclude<keyof I_1["classes"], keyof {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_8 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof QueryClassesResponse>]: never; }>(object: I_1): QueryClassesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    /** NFT queries an NFT based on its class and id. */
    NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    /** Class queries an NFT class based on its id */
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    /** Classes queries all NFT classes */
    Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export declare const QueryServiceName = "cosmos.nft.v1beta1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
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
