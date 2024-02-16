import { CiSearch } from "react-icons/ci";

const CenterNavbar = () => {
  return (
    <div className="col-span-4 flex justify-center items-center ">
      <div className="w-[50%] flex justify-center group rounded-full relative hover:border hover:border-[#C6C6C6]/40">
        <input
          type="serach"
          placeholder="Cari"
          className="w-full  p-3 rounded-l-full ps-4 bg-hover placeholder:text-[#C6C6C6] focus:outline-none  "
        />
        <div className="absolute h-8 w-px  right-[57px] top-[10px] bg-[#C6C6C6]/40"></div>
        <button className="p-3 pe-5   hover:bg-[#C6C6C6]/10  rounded-r-full bg-hover group-hover:bg-[#C6C6C6]/30">
          <CiSearch size={25} />
        </button>
      </div>
    </div>
  );
};

export default CenterNavbar;
