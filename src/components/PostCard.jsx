import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { BsDot } from "react-icons/bs";
import {
  GoComment,
  GoShareAndroid,
  GoBookmark,
  GoBookmarkFill,
} from "react-icons/go";
import { UserAvatar } from "./UserAvatar";
import { useForum } from "../contexts/ForumContext";
import { useNavigate } from "react-router-dom";
import { getDate } from "../utils/getDate";

export const PostCard = ({ post, singlePost }) => {
  const navigate = useNavigate();
  const { dispatch } = useForum();
  return (
    <div className="grid grid-cols-[2rem_1fr] gap-2 text-sm px-4 py-2 m-4 bg-[white] rounded-md">
      <div className="flex flex-col items-center justify-start">
        <div onClick={() => dispatch({ type: "UPVOTE", payload: post.postId })}>
          <VscTriangleUp className="text-[#3b82f6] text-[2.5rem] cursor-pointer hover:scale-105" />
        </div>
        <span className="font-bold">{post?.upvotes - post?.downvotes}</span>
        <div
          onClick={() => dispatch({ type: "DOWNVOTE", payload: post.postId })}
        >
          <VscTriangleDown className="text-[grey] text-[2.5rem] cursor-pointer hover:scale-105" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-2">
        <div className="flex items-center gap-2">
          <UserAvatar className="w-8 h-8" picUrl={post?.picUrl} />
          <span className="text-[grey]">Posted By</span>
          <span className="text-[#3b82f6] font-bold">@{post?.username}</span>
          <BsDot />
          <span className="text-[grey]">{getDate(post?.createdAt)}</span>
        </div>
        <div className="text-[1.15rem] font-bold py-2">{post.post}</div>
        <div className="flex justify-start items-center gap-2">
          {post?.tags?.map((tag, index) => (
            <div
              key={index}
              className="text-[0.7rem] py-0.5 px-1 border border-[#3b82f6] text-[#3b82f6] rounded bg-[#bae6fd]"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="py-2">
          {post?.postDescription}
          <hr className="mt-4 mb-1" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div
            className="cursor-pointer"
            onClick={() => !singlePost && navigate(`/post/${post.postId}`)}
          >
            <GoComment className="text-xl" />
          </div>
          <div>
            <GoShareAndroid className="text-xl" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              dispatch({ type: "BOOKMARK", payload: post?.postId })
            }
          >
            {post?.isBookmarked ? (
              <GoBookmarkFill className="text-xl text-[#3b82f6]" />
            ) : (
              <GoBookmark className="text-xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
