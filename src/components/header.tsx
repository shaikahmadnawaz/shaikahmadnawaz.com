import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
    return (
        <header  className="sticky top-0 border-b bg-opacity-80 backdrop-blur-md font-medium z-50 w-full">
            <div className="flex items-center justify-between h-18 max-w-5xl gap-10">
            <Link href="/">
          <Image
            src={"https://s3.ap-south-1.amazonaws.com/shaikahmadnawaz.com/profile-picture.png"}
            alt="shaikahmadnawaz.com"
            width={40}
            height={40}
            className="inline-block rounded-sm"
          />
        </Link>
        <nav className="">
          <ul className="flex items-center gap-3">

            <li  className="p-3 ">

              <Link
                href="/"
                className=" text-muted-foreground hover:text-primary"
                
                
              >
                About
              </Link>
            </li>
            <li  className="p-3 ">
              <Link
                href="/blog"
                className=" text-muted-foreground hover:text-primary"
               
              >
                Blog
              </Link>
            </li>
            <li className="p-3">
            <ModeToggle/>
            </li>
          </ul>
        </nav>
            </div>
        </header>
    );
}