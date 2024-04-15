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
const msgTypes = [
    ["/blog.blog.MsgCreatePostResponse", MsgCreatePostResponse],
    ["/blog.blog.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/blog.blog.MsgUpdateParams", MsgUpdateParams],
    ["/blog.blog.Params", Params],
    ["/blog.blog.QueryParamsRequest", QueryParamsRequest],
    ["/blog.blog.QueryShowPostRequest", QueryShowPostRequest],
    ["/blog.blog.MsgDeletePost", MsgDeletePost],
    ["/blog.blog.Post", Post],
    ["/blog.blog.MsgUpdatePost", MsgUpdatePost],
    ["/blog.blog.GenesisState", GenesisState],
    ["/blog.blog.MsgCreatePost", MsgCreatePost],
    ["/blog.blog.QueryListPostRequest", QueryListPostRequest],
    ["/blog.blog.QueryListPostResponse", QueryListPostResponse],
    ["/blog.blog.MsgUpdatePostResponse", MsgUpdatePostResponse],
    ["/blog.blog.MsgDeletePostResponse", MsgDeletePostResponse],
    ["/blog.blog.QueryParamsResponse", QueryParamsResponse],
    ["/blog.blog.QueryShowPostResponse", QueryShowPostResponse],
];
export { msgTypes };
