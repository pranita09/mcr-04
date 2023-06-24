import { useForum } from "../contexts/ForumContext";

export const SortBar = () => {
  const { sortBy, toggleSortBy } = useForum();
  return (
    <div>
      <div className="py-2 px-4 border-[2px] bg-[#bae6fd] rounded-md">
        <select
          className="bg-inherit outline-none w-full text-sm"
          value={sortBy}
          onChange={toggleSortBy}
        >
          <option value="Latest">Latest</option>
          <option value="Upvoted">Most Upvated</option>
        </select>
      </div>
    </div>
  );
};
