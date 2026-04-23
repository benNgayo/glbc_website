import { FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-glbc-secondary mt-16 ">
      <div className=" flex-col-reverse justify-center flex md:flex-row max-w-6xl mx-auto py-8 px-4 text-center text-gray-300">
        <div className="text-left md:w-1/3  pr-8 mr-8 mt-8 md:mt-0">
          <h1 className="font-bold text-glbc-accent ">About Us</h1>
          <ul className="flex flex-col  gap-6 mt-4">
            <li className="hover:underline">
              <a href="/about/history">Our History</a>
            </li>
            <li className="hover:underline">
              <a href="/about/#vision">Vision & Mission</a>
            </li>
            <li className="hover:underline">
              <a href="/about/statement-of-faith">Our Beliefs</a>
            </li>
            <li className="hover:underline">
              <a href="#/about/gallery">Photo Gallery</a>
            </li>
          </ul>
        </div>
        <div className="text-left md:w-1/3  pr-8 mr-8 mt-8 md:mt-0">
          <h1 className="font-bold text-glbc-accent">Academics</h1>
          <ul className="flex flex-col  gap-6 mt-4">
            <li className="hover:underline">
              <a href="/academics">Programs</a>
            </li>
            <li className="hover:underline">
              <a href="/academics/#theology">Bible and Theology</a>
            </li>
            <li className="hover:underline">
              <a href="/academics/#music">Music</a>
            </li>
            <li className="hover:underline">
              <a href="https://elearning.glbc.co.ke/">E-learning</a>
            </li>
          </ul>
        </div>
        <div className="text-left md:w-1/3 pr-8 mr-8">
          <h1 className="font-bold text-glbc-accent">Contact Us</h1>
          <ul className="flex flex-col  gap-6 mt-4">
            <li>P.O. Box 49, Webuye,50200, Kenya.</li>
            <li>
              {" "}
              <a href="tel:+254791333222" className="hover:underline">
                {" "}
                Phone: 0791-333-222
              </a>
            </li>
            <li>
              {" "}
              <a href="mailto:info@glbc.ac.ke" className="hover:underline">
                Email: info@glbc.ac.ke
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-glbc-accent h-0.5 w-full md:max-w-6xl  mx-auto my-4"></div>
      <div className=" text-white max-w-3xl flex flex-col justify-center mx-auto py-4 px-4 md:px-0  items-center gap-4">
        <div className="flex justify-center gap-2 items-center text-white">
          <Image
            src="/logo-white.png"
            alt="GLBC Logo"
            className=" h-14 w-16 "
            width={75}
            height={75}
          />
          <h1 className="text-2xl font-bold mt-4 font-sans">GLBC</h1>
        </div>
        <div className=" flex flex-col justify-center text-sm text-gray-300 gap-0.5">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Grace Life Bible College.
          </p>
          <p className="text-center">All rights reserved.</p>
        </div>
        <div className="flex gap-4 ml-auto justify-center items-center mx-auto ">
          <Link
            href="https://www.facebook.com/profile.php?id=61553774922849"
            target="_blank"
          >
            <Image
              src="/facebook.svg"
              alt="Facebook Icon"
              className="h-4 w-4 mt-2 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="/youtube.svg"
              alt="YouTube Icon"
              className="h-4 w-4 mt-2 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="/x.svg"
              alt="X Icon"
              className="h-4 w-4 mt-2 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
