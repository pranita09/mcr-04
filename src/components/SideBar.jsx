import { HiOutlineHome } from "react-icons/hi";
import { FaHashtag, FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { UserAvatar } from "./UserAvatar";
import { useForum } from "../contexts/ForumContext";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const {
    state: { forumData },
  } = useForum();

  const activeStyle = {
    fontWeight: "bold",
  };

  return (
    <aside className=" sticky flex flex-col justify-between h-[87vh] top-0 overflow-y-auto overflow-x-hidden items-center">
      <ul className="flex items-start justify-start flex-col gap-1 tracking-wide grow">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="py-1 pl-2 pr-4 w-max flex justify-center items-center my-2 mx-4"
          >
            <HiOutlineHome className=" text-2xl mr-2" />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="py-1 pl-2 pr-4 w-max flex justify-center items-center my-2 mx-4">
          <FaHashtag className=" text-2xl mr-2" />
          <span>Explore</span>
        </li>
        <li className="py-1 pl-2 pr-4 w-max flex justify-center items-center my-2 mx-4">
          <FaRegBookmark className=" text-2xl mr-2" />
          <span>Bookmarks</span>
        </li>
        <li className="py-1 pl-2 pr-4 w-max flex justify-center items-center my-2 mx-4">
          <CgProfile className=" text-2xl mr-2" />
          <span>Profile</span>
        </li>
      </ul>

      <ul className="tracking-wide">
        <li className="w-max flex items-center justify-center gap-2">
          <UserAvatar picUrl={forumData?.picUrl} className="w-9 h-9" />
          <div className="text-sm">
            <p className="font-bold">{forumData?.name}</p>
            <p className="font-normal">{forumData?.username}</p>
          </div>
        </li>
      </ul>
    </aside>
  );
};
