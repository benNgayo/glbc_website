export type NavItem = {
  title: string;
  href?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
};

export const navItems: NavItem[] = [
  {
    title: "About",
    children: [
      {
        title: "About GLBC",
        href: "/about/",
        description: "Our values, philosophy, mission, vision, and history.",
      },
      {
        title: "From the President",
        href: "/about/president",
        description: "A pastoral welcome and vision from the President.",
      },
      {
        title: "Statement of Faith",
        href: "/about/statement-of-faith",
        description: "The core biblical doctrines we affirm and teach.",
      },
      {
        title: "History",
        href: "/about/history",
        description: "Our journey and testimony of God’s faithfulness.",
      },
    ],
  },
  {
    title: "Academics",
    children: [
      {
        title: "Programs",
        href: "/academics/programs",
        description: "Overview of our degree programs and curriculum.",
      },
      {
        title: "Faculty",
        href: "/academics/faculty",
        description: "Meet our dedicated faculty members.",
      },
    ],
  },
  { title: "Faculty", href: "/faculty" },
  { title: "Admissions", href: "/admissions" },
];
