import Link from "next/link";
import MobileNavbar from "./mobile-navbar";
import { ModeToggle } from "../mode-toggle";
import MainNavbar from "./main-navbar";

const Navbar = () => {
  return (
    <header className="flex items-center sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-[80px] px-6 lg:px-0 mx-auto w-full max-w-4xl items-center justify-between">
        <MobileNavbar />

        <MainNavbar />

        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
