import FacultyCard from "@/components/FacultyCard";
import { facultyMembers } from "@/lib/navigation";
import Image from "next/image";

const Faculty = () => {
  return (
    <div className="min-h-screen">
      <div className="relative flex py-8 md:py-16 px-4 min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]  justify-center items-center">
        <Image
          src="/faculty2.jpg"
          alt="President"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-4">
          {" "}
        </div>

        <div className="relative text-white text-center">
          <h1 className="text-2xl md:text-3xl font-lora font-bold mb-4">
            Our Faculty
          </h1>
          <h2 className="text-lg md:text-xl font-lora md:max-w-3xl">
            Our faculty is made up of experienced pastors, teachers, and leaders
            who are passionate about equipping students for ministry and
            service.
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 py-8 justify-center max-w-7xl w-full mx-auto">
        {facultyMembers.map((member, index) => (
          <FacultyCard
            key={index}
            imgUrl={member.imgUrl || "/noAvatar.png"}
            name={member.name}
            role={member.role}
            status={member.status}
            qualification={member.qualification}
          />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
