import Link from "next/link";

const ButtonFollowers = ({
  href,
  story,
  live,
}: {
  href: string;
  story?: boolean;
  live?: boolean;
}) => {
  return (
    <Link
      href={`${href}`}
      className={`flex hover:bg-hover/50 p-1 ps-4 my-1 gap-3 text-lg font-semibold items-center`}
    >
      <img
        src="data:image/png;base64,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"
        alt="img"
        className={`w-8 h-8 rounded-full ring-2 ${
          story ? "ring-blue-500" : live ? "ring-red-400" : ""
        }`}
      />
      <div className="">
        <p className="text-[16px] font-semibold">signore.id</p>
        <p className="text-[11px] text-[#BEBEBE] -mt-2">SIGNORE</p>
      </div>
    </Link>
  );
};

export default ButtonFollowers;
