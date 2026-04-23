import { url } from "inspector";

export const programs: {
  title: string;
  description: string;
  content: string;
  footer: string;
}[] = [
  {
    title: "Theology",
    description: "Comprehensive biblical and theological training",
    content:
      "Comprehensive biblical and theological training designed to equip students for pastoral ministry, missions, and Christian leadership.",
    footer: "Degree • Diploma • Certificate",
  },
  {
    title: "Education",
    description: "Training in Christian education principles",
    content:
      "Training in Christian education principles, curriculum development, and teaching methodologies.",
    footer: "Degree • Diploma • Certificate",
  },
  {
    title: "Missions",
    description: "Preparation for cross-cultural ministry",
    content:
      "Preparation for cross-cultural ministry through practical training and cultural immersion.",
    footer: "Degree • Diploma • Certificate",
  },
];

export const departments = [
  {
    title: "Theology",
    description:
      "Grounded in sound doctrine and faithful exposition of Scripture.",
    url: "/academics/#theology",
    content:
      "Comprehensive biblical and theological training designed to equip students for pastoral ministry, missions, and Christian leadership.",
    footer: "Degree • Diploma • Certificate",
  },
  {
    title: "Music",
    description: "Combining musical excellence with biblical conviction.",
    url: "/academics/#music",
    content:
      "Training in Christian music and worship leadership, including instrumental and vocal instruction.",
    footer: "Diploma • Certificate",
  },
  {
    title: "Short Courses",
    description: "Bridging faith and technical competence.",
    url: "/academics/short-courses",
    content:
      "Foundational music and computer training designed to equip students with essential digital skills for ministry and the workplace.",
    footer: "Certificate",
  },
];
// BHSBHSB

type Course = {
  code: string;
  name: string;
  hours: number;
};

type Semester = {
  semesterOne: Course[];
  semesterTwo: Course[];
};

export type TheoDegCourses = {
  yearOne: Semester;
  yearTwo: Semester;
  yearThree: Semester;
  yearFour: Semester;
};

export type TheoDipCourses = {
  yearOne: Semester;
  yearTwo: Semester;
};

export type TheoCertCourses = {
  yearOne: Semester;
};

export const theoDegCourses: TheoDegCourses = {
  yearOne: {
    semesterOne: [
      { code: "BIB 101", name: "Pentateuch", hours: 3 },
      { code: "CC 103", name: "Introduction to research", hours: 3 },
      {
        code: "CC 101",
        name: "Introduction to Computer Studies",
        hours: 3,
      },
      { code: "CC 102", name: "English Grammar", hours: 3 },
      { code: "BIB 103", name: "Bibliology", hours: 3 },
      { code: "BIB 102", name: "Hermeneutics", hours: 3 },
    ],
    semesterTwo: [
      { code: "TH 105", name: "Comparative study of Religions", hours: 3 },
      { code: "MIN 101", name: "Evangelism & Discipleship", hours: 3 },
      { code: "CC 105", name: "Introduction to Sociology", hours: 3 },
      { code: "MIN 103", name: "Spiritual Life Formation", hours: 3 },
      { code: "CC 104", name: "Communication skills", hours: 3 },
      { code: "TH 103", name: "Theology Proper", hours: 3 },
    ],
  },
  yearTwo: {
    semesterOne: [
      { code: "BIB 202", name: "The Gospels", hours: 3 },
      { code: "TH 204", name: "Anthropology & Hamartiology", hours: 3 },
      { code: "BIB 203", name: "OT Historical Books", hours: 3 },
      { code: "CC 203", name: "Introduction to psychology", hours: 3 },
      { code: "MIN 202", name: "Marriage and Family", hours: 3 },
      { code: "CHS 201", name: "Church History 1", hours: 3 },
      {
        code: "TH 203",
        name: "African Traditional Religion(ATR)",
        hours: 3,
      },
    ],
    semesterTwo: [
      { code: "BIB 206", name: "ACTS", hours: 3 },
      { code: "TH 205", name: "Christology", hours: 3 },
      { code: "BIB 204", name: "Psalms and Wisdom literature", hours: 3 },
      { code: "BIB 205", name: "Pauline Epistles", hours: 3 },
      { code: "MIN 203", name: "Homiletics", hours: 3 },
      { code: "CHS 202", name: "Church History 2", hours: 3 },
      { code: "BIB 201", name: "Introduction to Greek/Hebrew", hours: 3 },
    ],
  },
  yearThree: {
    semesterOne: [
      { code: "TH 302", name: "Pneumatology", hours: 3 },
      { code: "MIN 303", name: "Missiology", hours: 3 },
      { code: "BIB 302", name: "Non-Pauline Epistles", hours: 3 },
      { code: "BIB 301", name: "Gal & Rom", hours: 3 },
      { code: "MIN 301", name: "Pastoral Ministry", hours: 3 },
      { code: "BIB 303", name: "Major Prophets", hours: 3 },
      { code: "TH 301", name: "Soteriology", hours: 3 },
    ],
    semesterTwo: [
      { code: "TH 305", name: "Ecclesiology", hours: 3 },
      {
        code: "CC 303",
        name: "Environmental development and stewardship",
        hours: 3,
      },
      { code: "CC 301", name: "Leadership Development", hours: 3 },
      { code: "BIB 305", name: "Minor Prophets", hours: 3 },
      { code: "CHS 301", name: "African Church History", hours: 3 },
      { code: "TH 304", name: "Biblical theology", hours: 3 },
      { code: "MIN 302", name: "Pastoral Counselling", hours: 3 },
    ],
  },
  yearFour: {
    semesterOne: [
      { code: "TH 403", name: "African Christian Theology", hours: 3 },
      { code: "CC 402", name: "Church Administration", hours: 3 },
      { code: "TH 401", name: "Eschatology", hours: 3 },
      { code: "BIB 402", name: "Expository Preaching", hours: 3 },
      { code: "MIN 401", name: "Christian Education", hours: 3 },
    ],
    semesterTwo: [
      { code: "MIN 403", name: "Apologetics", hours: 3 },
      { code: "MIN 402", name: "Practicum", hours: 3 },
    ],
  },
};

export const theoDipCourses: TheoDipCourses = {
  yearOne: {
    semesterOne: [
      { code: "DCC 102", name: "College English Writing", hours: 3 },
      { code: "DCC 103", name: "Introduction to Research", hours: 3 },
      { code: "DCC 101", name: "Introduction to Computer Studies", hours: 3 },
      { code: "DBIB 101", name: "OT Survey", hours: 3 },
      { code: "DBIB 102", name: "Bible Interpretation", hours: 3 },
      { code: "DMIN 101", name: "Evangelism and Discipleship", hours: 3 },
    ],
    semesterTwo: [
      { code: "DBIB 103", name: "Preaching Skills", hours: 3 },
      { code: "DTH 101", name: "Theology Survey 1", hours: 3 },
      { code: "DIM 102", name: "Church Administration", hours: 3 },
      {
        code: "DCC 104",
        name: "Introduction to communication skills",
        hours: 3,
      },
      { code: "DBIB 104", name: "New Testament Survey", hours: 3 },
      { code: "DMIN 103", name: "Foundations for life and Mission", hours: 3 },
    ],
  },
  yearTwo: {
    semesterOne: [
      { code: "DCHS 201", name: "Church History 1", hours: 3 },
      { code: "DTH 201", name: "Theology Survey 11", hours: 3 },
      { code: "DTH 202", name: "African Traditional Religions", hours: 3 },
      { code: "DMIN 201", name: "Pastoral Ministry", hours: 3 },
      { code: "DMIN", name: "Marriage and Family", hours: 3 },
      { code: "DTH 203", name: "African Christian Theology", hours: 3 },
    ],
    semesterTwo: [
      { code: "DCHS 202", name: "Church History 11", hours: 3 },
      { code: "DMIN 203", name: "Practicum", hours: 3 },
      { code: "DBIB 201", name: "Expository Preaching", hours: 3 },
      { code: "DCC 201", name: "Leadership Development", hours: 3 },
      { code: "DTH 205", name: "Comparative Study of Religions", hours: 3 },
      { code: "DTH 204", name: "Introduction to Biblical Theology", hours: 3 },
    ],
  },
};

export const theoCertCourses: TheoCertCourses = {
  yearOne: {
    semesterOne: [
      { code: "CTH 101", name: "BIBLICAL THEOLOGY AND THE CHURCH", hours: 3 },
      { code: "CCC 102", name: "LEADERSHIP DEVELOPMENT", hours: 3 },
      {
        code: "CED 101",
        name: "INTRODUCTION TO COMMUNICATION SKILLS",
        hours: 3,
      },
      { code: "CTH 102", name: "THEOLOGY SURVEY 1", hours: 3 },
      { code: "CBIB 201", name: "BASIC BIBLE INTERPRETATION", hours: 3 },
      { code: "CMIN 201", name: "CHRISTIAN WORSHIP", hours: 3 },
    ],
    semesterTwo: [
      { code: "CMIN 202", name: "PASTORAL MINISTRY", hours: 3 },
      { code: "CBIB 202", name: "OLD TESTAMENT SURVEY", hours: 3 },
      { code: "CTH 301", name: "THEOLOGY SURVEY 2", hours: 3 },
      {
        code: "CMIN 301",
        name: "CHARACTER AND SPIRITUAL LIFE FORMATION",
        hours: 3,
      },
      { code: "CBIB 301", name: "NEW TESTAMENT SURVEY", hours: 3 },
      { code: "CMIN 302", name: "PRACTICUM", hours: 3 },
    ],
  },
};
