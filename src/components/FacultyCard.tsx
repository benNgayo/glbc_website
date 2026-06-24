import Image from "next/image";

const FacultyCard = ({
  imgUrl,
  name,
  role,
  status,
  qualification,
}: {
  imgUrl: string;
  name: string;
  role: string;
  status: string;
  qualification: string;
}) => {
  return (
    <div className="w-full max-w-70 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden font-sans">
      <div className="aspect-4/3 w-full bg-gray-200">
        <Image
          src={imgUrl || "/noAvatar.png"}
          alt={name}
          className="w-full h-full object-cover "
          height={144}
          width={144}
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-[18px] font-bold text-gray-900 leading-tight">
            {name}
          </h3>

          <span className="text-[12px] px-3 py-1 rounded-full border border-gray-200 text-gray-700 whitespace-nowrap">
            {status}
          </span>
        </div>

        <p className="text-[15px] text-gray-500 mt-2">{role}</p>

        <p className="text-[15px] text-slate-600 mt-2 font-medium">
          {qualification}
        </p>
      </div>
    </div>
  );
};

export default FacultyCard;
