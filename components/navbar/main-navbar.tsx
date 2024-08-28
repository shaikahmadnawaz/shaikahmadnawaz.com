import { NavbarItems } from "@/config/links";
import Link from "next/link";

const MainNavbar = () => {
  return (
    <>
      <Link href={"/"}>
        <div className="font-semibold hidden lg:block text-xl">Nawaz</div>
      </Link>

      <nav className="hidden lg:flex items-center gap-4 text-sm lg:gap-8">
        {NavbarItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MainNavbar;
