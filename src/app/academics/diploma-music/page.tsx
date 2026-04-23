import Image from "next/image";

import CTA from "@/components/CallToAction";
import FeeMusic from "@/components/feeMusic";
const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="relative flex py-8 md:py-16 px-4 min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]  justify-center items-center w-full">
        <Image src="/music.jpg" alt="President" fill className="object-cover" />
        <div className="absolute inset-0 bg-glbc-secondary/50 flex items-center justify-center flex-col gap-4">
          {" "}
        </div>

        <div className="relative text-white text-center flex flex-col gap-8 md:flex-row items-center justify-between w-full max-w-7xl mx-auto mt-12">
          <div className=" items-start flex flex-col gap-4 lg:border-l-4 border-glbc-accent pl-4">
            <h1 className=" text-left text-2xl md:text-4xl font-lora font-bold mb-4">
              Diploma in Music
            </h1>
            <h2 className="text-lg md:text-xl font-lora md:max-w-3xl text-left ">
              The Diploma in Music program at GLBC is designed to provide
              students with comprehensive music skills and knowledge, preparing
              them for further studies in music or for practical application in
              ministry and worship settings.{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-1/5 md:w-1/3 w-[80%]">
            <div className=" text-center bg-white/90 p-4 rounded-lg shadow-lg ">
              <h1 className="font-lora font-bold text-2xl text-gray-500">
                Duration
              </h1>
              <p className="text-gray-950">2 Academic Years</p>
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
            <h1>Music Theory</h1>
            <p className="text-gray-500">
              Learn the fundamentals of music theory, including harmony, melody,
              and composition.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md md:max-w-75 lg:w-full">
            <h1>Practical Music Skills</h1>
            <p className="text-gray-500">
              Develop hands-on musical abilities through performance,
              composition, and ensemble playing.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md md:max-w-75 lg:w-full">
            <h1>Music History</h1>
            <p className="text-gray-500">
              Explore the rich history of music across different cultures and
              time periods.
            </p>
          </div>
          <div className="p-4 bg-white rounded-md md:max-w-75 lg:w-full">
            <h1>Audio Technology</h1>
            <p className="text-gray-500">
              Learn the basics of audio production and technology to enhance
              your musical performances and recordings.
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
                The Diploma in Music program at GLBC is designed to provide
                students with comprehensive music skills and knowledge,
                preparing them for further studies in music or for practical
                application in ministry and worship settings .{" "}
              </p>
            </div>
            <div className="flex md:flex-col  gap-4 pb-8">
              <div>
                {/* <h1 className="text-4xl font-extrabold text-glbc-secondary">
                  141
                </h1>
                <p className="font-medium text-gray-500">Credit Hours</p> */}
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-glbc-secondary">
                  2
                </h1>
                <p className="font-medium text-gray-500">Academic Years</p>
              </div>
            </div>
          </div>

          <div className="py-8">
            <h1 className="font-bold text-xl font-lora">Modes of study</h1>
            <ul className="list-disc pl-5 leading-8 ">
              <li>
                Full-time: Attend classes on campus and complete coursework
                within the standard academic calendar.
              </li>
            </ul>
          </div>
          <div className="pb-8">
            <h1 className="font-bold text-xl font-lora py-4">
              Admission requirements
            </h1>
            <h2 className="  font-bold">Minimum academic qualifications</h2>
            <ol className="list-decimal pl-5">
              <li>KCSE C- (Minus) or its equivalent.</li>
            </ol>
            <h2 className="  font-bold pt-4 ">Other Requirements</h2>
            <ol className="list-decimal pl-5">
              <li>National ID/ Passport.</li>
              <li>Certified copies of the original academic certificates</li>
              <li>Duly filled application forms</li>
              <li>Dully filled medical assessment form</li>
              <li>A non-refundable application fee of Kshs 2,500</li>
            </ol>
          </div>
          <div>
            <h1 className="font-bold">Career Opportunities</h1>
            <ul className="list-disc pl-5">
              <li>Music Teacher (Beginner Level)</li>
              <li>Worship Leader (Entry Level)</li>
              <li>Music Ministry Assistant</li>
              <li>Audio Technician (Entry Level)</li>
            </ul>
          </div>

          <FeeMusic />
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default Page;
