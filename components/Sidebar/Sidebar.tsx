import { SUBMENU_SIDEBARS } from "@/libs";
import ButtonSideBar from "../atoms/ButtonSideBar";
import ButtonFollowers from "../atoms/ButtonFollowers";

const Sidebar = () => {
  return (
    <div className="fixed left-0 bg-transparent h-screen w-[200px] text-white overflow-y-scroll sidebar">
      {SUBMENU_SIDEBARS.map((item, id) => {
        return (
          <ButtonSideBar key={id} href={item.href} active={item.isActive}>
            {item.icons}
            {item.title}
          </ButtonSideBar>
        );
      })}
      <div className="w-full h-px bg-slate-500/30"></div>
      <p className="text-sm px-3  py-2 text-[#BEBEBE]">Akun yang diikuti</p>
      <div className="mb-4">
        <ButtonFollowers href={"/signore"} live />
        <ButtonFollowers href={"/signore"} story />
        <ButtonFollowers href={"/signore"} />
        <ButtonFollowers href={"/signore"} />
        <ButtonFollowers href={"/signore"} />
        <ButtonFollowers href={"/signore"} />
        <ButtonFollowers href={"/signore"} />
        <ButtonFollowers href={"/signore"} />
        <ButtonFollowers href={"/signore"} />
        <ButtonFollowers href={"/signore"} />
        <ButtonFollowers href={"/signore"} />
      </div>
    </div>
  );
};

export default Sidebar;
