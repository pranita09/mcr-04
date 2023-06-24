import { useNavigate, useParams } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { PostCard } from "../components/PostCard";
import { useForum } from "../contexts/ForumContext";
import { BsArrowLeft } from "react-icons/bs";
import { UserAvatar } from "../components/UserAvatar";
import { BsDot } from "react-icons/bs";
import { getDate } from "../utils/getDate";

export const SinglePost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const {
    state: { forumData },
  } = useForum();

  const currentPost = forumData.posts?.find((post) => post?.postId === postId);

  return (
    <div>
      <div className="py-2 bg-[white]">
        <h1 className="text-[2rem] font-bold px-40 text-[#3b82f6]">MyForum</h1>
      </div>
      <div className="grid sm:grid-cols-[15rem_1fr_15rem] w-[80%] m-auto">
        <SideBar />
        <div className="bg-[white]">
          <div className="flex items-center justify-start my-6">
            <div onClick={() => navigate(-1)} className="cursor-pointer">
              <BsArrowLeft className="mr-4 ml-4" />
            </div>
            <span>Post</span>
          </div>
          <PostCard post={currentPost} singlePost />
          {currentPost?.comments && (
            <div>
              {currentPost?.comments?.map((comment) => (
                <div
                  key={comment?.commentId}
                  className="grid grid-cols-[2rem_1fr] gap-2 text-sm px-4 py-2 m-4"
                >
                  <div>
                    <UserAvatar picUrl={comment?.picUrl} className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex justify-start items-center gap-2">
                      <span className="text-sm font-bold">
                        {comment.username}
                      </span>
                      <BsDot />
                      <span className="text-[grey]">
                        {getDate(comment?.createdAt)}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-[grey]">Replying to</span>{" "}
                      <span className="text-sm text-[#3b82f6]">
                        @{currentPost?.username}
                      </span>
                    </div>
                    <div className="py-0.5">{comment?.comment}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
