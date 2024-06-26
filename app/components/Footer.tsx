import Image from "next/image";
import Github from "../utils/github.png";
import AboutUs from "../utils/abouts.png";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const handleAbout = () => {
    router.push(`/aboutus`);
  };
  return (
    <div className="flex flex-col w-full p-5 absolute bottom-0">
      <div className="flex justify-center items-center gap-4 mb-2 cursor-pointer">
        <a href="https://github.com/subinoybiswas/clippy" target="__blank">
          <Image
            src={Github}
            alt="GitHub Logo"
            width={25}
            height={25}
            className="opacity-70 hover:opacity-100"
          />
        </a>
        <Image
          src={AboutUs}
          alt="About Us Logo"
          width={25}
          height={25}
          className="opacity-70 hover:opacity-100"
          onClick={handleAbout}
        />
      </div>
      <div className="text-center">
        <p className="text-base max-sm:text-xs text-slate-300/80">
          Copyright &copy; By Clippy
        </p>
        <p className="text-xs text-slate-300/80">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
