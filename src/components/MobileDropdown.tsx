import { NavItem } from "@/lib/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const MobileDropdown = ({
  item,
  setOpen,
}: {
  item: NavItem;
  setOpen: (open: boolean) => void;
}) => (
  <Accordion type="single" collapsible>
    <AccordionItem value={item.title}>
      <AccordionTrigger className=" cursor-pointer text-md font-semibold">
        {item.title}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-2 pl-4">
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block py-2 text-sm"
            onClick={() => setOpen(false)}
          >
            {child.title}
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default MobileDropdown;
