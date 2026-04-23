import { Button } from "@/components/ui/button";
import Link from "next/link";
import { departments } from "@/lib/programs";
import { BookOpen, GraduationCap, Heart, Quote, Users } from "lucide-react";
import DepartmentCard from "@/components/DepartmentCard";
import Image from "next/image";
import CTA from "@/components/CallToAction";

export default function Home() {
  return (
    <div>
      <div className="relative flex min-h-[70vh] items-center justify-center font-sans">
        <div
          className="absolute z-0 inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="  z-10 w-full flex flex-col items-center justify-center gap-8 pt-16 px-2 md:px-4">
          <div className=" flex flex-col gap-4 text-white font-lora">
            <h1 className=" text-2xl md:text-4xl font-black text-center">
              Transformed Leaders. Transforming the World
            </h1>
            <h2 className="font-semibold text-center">
              Biblical training for faithful and effective gospel ministry
            </h2>
          </div>
          <div className=" z-10 flex gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className=" cursor-pointer bg-glbc-accent text-glbc-primary outline-none border-none"
            >
              <Link href="/academics">Explore Programs</Link>
            </Button>

            <Button variant="outline" size="lg" className=" cursor-pointer ">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8 mx-auto rounded-lg w-full xl:w-2/3">
        <h2 className="text-sm">OUR FOUNDATION</h2>
        <p className="py-2 text-md font-lora lg:text-3xl">
          Grace Life Bible College (GLBC) is a Christ-centered institution,
          united in the calling of Jesus Christ and committed to fulfilling His
          purposes through sound, authentic theological and technical training.
          We affirm the sovereignty of God in all matters of faith and conduct.
        </p>

        <Link
          href="/about/statement-of-faith"
          className="text-primary border-b border-gray-400 hover:border-gray-900 text-sm"
        >
          READ OUR DOCRINAL STATEMENT
        </Link>
      </div>
      <div className=" relative mt-8 flex flex-col justify-center">
        <h1 className="text-sm md:text-md font-semibold text-center text-glbc-accent">
          ACADEMIC PROGRAMS
        </h1>
        <div className="relative mx-auto">
          <h2 className="  text-2xl md:text-3xl font-lora font-bold text-center">
            Programs We Offer
          </h2>
          <div className="absolute mt-2 w-16 h-0.5 bg-glbc-accent"></div>
        </div>
        <div className="flex flex-wrap justify-start lg:justify-center mx-auto mt-8 w-full max-w-6xl px-4 gap-8">
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.title}
              title={dept.title}
              description={dept.description}
              url={dept.url}
              content={dept.content}
              footer={dept.footer}
            />
          ))}
        </div>
      </div>
      <div className=" bg-glbc-secondary  text-white my-16 flex justify-center p-2 md:p-8 ">
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Message from the President
            </h2>

            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
              {/* Message */}
              <div className="md:w-1/2">
                <Quote className="text-glbc-accent mb-4" size={32} />
                <p className="text-lg leading-relaxed text-gray-50 italic  pl-4">
                  Welcome to Grace Life Bible College in Webuye, where we have
                  been training pastors, missionaries, church planters, Bible
                  teachers, and lay leaders for over 8 years. Our curriculum is
                  firmly rooted in the inerrant Word of God, and our faculty,
                  comprised of pastor-scholars, embodies Bible-centered,
                  missional, integrity, servitude, and excellence values. <br />{" "}
                  <span className="underline hover:cursor-pointer">
                    <a href="/about/president">Read full statement</a>
                  </span>
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold">
                    Bishop Elyves Situma
                  </h3>
                  <p className="text-gray-100">
                    President, Grace Life Bible College
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center ">
                <Image
                  src="/Situma.jpg"
                  alt="Bishop Elyves Situma"
                  width={400}
                  height={400}
                  className="shadow-lg object-cover max-h-105"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <h1 className="text-center font-serif font-bold text-2xl">
          Why Study at GLBC?
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-4 md:px-8 xl:w-2/3 mx-auto mt-8 ">
          {" "}
          <div className="p-6 rounded-xl shadow-md text-center bg-white min-w-62.5">
            <BookOpen className="mx-auto text-glbc-accent mb-4" size={40} />

            <h3 className="font-semibold text-lg mb-2">Biblical Foundation</h3>

            <p className="text-gray-600">
              Our curriculum is grounded in the inerrant Word of God.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md text-center bg-white min-w-62.5 ">
            <a href="/about/faculty">
              <GraduationCap
                className="mx-auto text-glbc-accent mb-4"
                size={40}
              />

              <h3 className="font-semibold text-lg mb-2">
                Experienced Faculty
              </h3>

              <p className="text-gray-600">
                Learn from pastor-scholars with real ministry experience.{" "}
              </p>
            </a>
          </div>
          <div className="p-6 rounded-xl shadow-md text-center bg-white min-w-62.5">
            <Users className="mx-auto text-glbc-accent mb-4" size={40} />

            <h3 className="font-semibold text-lg mb-2">Ministry Focus</h3>

            <p className="text-gray-600">
              Training pastors, missionaries, and church leaders for
              ministry.{" "}
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md text-center bg-white min-w-62.5">
            <Heart className="mx-auto text-glbc-accent mb-4" size={40} />

            <h3 className="font-semibold text-lg mb-2">Spiritual Growth</h3>

            <p className="text-gray-600">
              Academic learning combined with spiritual formation.{" "}
            </p>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
