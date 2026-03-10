import { NavItem } from "@/lib/navigation";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import NavMenuLink from "./NavMenuLink";

const NavDropdown = ({ item }: { item: NavItem }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div className="grid gap-2 p-4 w-100">
        {item.children?.map((child) => (
          <NavMenuLink
            key={child.href}
            title={child.title}
            content={child.description ?? ""}
            url={child.href}
          />
        ))}
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

export default NavDropdown;
