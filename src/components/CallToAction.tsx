import { Link } from "lucide-react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className="flex justify-cente items-center flex-col mt-8 md:my-16 md:py-24 gap-4 border border-gray-300 max-w-6xl mx-auto  p-8 rounded-lg">
      <h1 className="text-3xl font-serif font-bold">Ready to Apply?</h1>
      <p>
        Take the next step in your calling. Fill out the application form and
        begin your journey at GLBC.
      </p>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="lg"
          className=" cursor-pointer bg-glbc-accent text-glbc-primary outline-none border-none"
        >
          <a href="/academics" className="text-sm text-glbc-primary font-bold">
            View Programs
          </a>
        </Button>
        <Button variant="outline" size="lg" className=" cursor-pointer ">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default CTA;
