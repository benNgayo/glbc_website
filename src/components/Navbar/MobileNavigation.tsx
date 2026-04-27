import { NavItem } from "@/lib/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileDropdown from "../MobileDropdown";
import Link from "next/link";
import { useState } from "react";

type MobileNavigationProps = {
  navItems: NavItem[];
};
const MobileNavigation = ({ navItems }: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="p-2 bg-glbc-navy text-white">
        <Menu size={48} className=" cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="text-black py-8 px-4 ">
        {navItems.map((item) =>
          item.children ? (
            <MobileDropdown key={item.title} item={item} setOpen={setOpen} />
          ) : (
            <Link
              key={item.title}
              href={item.href!}
              className="block py-2 text-md font-semibold"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ),
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
