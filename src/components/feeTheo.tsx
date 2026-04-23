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

const FeeTheo = () => {
  return (
    <div className=" py-8 max-w-6xl w-full mx-auto px-4">
      <Table>
        <TableCaption className="caption-top">
          Theology department fees for the academic year 2026/2027.
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
            <TableCell>Bachelor of Arts in Bible and Theology</TableCell>
            <TableCell>Kshs 3,500</TableCell>
            <TableCell>Kshs 36,000</TableCell>
            <TableCell>Kshs 6,000</TableCell>
            <TableCell>Kshs 42,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Diploma in Bible and Theology</TableCell>
            <TableCell>Kshs 2,500</TableCell>
            <TableCell>Kshs 28,800</TableCell>
            <TableCell>Kshs 5,500</TableCell>
            <TableCell>Kshs 34,300</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Certificate of Bible and Theology</TableCell>
            <TableCell>Kshs 1,000</TableCell>
            <TableCell>Kshs 6,000</TableCell>
            <TableCell>Kshs 6,000</TableCell>
            <TableCell>Kshs 12,000</TableCell>
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

export default FeeTheo;
