import CTA from "@/components/CallToAction";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const Page = () => {
  return (
    <div className="">
      <div className="relative flex py-8 md:py-16 px-4   justify-center items-center w-full">
        <div className="absolute inset-0 bg-glbc-secondary -z-10 "> </div>
        <div>
          <h1 className="text-2xl font-lora font-bold text-white mt-16 z-10 text-center">
            Short Courses
          </h1>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-center mt-8 font-bold text-lg">
          Music short courses
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead>Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Guitar</TableCell>
              <TableCell>Kshs 7,000</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Double Bass</TableCell>
              <TableCell>Kshs 7,000</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trumpet</TableCell>
              <TableCell>Kshs 7,000</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Clarinet</TableCell>
              <TableCell>Kshs 7,000</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Saxophone</TableCell>
              <TableCell>Kshs 7,000</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Piano</TableCell>
              <TableCell>Kshs 7,000</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Voice</TableCell>
              <TableCell>Kshs 7,000</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Drumset</TableCell>
              <TableCell>Kshs 7,000</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Computer Packages</TableCell>
              <TableCell>Kshs 3,500</TableCell>
              <TableCell>2 months</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <CTA />
    </div>
  );
};

export default Page;
