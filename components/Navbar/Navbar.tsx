import CenterNavbar from "./CenterNavbar";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-primary grid grid-cols-6 text-white  pe-7 border-b py-1 border-[#C6C6C6]/40">
      <LeftNavbar />
      <CenterNavbar />
      <RightNavbar />
    </div>
  );
};

export default Navbar;
