import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const FeeMusic = () => {
  return (
    <div className=" py-8 ">
      <Table>
        <TableCaption className="caption-top">
          Music department fees for the academic year 2026/2027.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Program</TableHead>
            <TableHead>Application Fee</TableHead>
            <TableHead>Tuition Fee (Year)</TableHead>
            <TableHead>Administrative Costs</TableHead>
            <TableHead>Total Fees (Kshs)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Diploma in Music</TableCell>
            <TableCell>Kshs 2,500</TableCell>
            <TableCell>Kshs 102,000</TableCell>
            <TableCell>Kshs 7,500</TableCell>
            <TableCell>Kshs 109,500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Certificate in Music</TableCell>
            <TableCell>Kshs 1,000</TableCell>
            <TableCell>Kshs 88,500</TableCell>
            <TableCell>Kshs 7,000</TableCell>
            <TableCell>Kshs 95,500</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-center  md:justify-end px-4 ">
        <Button className="  mt-4 hover:cursor-pointer ">
          {" "}
          Download Fee Structure{" "}
        </Button>
      </div>
    </div>
  );
};

export default FeeMusic;
