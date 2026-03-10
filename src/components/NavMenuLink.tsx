import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/dist/client/link";
const NavMenuLink = ({
  title,
  content,
  url,
}: {
  title: string;
  content: string;
  url: string;
}) => {
  return (
    <NavigationMenuLink asChild className="px-4 py-2 hover:bg-gray-200 rounded">
      <Link href={url}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{content}</div>
        </div>
      </Link>
    </NavigationMenuLink>
  );
};

export default NavMenuLink;
