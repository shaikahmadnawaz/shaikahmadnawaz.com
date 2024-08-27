import Link from "next/link";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <header className="bg-[#222222] flex items-center h-[80px] sticky top-0 z-50 w-full border-border/40">
      <div className="flex mx-auto w-full max-w-4xl items-center justify-between">
        <Link href={"/"}>
          <div className="font-semibold text-xl">Nawaz</div>
        </Link>

        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Navbar;
