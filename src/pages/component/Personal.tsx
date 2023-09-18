import { Search } from "lucide-react";

export default function PersonalDetails() {
  return (
    <>
      <div className="flex gap-10">
        <div className="bg-[#fff] rounded-lg p-4 w-[30%] ">
          <div className="border-b-2 border-b-gray-200 py-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[#39506d] font-medium text-sm">Students</h3>
              <button className="text-gray-400 font-medium text-2xl ">
                ...
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg flex justify-between items-center p-2 mt-4">
              <Search size={15} color="gray" />
              <input
                type="text"
                placeholder="Search for student by ID"
                className="outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <table className="mt-5">
              <thead className="text-sm font-medium text-gray-500">
                <tr>
                  <th className="px-3 w-[10%]">Photo</th>
                  <th className="px-3 w-[30%] text-start">Name</th>
                  <th className="px-3 w-[30%] ">Student ID</th>
                  <th className="px-3 w-[10%]">Year</th>
                </tr>
              </thead>

              <tbody className="text-sm px-2 font-medium text-gray-500">
                <tr className="hover:bg-[#627b99] hover:text-white">
                  <td className="px-3 py-2 w-[10%]">
                    <img
                      src="images/me.jpg"
                      alt=""
                      className="h-[20px] w-[20px] rounded-full "
                    />
                  </td>
                  <td className="px-4 w-[30%]">Papa</td>
                  <td className="px-3 w-[30%]">C-3456</td>
                  <td className="px-3 w-[10%]">2017</td>
                </tr>

                <tr className="hover:bg-[#627b99] hover:text-white">
                  <td className="px-3 py-2 w-[10%] ">
                    <img
                      src="images/me.jpg"
                      alt=""
                      className="h-[20px] w-[20px] rounded-full "
                    />
                  </td>
                  <td className="px-4 w-[30%]">Papa</td>
                  <td className="px-3 w-[30%]">C-3456</td>
                  <td className="px-3 w-[10%]">2017</td>
                </tr>

                <tr className="hover:bg-[#627b99] hover:text-white">
                  <td className="px-3 py-2 w-[10%] ">
                    <img
                      src="images/me.jpg"
                      alt=""
                      className="h-[20px] w-[20px] rounded-full "
                    />
                  </td>
                  <td className="px-4 w-[30%]">Papa</td>
                  <td className="px-3 w-[30%]">C-3456</td>
                  <td className="px-3 w-[10%]">2017</td>
                </tr>

                <tr className="hover:bg-[#627b99] hover:text-white">
                  <td className="px-3 py-2 w-[10%] ">
                    <img
                      src="images/me.jpg"
                      alt=""
                      className="h-[20px] w-[20px] rounded-full "
                    />
                  </td>
                  <td className="px-4 w-[30%]">Papa</td>
                  <td className="px-3 w-[30%]">C-3456</td>
                  <td className="px-3 w-[10%]">2017</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[70%] rounded-xl shadow-md bg-[#fff]">
          <div className="flex items-center bg-slate-600 gap-5 p-5 rounded-tl-lg rounded-tr-lg">
            <img
              src="/images/me.jpg"
              alt=""
              className="h-[50px] w-[50px] rounded-full "
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-medium text-lg">Papa Dennis</h3>
              <h6 className="text-white text-xs font-medium">
                Class IV | Student ID: C-34556
              </h6>
            </div>
          </div>

          <div className="border border-gray-300 my-5 mx-7 rounded-lg">
            <div className=" flex items-center justify-between mx-7 p-2">
              <h4 className="font-medium text-[#39506d] text-lg">
                Basic Details
              </h4>
              <p className="font-medium text-gray-500 text-2xl">...</p>
            </div>

            <div className="flex items-start justify-start gap-20 mx-7 px-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-400 font-medium text-sm">Gender</h3>
                <h2 className="text-[#39506d] text-sm font-medium">Male</h2>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-400 font-medium text-sm">
                  Date of Birth

                </h3>
                <h6 className="text-[#39506d] text-sm font-medium">25-09-1976</h6>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-400 font-medium text-sm">Religion</h3>
                <h2 className="text-[#39506d] text-sm font-medium">Christian</h2>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-400 font-medium text-sm">
                  Blood Group
                </h3>
                <h2 className="text-[#39506d] text-sm font-medium">B+</h2>
              </div>
            </div>


            <div className="flex items-start justify-start gap-20 mx-7 my-5 px-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-400 font-medium text-sm">Address</h3>
                <h2 className="text-[#39506d] text-sm font-medium">Manza 520-90100</h2>
                <h2 className="text-[#39506d] text-sm font-medium">Machakos County</h2>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-400 font-medium text-sm">Father
                </h3>
                <h2 className="text-[#39506d] text-sm font-medium">Father Berge</h2>
                <h2 className="text-[#39506d] text-sm font-medium">+254712345678</h2>
              </div>
            
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-400 font-medium text-sm">
                 Mother
                </h3>
                <h2 className="text-[#39506d] text-sm font-medium">Mother Berge</h2>
                <h2 className="text-[#39506d] font-medium text-sm">+254712345678</h2>
              </div>
            </div>
          </div>
          {/* Student Progress */}

          <div className="border border-gray-300 rounded-lg mx-7 my-2 p-1 ">
            <div className="rounded-tl-lg rounded-tr-lg border-b border-gray-300 flex p-2 justify-between">
            <div><h2 className="font-medium text-sm text-gray-500">Progress</h2></div>
            <div><h2 className="font-medium text-sm text-gray-500">Attendance</h2></div>
            <div><h2 className="font-medium text-sm text-gray-500">Fee history</h2></div>
          </div>
          <div className="h-[100px]">
            <h2 className="font-medium text-lg text-gray-500">Details</h2>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
