import Image from "next/image";
import Link from "next/link";

const LeftNavbar = () => {
  return (
    <Link href={"/"} className="flex justify-start items-center">
      <Image src="/.././images/logo.png" alt="logo" width={65} height={65} />
      <div className="logo text-2xl font-semibold -ml-3">TikTok</div>
    </Link>
  );
};

export default LeftNavbar;
