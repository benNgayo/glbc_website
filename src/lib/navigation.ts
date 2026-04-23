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
        href: "/academics",
        description: "Overview of our programs and curriculum.",
      },
      {
        title: "Faculty",
        href: "/about/faculty",
        description: "Meet our dedicated faculty members.",
      },
    ],
  },
  { title: "Faculty", href: "/about/faculty" },
  // { title: "Admissions", href: "/admissions" },
  { title: "Contact Us", href: "/contact" },
];

export const facultyMembers = [
  {
    name: "Rev. Christopher Mujesia",
    role: "Principal",
    qualification: "MA Biblical Studies (AIU)",
    nationality: "Kenyan",
    status: "Full time",
    imgUrl: "/christopher-mujesia.jpg",
  },
  {
    name: "Mr. Robert Simiyu Malaba",
    role: "Faculty",
    qualification:
      "PhD in Orality (ASOT); PhD Candidate Religious Studies (Kisii)",
    nationality: "Kenyan",
    status: "Full time",
    imgUrl: "/robert-simiyu-malaba.jpg",
  },
  {
    name: "Mr. Silas Lolo",
    role: "Faculty",
    qualification: "Phd Candidate Theology, AIU",
    nationality: "Kenyan",
    status: "Full-Time",
    imgUrl: "/silas-lolo.jpg",
  },
  {
    name: "Mr. Ronald Muyonga",
    role: "Faculty",
    qualification: "PhD Candidate Theology and Development (AIU)",
    nationality: "Kenyan",
    status: "Full-time",
    imgUrl: "/ronald-muyonga.jpg",
  },
  {
    name: "Dr. Rick Gregory",
    role: "Visiting Lecturer",
    qualification: "PhD (Grace Theological Seminary, USA)",
    nationality: "American",
    status: "Part-time",
    imgUrl: "/rick-gregory.jpg",
  },
  {
    name: "Justin Schroeder",
    role: "Visiting Lecturer",
    qualification: "MDiv (Cornerstone Seminary, USA)",
    nationality: "American",
    status: "Full-time",
    imgUrl: "/justin-schroeder.jpg",
  },
  {
    name: "Leonard Too",
    role: "Visiting Lecturer",
    qualification: "PhD (AIU)",
    nationality: "Kenyan",
    status: "Part-time",
    imgUrl: "/leonard-too.jpg",
  },
  {
    name: "Peter O. Adegbile",
    role: "Visiting Lecturer",
    qualification: "PhD (AIU)",
    nationality: "Nigerian",
    status: "Part-time",
    imgUrl: "/peter-o-adegbile.jpg",
  },
  {
    name: "Mr. Jacob Njoroge",
    role: "Registrar / Admin",
    qualification: "BA Theology (GLBC)",
    nationality: "Kenyan",
    status: "Full-Time",
    imgUrl: "/jacob-njoroge.jpg",
  },
  {
    name: "Mr. Benedict Ngayo",
    role: "Faculty",
    qualification: "MDiv BS Candidate (AIU)",
    nationality: "Kenyan",
    status: "Full-time",
    imgUrl: "/benedict-ngayo.jpg",
  },
];
