import Link from "next/link";

const ButtonSideBar = ({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`flex hover:bg-hover/50 p-2.5 ps-4 my-2 gap-3 text-lg font-semibold items-center ${
        active ? "text-red-600" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ButtonSideBar;
