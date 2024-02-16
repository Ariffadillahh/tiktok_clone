import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
import { TbUserPlus } from "react-icons/tb";

export const SUBMENU_SIDEBARS = [
  {
    title: "For You",
    icons: <AiFillHome size={25} />,
    href: "/foryou",
    isActive: true,
  },
  {
    title: "Following",
    icons: <TbUserPlus size={25} />,
    href: "/following",
    isActive: false,
  },
  {
    title: "Friends",
    icons: <LuUsers2 size={25} />,
    href: "/friends",
    isActive: false,
  },
  {
    title: "Explore",
    icons: <MdOutlineExplore size={25} />,
    href: "/explore",
    isActive: false,
  },
  {
    title: "Live",
    icons: <BsCameraVideo size={25} />,
    href: "/live",
    isActive: false,
  },
  {
    title: "Profile",
    icons: <AiOutlineUser size={25} />,
    href: "/profile",
    isActive: false,
  },
];
