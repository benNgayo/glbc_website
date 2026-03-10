import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-glbc-secondary mt-16 ">
      <div className=" flex-col-reverse justify-center flex md:flex-row max-w-6xl mx-auto py-8 px-4 text-center text-gray-300">
        <div className="  flex mt-8 md:mt-0 justify-center items-center md:items-start mx-auto w-full md:w-1/3 gap-4 pr-8 mr-8 border-t md:border-none border-gray-300 pt-8 md:pt-0">
          <Image
            src="/logo-white.png"
            alt="GLBC Logo"
            className=" h-12 "
            width={75}
            height={75}
          />
          <p className="text-left">
            &copy; {new Date().getFullYear()} Grace Life Bible College. All
            rights reserved.
          </p>
        </div>
        <div className="text-left md:w-1/3  pr-8 mr-8 mt-8 md:mt-0">
          <h1 className="font-bold">Quick Links</h1>
          <ul className="flex flex-col  gap-6 mt-4">
            <li className="hover:underline">
              <a href="/about">About</a>
            </li>
            <li className="hover:underline">
              <a href="/programs">Programs</a>
            </li>
            <li className="hover:underline">
              <a href="/admissions">Admissions</a>
            </li>
            <li className="hover:underline">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="text-left md:w-1/3 pr-8 mr-8">
          <h1 className="font-bold">Contact Us</h1>
          <p className="mt-4">
            Grace Life Bible College
            <br />
            P.O. Box 499-50200
            <br />
            Webuye, Kenya
            <br />
            Email: info@glbc.ac.ke
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
