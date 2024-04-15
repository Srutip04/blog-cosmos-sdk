/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.nft.v1beta1";
function createBaseEventSend() {
    return { classId: "", id: "", sender: "", receiver: "" };
}
export const EventSend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.receiver = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classId !== "") {
            obj.classId = message.classId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.sender !== "") {
            obj.sender = message.sender;
        }
        if (message.receiver !== "") {
            obj.receiver = message.receiver;
        }
        return obj;
    },
    create(base) {
        return EventSend.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventSend();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        return message;
    },
};
function createBaseEventMint() {
    return { classId: "", id: "", owner: "" };
}
export const EventMint = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.owner = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classId !== "") {
            obj.classId = message.classId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        return obj;
    },
    create(base) {
        return EventMint.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventMint();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
};
function createBaseEventBurn() {
    return { classId: "", id: "", owner: "" };
}
export const EventBurn = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.classId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.owner = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classId !== "") {
            obj.classId = message.classId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        return obj;
    },
    create(base) {
        return EventBurn.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventBurn();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
