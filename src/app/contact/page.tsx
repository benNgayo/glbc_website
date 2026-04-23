import ContactForm from "@/components/forms/contactForm";

import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="">
      <div className="relative flex py-8 md:py-16 px-4 min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]  justify-center items-center">
        <Image
          src="/contact.jpg"
          alt="President"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-4">
          {" "}
        </div>

        <div className="relative text-white text-center">
          <h1 className="text-2xl md:text-3xl font-lora font-bold mb-4">
            Contact GLBC
          </h1>
          <h2 className="text-lg md:text-xl font-lora md:max-w-3xl">
            We would love to hear from you! Whether you have questions about our
            programs, admissions, or anything else, please don&apos;t hesitate
            to reach out.
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-6xl gap-8 mx-auto py-8 md:py-16 px-4">
        <div className="flex flex-col gap-4 md:px-8 flex-1">
          <div>
            <p className="text-sm text-gray-600">/get in touch/</p>
            <h1 className="text-2xl md:text-3xl font-lora font-bold">
              How can we help you?
            </h1>
            <p className="text-lg md:pr-16">
              Please fill out the form below and we will get back to you as soon
              as possible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4  py-8">
            <div>
              <h1 className="text-lg">Call center</h1>
              <p className="text-gray-500">+254 791 333 222</p>
            </div>
            <div>
              <h1 className="text-lg">Email</h1>
              <p className="text-gray-500">info@glbc.ac.ke</p>
            </div>
            <div>
              <h1 className="text-lg">Our Location</h1>
              <p className="text-gray-500">49, Webuye, 50200</p>
            </div>
            <div>
              <h1 className="text-lg">Our Socials</h1>
              <div className="flex gap-2 ">
                <Link
                  href="https://www.facebook.com/profile.php?id=61553774922849"
                  target="_blank"
                >
                  <Image
                    src="/facebook.svg"
                    alt="Facebook Icon"
                    className="h-4 w-4 mt-2  opacity-80 hover:opacity-100 transition-opacity duration-300"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#" target="_blank">
                  <Image
                    src="/youtube.svg"
                    alt="YouTube Icon"
                    className="h-4 w-4 mt-2  opacity-80 hover:opacity-100 transition-opacity duration-300"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#" target="_blank">
                  <Image
                    src="/x.svg"
                    alt="X Icon"
                    className="h-4 w-4 mt-2  opacity-80 hover:opacity-100 transition-opacity duration-300"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  mx-auto w-full sm:max-w-md">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
