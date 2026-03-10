import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NavItem } from "@/lib/navigation";
import Link from "next/link";
export const SimpleNavLink = ({ item }: { item: NavItem }) => (
  <NavigationMenuItem>
    <Link href={item.href!} className="px-4 py-2">
      {item.title}
    </Link>
  </NavigationMenuItem>
);
