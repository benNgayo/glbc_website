import CTA from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpenText,
  Globe,
  HandHeart,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="relative mx-auto mb-8 h-100 ">
        <Image
          src="/about-hero.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-4">
          <h1 className="text-white text-3xl font-serif font-bold text-center">
            About Grace Life Bible College
          </h1>
          <h2 className="text-white text-xl font-serif text-center">
            Training faithful servants of Christ
          </h2>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center  ">
        <h1 className="text-2xl font-serif font-bold text-glbc-secondary text-shadow-glbc-secondary">
          About GLBC
        </h1>
        <div className="flex flex-col-reverse md:flex md:flex-row max-w-6xl gap-4 my-4 md:my-8 p-4">
          <div className="md:w-1/2 md:text-lg ">
            <p>
              Grace Life Bible College (GLBC) is a Christian institution
              committed to fulfilling the calling of Jesus Christ through the
              provision of quality, market-driven, and biblically sound
              theological and technical training. The college acknowledges the
              sovereignty of God in all matters of faith and conduct and upholds
              the Holy Scriptures as the ultimate authority guiding its beliefs,
              teaching, and governance. As a Bible-believing and practicing
              institution, GLBC ensures that all its policies and decisions
              remain consistent with the teachings of Scripture.
            </p>
            <br />
            <p>
              Guided by its vision to raise Christian leaders for a transformed
              church and society, GLBC seeks to provide education that is both
              academically excellent and spiritually formative. The institution
              is dedicated to modeling godly character, nurturing a lifelong
              passion for Christ, and equipping students to serve God
              faithfully. Grounded in core values such as being Bible-centered,
              missional, committed to integrity, devoted to servanthood, and
              pursuing excellence, GLBC aims to prepare leaders who will
              faithfully proclaim the gospel and positively impact the church
              and society for the glory of God.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/class1.jpeg"
              alt="Our Mission"
              width={600}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-glbc-secondary py-8 md:py-18 " id="vision">
        <div className=" md:flex  justify-center gap-8 mx-auto max-w-6xl pt-4 md:pt-8">
          <div className="flex flex-col  gap-4 mb-8 md:mb-0 text-white p-6 rounded-lg w-full md:w-1/2 px-8">
            <h1 className="text-2xl md:text-3xl font-lora font-bold">
              Our Mission
            </h1>
            <p className=" text-lg  ">
              To provide quality, biblical based education, model godly
              character and instill lifelong passion for Christ.
            </p>
          </div>
          <div className="flex flex-col  gap-4 mb-8 md:mb-0 text-white p-6 rounded-lg w-full md:w-1/2 px-8">
            <h1 className="text-2xl md:text-3xl font-lora font-bold ">
              Our Vision
            </h1>
            <p className="text-lg">
              To raise Christian leaders for a transformed church and society.
            </p>
          </div>
        </div>
        <div className=" md:flex  justify-center gap-8 mx-auto max-w-6xl pt-4 md:pt-8">
          <div className="flex flex-col  gap-4 mb-8 md:mb-0 text-white p-6 rounded-lg w-full md:w-1/2 px-8">
            <h1 className="text-2xl md:text-3xl font-lora font-bold">
              Our Doctrinal Statement
            </h1>
            <p className=" text-lg  ">
              Our faith and teaching are grounded in the authority of the Holy
              Scriptures. Read{" "}
              <a
                href="about/statement-of-faith"
                className="text-glbc-accent italic underline hover:underline"
              >
                our doctrinal statement{" "}
              </a>
              to learn the biblical beliefs that shape Grace Life Bible College.
            </p>
          </div>
          <div className="flex flex-col  gap-4 mb-8 md:mb-0 text-white p-6 rounded-lg w-full md:w-1/2 px-8">
            <h1 className="text-2xl md:text-3xl font-lora font-bold ">
              Our Motto
            </h1>
            <p className="text-lg">Godly leaders, transformed society. </p>
          </div>
        </div>
      </div>

      <div className="py-8 md:py-18 mx-auto ">
        <h1 className="text-2xl md:text-3xl font-lora font-bold text-center mb-8">
          Our Core Values
        </h1>

        <div className=" grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-4 md:px-8 xl:w-2/3 mx-auto mt-8">
          <div className=" max-w-xs border border-gray-300 rounded-lg p-6 ">
            <BookOpenText
              className="mx-auto text-glbc-secondary mb-4"
              size={40}
            />
            <h1 className="text-center font-serif font-bold text-2xl">
              Bible centered
            </h1>
            <p className="text-lg text-center">
              GLBC shall submit to the Holy Scriptures in all matters of faith,
              training and conduct
            </p>
          </div>
          <div className=" max-w-xs border border-gray-300 rounded-lg p-6">
            <Globe className="mx-auto text-glbc-secondary mb-4" size={40} />
            <h1 className="text-center font-serif font-bold text-2xl">
              Missional
            </h1>
            <p className="text-lg text-center">
              GLBC shall champion the great commission by actively evangelizing
              and preparing God’s servants to share the transformational gospel
              of Christ to the nations.
            </p>
          </div>
          <div className=" max-w-xs border border-gray-300 rounded-lg p-6">
            <ShieldCheck
              className="mx-auto text-glbc-secondary mb-4"
              size={40}
            />
            <h1 className="text-center font-serif font-bold text-2xl">
              Integrity
            </h1>
            <p className="text-lg text-center">
              We shall endeavor to uphold integrity in all matters including but
              not limited to our lifestyles, finances and management of college
              affairs.
            </p>
          </div>
          <div className=" max-w-xs border border-gray-300 rounded-lg p-6">
            <HandHeart className="mx-auto text-glbc-secondary mb-4" size={40} />
            <h1 className="text-center font-serif font-bold text-2xl">
              Servitude
            </h1>
            <p className="text-lg text-center">
              GBLC believes in service to God where all things done by all
              stakeholders shall be done with the conviction that it is service
              to God.
            </p>
          </div>
          <div className=" max-w-xs border border-gray-300 rounded-lg p-6">
            <Award className="mx-auto text-glbc-secondary mb-4" size={40} />
            <h1 className="text-center font-serif font-bold text-2xl">
              Excellence
            </h1>
            <p className="text-lg text-center">
              GLBC espouses excellence as a non-negotiable value and members
              endeavor to do all things with excellence that befits God’s
              servants.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-[url('/bible.jpg')] bg-cover bg-center relative py-16 md:py-24 text-white">
        <div className="inset-0 bg-glbc-secondary/80 absolute"></div>
        <div className="text-white relative p-4  md:max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
          <h1 className=" md:text-3xl font-lora text-2xl font-bold ">
            Our Philosophy
          </h1>
          <p className="font-bold">Doing everything for the glory of God</p>
          <p className="italic text-center  ">
            And whatsoever ye do in word or deed, do all in the name of the Lord
            Jesus, giving thanks to God and the Father by him. <br /> Colossians
            3:17
          </p>
        </div>
      </div>

      <div className=" py-24 md:py-24 max-w-6xl mx-auto  ">
        <h1 className="text-2xl md:text-3xl font-lora font-bold text-center mb-8">
          Our History
        </h1>
        <div className="flex justify-center gap-8 flex-col-reverse md:flex-row p-4 items-center">
          <div className="w-full md:w-1/2">
            <p className=" md:text-[20px] md:leading-loose ">
              Grace Life Bible College has a rich history that dates back to
              before 2015. The founder and president of the institution Pastor
              Situma Wanjala was involved in extensive regional evangelistic
              campaigns and training under the Evangelism Explosion (EE)
              program. The program left many pastors in the larger East African
              region, including Kenya, Uganda, South Sudan, and Tanzania,
              yearning for more <br />
              <a
                href="/about/history"
                className="text-red-500 italic hover:underline"
              >
                View Our Story
              </a>{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/contact.jpg"
              alt="Our History"
              height={500}
              width={600}
              className="object-cover rounded-lg mt-4"
            />
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default About;
