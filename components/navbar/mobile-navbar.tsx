"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NavbarItems } from "@/config/links";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <Link href={"/"}>
          <div className="font-semibold text-xl">Nawaz</div>
        </Link>
        <div className="my-4 pl-6">
          <div className="flex flex-col space-y-3">
            {NavbarItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
