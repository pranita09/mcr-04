import { useNavigate, useParams } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { PostCard } from "../components/PostCard";
import { useForum } from "../contexts/ForumContext";
import { BsArrowLeft } from "react-icons/bs";

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
            <div onClick={() => navigate(-1)}>
              <BsArrowLeft className="mr-4 ml-4" />
            </div>
            <span>Post</span>
          </div>
          <PostCard post={currentPost} />
        </div>
      </div>
    </div>
  );
};
