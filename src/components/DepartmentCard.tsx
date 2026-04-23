import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/dist/client/link";
const DepartmentCard = ({
  title,
  description,
  url,
  footer,
  content,
}: {
  title: string;
  description: string;
  url: string;
  footer: string;
  content: string;
}) => {
  return (
    <Card className="max-w-75">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
        <CardAction>
          <Link
            href={url}
            className="bg-glbc-accent/80 text-gray-600 text-sm font-semibold rounded-md p-2 hover:underline"
          >
            View Programs
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        {/* <p>Degree • Diploma • Certificate</p> */}
        <p className="text-gray-500">{footer}</p>
      </CardFooter>
    </Card>
  );
};

export default DepartmentCard;
