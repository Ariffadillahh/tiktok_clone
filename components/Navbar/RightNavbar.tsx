import { BiMessageMinus } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";

const RightNavbar = () => {
  return (
    <div className="flex justify-end ">
      <div className="flex gap-4 items-center">
        <button className="px-3 py-2 bg-hover flex gap-3 items-center hover:bg-[#C6C6C6]/10">
          <FaPlus />
          Unggah
        </button>
        <button className="relative group -mt-2">
          <GoPaperAirplane size={23} className="-rotate-[20deg]" />
          <span className="absolute -bottom-16 left-[50%] text-nowrap -translate-x-[50%] bg-slate-500/60 text-white py-1 px-2 rounded hidden group-hover:flex">
            Pesan
          </span>
        </button>
        <button className="relative group mr-2">
          <BiMessageMinus size={23} />
          <div className="absolute -right-3 -top-3  bg-red-600 rounded-full px-1.5 text-white">
            <p className="text-sm">22</p>
          </div>
          <span className="absolute -bottom-16 left-[50%] text-nowrap  -translate-x-[50%] bg-slate-500/60 text-white py-1 px-2 rounded hidden group-hover:flex">
            Kotak Masuk
          </span>
        </button>

        <img
          src="https://i.pinimg.com/236x/c4/34/d8/c434d8c366517ca20425bdc9ad8a32de.jpg"
          alt="Foto Profile"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default RightNavbar;
