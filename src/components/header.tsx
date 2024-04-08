import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./nav-link";

export const Header = () => {
    return (
        <header  className="sticky h-18 top-0 border-b py-4 bg-opacity-80 backdrop-blur-md font-medium z-10">
            <div className="flex items-center justify-between gap-10">
            <Link href="/">
          <Image
            src={"https://s3.ap-south-1.amazonaws.com/shaikahmadnawaz.com/profile-picture.png"}
            alt="shaikahmadnawaz.com"
            width={40}
            height={40}
            className="inline-block rounded-sm"
          />
        </Link>
        <nav className="-mr-3">
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="/"
                className="p-3 text-muted-foreground hover:text-primary"
                
                
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="p-3 text-muted-foreground hover:text-primary"
               
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
            </div>
        </header>
    );
}