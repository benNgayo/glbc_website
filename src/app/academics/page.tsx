import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookCheck, BookOpen, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import CTA from "@/components/CallToAction";

const Academics = () => {
  return (
    <div className="">
      <div className="relative flex py-8 md:py-16 px-4 min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]   justify-center items-center">
        <Image
          src="/faculty.jpeg"
          alt="President"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-4">
          {" "}
        </div>

        <div className="relative text-white text-center">
          <h1 className="text-2xl md:text-3xl font-lora font-bold mb-4">
            ACADEMICS CATALOGUE
          </h1>
          <h2 className="text-lg md:text-xl font-lora md:max-w-3xl">
            We are trained to educate Christian leaders through Bible based
            education, contextually relevant programs and research.{" "}
          </h2>
        </div>
      </div>
      <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto ">
        <h1
          className="text-2xl md:text-3xl font-lora font-bold mb-4 scroll-m-48 text-center "
          id="theology"
        >
          Bible and Theology Programs
        </h1>
        <div className="flex flex-wrap gap-8 justify-center md:justify-start md:mb-16">
          <Card className="w-full max-w-xs">
            <CardHeader>
              <GraduationCap className="text-glbc-accent" size={36} />
              <CardTitle className=" text-xl font-lora font-extrabold">
                Bachelors of Bible and Theology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                An undergraduate program designed to provide students with a
                comprehensive and in-depth understanding of the Bible, theology,
                and ministry, equipping them for effective Christian leadership
                and service.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Badge variant="outline">4 yrs</Badge>
              <Link
                href="/academics/bachelors-bible-theology"
                className="ml-auto text-sm text-glbc-primary hover:underline font-bold"
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-xs">
            <CardHeader>
              <BookCheck className="text-glbc-accent" size={36} />
              <CardTitle className=" text-xl font-lora font-extrabold">
                Diploma of Bible and Theology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A foundational program aimed at giving students a solid
                understanding of the Bible, theology, and practical ministry
                skills for active involvement in church and ministry contexts.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Badge variant="outline">2 yrs</Badge>
              <Link
                href="/academics/diploma-bible-theology"
                className="ml-auto text-sm text-glbc-primary hover:underline font-bold"
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-xs">
            <CardHeader>
              <BookOpen className="text-glbc-accent" size={36} />
              <CardTitle className=" text-xl font-lora font-extrabold">
                Certificate of Bible and Theology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                An introductory program designed to equip students with basic
                biblical knowledge and essential ministry principles for
                personal growth and service in the local church.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Badge variant="outline">1 yr</Badge>
              <Link
                href="/academics/certificate-bible-theology"
                className="ml-auto text-sm text-glbc-primary hover:underline font-bold"
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div>
          <h1
            className="text-2xl md:text-3xl font-lora font-bold mb-4 mt-8 scroll-m-48 text-center "
            id="music"
          >
            Music Programs
          </h1>

          <div className="flex flex-col md:flex-row w-full max-w-6xl py-8 px-2 md:px-4 gap-8  ">
            <div className="lg:border-l-4 border-glbc-secondary p-4 w-full md:w-1/2 flex flex-col gap-4 ">
              <Image
                src="/music.jpg"
                alt="Music Department"
                width={400}
                height={300}
                className="object-cover rounded-lg "
              />
              {/* <h1 className="font-lora text-2xl font-bold text-gray-800 ">
                Music Department
              </h1> */}
              <p>
                Explore our music programs designed to nurture artistic talent
                and spiritual growth.
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <div className=" flex flex-col lg:flex-row justify-between gap-4 items-center md:items-start bg-white p-4 rounded-md ">
                <Image
                  src="/music-studio.jpg"
                  alt="Music Studio"
                  width={200}
                  height={200}
                  className="object-cover rounded-lg w-full lg:w-1/4"
                />

                <div>
                  <h1 className="font-lora text-2xl font-bold text-glbc-primary/80 ">
                    Diploma in Music
                  </h1>
                  <p className="py-2">
                    Gain comprehensive knowledge and skills in music theory,
                    performance, and education.
                  </p>
                  <Badge variant="outline">2 yrs</Badge>
                </div>
                <Button
                  variant="outline"
                  className="lg:ml-auto lg:self-start w-full md:w-auto"
                >
                  <Link
                    href="/academics/diploma-music"
                    className="text-sm text-glbc-primary font-bold"
                  >
                    View Details
                  </Link>
                </Button>
              </div>
              <div className=" flex flex-col lg:flex-row justify-between gap-4 items-center md:items-start bg-white p-4 rounded-md w-full ">
                <Image
                  src="/voice.jpg"
                  alt="Microphone"
                  width={200}
                  height={200}
                  className="object-cover rounded-lg w-full lg:w-1/4"
                />

                <div>
                  <h1 className="font-lora text-2xl font-bold text-glbc-primary/80 ">
                    Certificate in Music
                  </h1>
                  <p className="py-2">
                    A foundational program designed to equip students with basic
                    musical knowledge and other essential skills.
                  </p>
                  <Badge variant="outline">1 yr</Badge>
                </div>
                <Button
                  variant="outline"
                  className="lg:ml-auto lg:self-start w-full md:w-auto"
                >
                  <Link
                    href="/academics/certificate-music"
                    className="text-sm text-glbc-primary font-bold"
                  >
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-lora text-2xl font-bold text-center ">
              Short Courses
            </h1>
            <p className="text-center p-4">
              <a
                href="/academics/short-courses"
                className="text-glbc-primary hover:underline italic font-bold "
              >
                Explore
              </a>{" "}
              our variety of short courses designed to enhance your musical and
              computer skills.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-cente items-center flex-col mt-8 md:my-16 md:py-24 gap-4 border border-gray-300 max-w-6xl mx-auto  p-8 rounded-lg">
        <h1 className="text-3xl font-serif font-bold">Ready to Apply?</h1>
        <p>
          Take the next step in your calling. Fill out the application form and
          begin your journey at GLBC.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="lg" className=" cursor-pointer ">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Academics;
