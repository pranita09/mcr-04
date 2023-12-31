import { PostCard } from "../components/PostCard";
import { SideBar } from "../components/SideBar";
import { SortBar } from "../components/SortBar";
import { useForum } from "../contexts/ForumContext";

export const Home = () => {
  const {
    state: { forumData },
    sortPosts,
    sortBy,
  } = useForum();
  return (
    <div>
      <div className="py-2 bg-[white]">
        <h1 className="text-[2rem] font-bold px-40 text-[#3b82f6]">MyForum</h1>
      </div>
      <div className="grid sm:grid-cols-[15rem_1fr_15rem] w-[80%] m-auto">
        <SideBar />
        <div>
          <span className="text-xl mx-4 mt-4">{sortBy} Posts</span>
          {forumData.posts?.sort(sortPosts)?.map((post) => (
            <PostCard key={post.postId} post={post} />
          ))}
        </div>
        <div>
          <SortBar />
        </div>
      </div>
    </div>
  );
};
