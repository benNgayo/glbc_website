Copy
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Copy } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"




const FacultyCard = ({imgUrl, name, role, status, qualification}: {imgUrl:string, name:string, role:string, status:string, qualification:string}) => {
  return (
  


<div className="w-full max-w-70 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden font-sans">
      {/* Image Container with Aspect Ratio */}
      <div className="aspect-4/3 w-full bg-gray-200">
        <Image
          src={imgUrl || "/noAvatar.png"}
          alt={name}
          className="w-full h-full object-cover "
          height={144}
          width={144}
        />
      </div>

      {/* Content Area */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-2">
          {/* Name - Bold and tight line height */}
          <h3 className="text-[18px] font-bold text-gray-900 leading-tight">
            {name}
          </h3>
          
          {/* Status Badge - Pill shape with subtle border */}
          <span className="text-[12px] px-3 py-1 rounded-full border border-gray-200 text-gray-700 whitespace-nowrap">
            {status}
          </span>
        </div>

        {/* Role - Muted gray */}
        <p className="text-[15px] text-gray-500 mt-2">
          {role}
        </p>

        {/* Qualification - Slightly blue-ish gray as seen in image */}
        <p className="text-[15px] text-slate-600 mt-2 font-medium">
          {qualification}
        </p>
      </div>
    </div> 
  )
}

export default FacultyCard