import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { theoCertCourses } from "@/lib/programs";
import CTA from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import FeeTheo from "@/components/feeTheo";

const Page = () => {
  const y1s1 = theoCertCourses.yearOne.semesterOne;
  const y1s2 = theoCertCourses.yearOne.semesterTwo;

  return (
    <div className="min-h-screen">
      <div className="relative flex py-8 md:py-16 px-4 min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]  justify-center items-center w-full">
        <Image
          src="/bible2.jpg"
          alt="President"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-glbc-secondary/50 flex items-center justify-center flex-col gap-4">
          {" "}
        </div>

        <div className="relative text-white text-center flex flex-col gap-8 md:flex-row items-center justify-between w-full max-w-7xl mx-auto mt-12">
          <div className=" items-start flex flex-col gap-4 lg:border-l-4 border-glbc-accent pl-4">
            <h1 className=" text-left text-2xl md:text-4xl font-lora font-bold mb-4">
              Certificate of Bible and Theology
            </h1>
            <h2 className="text-lg md:text-xl font-lora md:max-w-3xl text-left ">
              The Certificate of Bible and Theology program at GLBC is designed
              to provide students with a foundational understanding of the
              Bible, theology, and Christian ministry.
              <span className="hidden md:inline">
                {" "}
                This program equips students with the knowledge and skills
                necessary for effective ministry and service in various
                contexts.
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-1/5 md:w-1/3 w-[80%]">
            <div className=" text-center bg-white/90 p-4 rounded-lg shadow-lg ">
              <h1 className="font-lora font-bold text-2xl text-gray-500">
                Duration
              </h1>
              <p className="text-gray-950">1 Academic Year</p>
            </div>
            <div className=" text-center bg-glbc-accent/90 p-4 rounded-lg shadow-lg ">
              <h1 className="font-lora font-bold text-2xl text-white">
                <a
                  href="/apply"
                  className="text-white hover:text-glbc-secondary w-full block transition-colors duration-300"
                >
                  Apply Now!
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-lora text-2xl text-gray-700 font-bold max-w-6xl mx-auto px-4 mt-12">
        Course highlights
      </h1>
      <div className=" flex max-w-7xl w-full mx-auto py-12 gap-8 flex-col lg:flex-row justify-between items-start px-4">
        <div className=" flex flex-col lg:max-w-1/4 md:flex-row flex-wrap  gap-4 ">
          <div className="p-4 bg-white rounded-md w-full md:max-w-75 lg:w-full">
            <h1>Pastoral Ministry</h1>
            <p className="text-gray-500">
              Gain practical skills and theological insights for effective
              pastoral leadership, counseling, and church administration.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md md:max-w-75 lg:w-full">
            <h1>Old Testament Survey</h1>
            <p className="text-gray-500">
              Explore the historical, literary, and theological aspects of the
              Old Testament, gaining a comprehensive understanding of its
              message and significance for Christian faith and practice.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md md:max-w-75 lg:w-full">
            <h1>New Testament Survey</h1>
            <p className="text-gray-500">
              Study the historical, literary, and theological aspects of the New
              Testament, gaining a comprehensive understanding of its message
              and significance for Christian faith and practice.
            </p>
          </div>
        </div>
        <div className="w-full lg:px-4">
          <div className="flex flex-col md:flex-row gap-8  pb-16 ">
            <div className="md:w-2/3">
              <h1 className="font-lora text-2xl md:text-3xl font-bold text-glbc-secondary/80 mb-4 ">
                Program Overview
              </h1>
              <p>
                {" "}
                The Certificate of Bible and Theology program at GLBC is
                designed to provide students with a foundational understanding
                of the Bible, theology, and Christian ministry. This program
                equips students with the knowledge and skills necessary for
                effective ministry and service in various contexts.{" "}
              </p>
            </div>
            <div className="hidden md:flex md:flex-col  gap-4 pb-8">
              <div>
                <h1 className="text-4xl font-extrabold text-glbc-secondary">
                  36
                </h1>
                <p className="font-medium text-gray-500">Credit Hours</p>
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-glbc-secondary">
                  1
                </h1>
                <p className="font-medium text-gray-500">Academic Year</p>
              </div>
            </div>
          </div>
          <h1 className="text-center max-w-lg mb-4 font-bold">
            Course Catalogue
          </h1>
          <Accordion
            type="single"
            collapsible
            // defaultValue="YR1"
            className="max-w-105 xl:max-w-none w-full mx-auto"
          >
            <AccordionItem value="YR1">
              <AccordionTrigger className="cursor-pointer">
                YEAR ONE
              </AccordionTrigger>
              <AccordionContent className="xl:flex gap-8">
                <div className="overflow-x-auto">
                  <Table className="max-w-105">
                    <TableCaption className="caption-top">
                      Semester One
                    </TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-25">Code</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Hours</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {y1s1.map((course) => (
                        <TableRow key={course.code}>
                          <TableCell className="font-medium">
                            {course.code}
                          </TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell className="text-right">
                            {course.hours}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="overflow-x-auto">
                  <Table className="max-w-105">
                    <TableCaption className="caption-top">
                      Semester Two
                    </TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-25">Code</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Hours</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {y1s2.map((course) => (
                        <TableRow key={course.code}>
                          <TableCell className="font-medium">
                            {course.code}
                          </TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell className="text-right">
                            {course.hours}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="py-8">
            <h1 className="font-bold text-xl font-lora">Modes of study</h1>
            <ul className="list-disc pl-5 leading-8 ">
              <li>
                Full-time: Attend classes on campus or on our satellite centers
                and complete coursework within the standard academic calendar.
              </li>
            </ul>
          </div>
          <div className="pb-8">
            <h1 className="font-bold text-xl font-lora py-4">
              Admission requirements
            </h1>
            <h2 className="  font-bold">Minimum academic qualifications</h2>
            <ol className="list-decimal pl-5">
              <li>
                A minimum of D minus in the Kenya Certificate of Secondary
                Education (KCSE).
              </li>
            </ol>
            <h2 className="  font-bold pt-4 ">Other Requirements</h2>
            <ol className="list-decimal pl-5">
              <li>Statement of faith and personal testimony</li>
              <li>National ID/ Passport.</li>
              <li>Certified copies of the original academic certificates</li>
              <li>Duly filled application forms</li>
              <li>Pastor’s /Spiritual Leader’s recommendation letter</li>
              <li>Dully filled medical assessment form</li>
              <li>A non-refundable application fee of Kshs 1,000</li>
            </ol>
          </div>
          <div>
            <h1 className="font-bold">Career opportunities</h1>
            <ul className="list-disc pl-5">
              <li>Pastoral ministry</li>
              <li>Missionary work</li>
              <li>Christian education</li>
            </ul>
          </div>
          <FeeTheo />
        </div>
      </div>
      <div className="relative px-2 md:px-8 mx-auto py-8 md:py-16  gap-4 justify-center text-white">
        <Image
          src="/faculty3.jpg"
          alt="President"
          fill
          // width={1200}
          // height={800}
          className="object-cover w-full h-auto -z-10"
        />
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="max-w-6xl mx-auto justify-center items-center flex flex-col gap-8">
          <h1 className="font-lora font-bold text-xl md:text-2xl ">
            Learn from Trusted Faculty
          </h1>
          <p className="max-w-2xl py-8 text-center ">
            Meet our dedicated faculty members who are passionate about teaching
            and mentoring students in the field of Bible and Theology. Our
            faculty members bring a wealth of knowledge and experience to the
            classroom, providing students with a rich and engaging learning
            environment.
          </p>
          <Button
            variant="outline"
            className="w-full md:w-auto cursor-pointer mt-4 text-black"
          >
            <a href="/about/faculty">Meet the Faculty</a>
          </Button>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Page;
