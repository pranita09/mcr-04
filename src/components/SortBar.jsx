export const SortBar = () => {
  return (
    <div>
      <div className="py-2 px-4 border-[2px] bg-[#bae6fd] rounded-md">
        <select className="bg-inherit outline-none">
          <option value="latest">Latest</option>
          <option value="mostUpvated">Most Upvated</option>
        </select>
      </div>
    </div>
  );
};
