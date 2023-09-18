import { BellRing, Search } from "lucide-react";
import PersonalDetails from "./Personal";
import Details from "./DashboardDetails";

export default function MainDashboard() {
  return (
    <>
     <div className="grid grid-flow-row  h-1/4 mt-5 p-2 mr-6 my-5   w-full">
        <div className="bg-[#fff] rounded-lg mb-5 flex justify-between items-center">
          <div className=" ml-5 w-[15%]">
            <h2 className="text-[#39506d] font-medium text-2xl py-3 px-2">
              Dashboard
            </h2>
          </div>
          <div className="flex items-center w-[60%] mr-20 gap-2 border border-gray-200 p-2 rounded-lg">
            <Search size={20} color="gray" />
            <input
              type="text"
              placeholder="Search for students/teachers/docs..."
              className="outline-none text-sm"
            />
          </div>
          <div className=" flex items-center gap-8 mr-5">
            <BellRing size={20} color="gray" />
            <img
              src="/images/me.jpg"
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
          </div>
        </div>
        <Details />
        </div>
    </>
  );
}
