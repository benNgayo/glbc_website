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
      {
        title: "E-learning",
        href: "https://elearning.glbc.co.ke/",
        description: "Our online learning platform and resources.",
      },
    ],
  },
  { title: "Faculty", href: "/about/faculty" },
  // { title: "Admissions", href: "/admissions" },
  { title: "Contact Us", href: "/contact" },
];

export const facultyMembers = [
  // {
  //   name: "Rev. Christopher Mujesia",
  //   role: "Principal",
  //   qualification: "MA Biblical Studies (AIU)",
  //   nationality: "Kenyan",
  //   status: "Full time",
  //   imgUrl: "/christopher-mujesia.jpg",
  // },
  {
    name: "Mr. Robert Simiyu Malaba",
    role: "Faculty",
    qualification:
      "PhD in Orality (ASOT); PhD Candidate Religious Studies (Kisii)",
    nationality: "Kenyan",
    status: "Full time",
    imgUrl: "/robert.jpg",
  },
  // {
  //   name: "Mr. Silas Lolo",
  //   role: "Faculty",
  //   qualification: "Phd Candidate Theology, AIU",
  //   nationality: "Kenyan",
  //   status: "Full-Time",
  //   imgUrl: "/lolo.jpg",
  // },
  {
    name: "Mr. Ronald Muyonga",
    role: "Visiting Lecturer",
    qualification: "PhD Candidate Theology and Development (AIU)",
    nationality: "Kenyan",
    status: "Part-Time",
    imgUrl: "/ronald.jpg",
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
    imgUrl: "/justin.jpg",
  },
  {
    name: "Leonard Too",
    role: "Visiting Lecturer",
    qualification: "PhD (AIU)",
    nationality: "Kenyan",
    status: "Part-time",
    imgUrl: "/too.jpg",
  },
  {
    name: "Mr. Jacob Njoroge",
    role: "Registrar / Admin",
    qualification: "BA Theology (GLBC)",
    nationality: "Kenyan",
    status: "Full-Time",
    imgUrl: "/jacob.jpg",
  },
  {
    name: "Mr. Amos Sifuna",
    role: "Visiting Lecturer",
    qualification: "MA Mission (AIU)",
    nationality: "Kenyan",
    status: "Part-Time",
    imgUrl: "/amos.jpg",
  },
  {
    name: "Mr. Thomas Malande",
    role: "Visiting lecturer",
    qualification: "MDiv",
    nationality: "Kenyan",
    status: "Part-Time",
    imgUrl: "/thomas.jpg",
  },
  {
    name: "Joseph Odhiambo",
    role: "Visiting lecturer",
    qualification: "MA (Egerton University)",
    nationality: "Kenyan",
    status: "Full-Time",
    imgUrl: "/joseph.jpg",
  },
  {
    name: "Rev. Samuel Nyaranga",
    role: "Visiting lecturer",
    qualification: "-",
    nationality: "Kenyan",
    status: "Part-Time",
    imgUrl: "/samuel.jpg",
  },
  {
    name: "Mr. Kenneth Arinaitwe",
    role: "Visiting lecturer",
    qualification: "MA Missions (AIU)",
    nationality: "Ugandan",
    status: "Full-Time",
    imgUrl: "/kenneth.jpg",
  },
  {
    name: "Dr. Fabrice Katembo",
    role: "Visiting lecturer",
    qualification: "PHD World Christianity (AIU)",
    nationality: "DRC Congo",
    status: "Part-Time",
    imgUrl: "/fabrice.webp",
  },
  {
    name: "Mr. Benedict Ngayo",
    role: "Faculty",
    qualification: "MDiv BS Candidate (AIU)",
    nationality: "Kenyan",
    status: "Full-time",
    imgUrl: "/benedict.jpg",
  },
];
