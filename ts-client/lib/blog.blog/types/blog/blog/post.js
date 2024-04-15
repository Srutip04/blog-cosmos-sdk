/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "blog.blog";
function createBasePost() {
    return { title: "", body: "", creator: "", id: 0 };
}
export const Post = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.body !== "") {
            writer.uint32(18).string(message.body);
        }
        if (message.creator !== "") {
            writer.uint32(26).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(32).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePost();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.body = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.id = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            body: isSet(object.body) ? String(object.body) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? Number(object.id) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.body !== "") {
            obj.body = message.body;
        }
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        return obj;
    },
    create(base) {
        return Post.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePost();
        message.title = object.title ?? "";
        message.body = object.body ?? "";
        message.creator = object.creator ?? "";
        message.id = object.id ?? 0;
        return message;
    },
};
const tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
