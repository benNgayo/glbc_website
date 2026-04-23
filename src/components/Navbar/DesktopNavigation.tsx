import { NavItem } from "@/lib/navigation";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import NavDropdown from "../NavDropdown";
import { SimpleNavLink } from "../SimpleNavLink";
import { Button } from "../ui/button";
type DesktopNavigationProps = {
  navItems: NavItem[];
};
const DesktopNavigation = ({ navItems }: DesktopNavigationProps) => {
  return (
    <NavigationMenu className=" text-lg justify-between items-center hidden lg:flex ">
      <NavigationMenuList>
        {navItems.map((item) =>
          item.children ? (
            <NavDropdown key={item.title} item={item} />
          ) : (
            <SimpleNavLink key={item.title} item={item} />
          ),
        )}
      </NavigationMenuList>
      <Button
        size="lg"
        className="bg-transparent outline-lime-300 border-2 cursor-pointer "
      >
        Apply
      </Button>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
