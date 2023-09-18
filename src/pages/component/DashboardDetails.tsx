import {Bar} from "react-chartjs-2"

export default function Details() {
  return (
    <>
      <div className="flex items-center gap-7">
        <div className="bg-[#fff] p-4 rounded-xl shadow-lg flex items-center gap-3 w-1/4">
          <div className="flex justify-center items-center rounded-full h-[60px] w-[60px] bg-[#f7f7f8]">
            <img
              src="/images/me.jpg"
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Students</h3>
            </div>
            <div>
              <h3 className="text-[#1e3a5c] font-medium text-2xl">17799</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#fff] p-4 rounded-xl shadow-lg flex items-center gap-3 w-1/4">
          <div className="flex items-center justify-center rounded-full h-[60px] w-[60px] bg-[#f7f7f8]">
              <img
              src="/images/me.jpg"
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Teachers</h3>
            </div>
            <div>
              <h3 className="text-[#1e3a5c] font-medium text-2xl">220</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#fff] p-4 rounded-xl shadow-lg flex items-center gap-3 w-1/4">
          <div className="flex items-center justify-center rounded-full h-[60px] w-[60px] bg-[#f7f7f8]">
            <img
              src="/images/me.jpg"
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Parents</h3>
            </div>
            <div>
              <h3 className="text-[#1e3a5c] font-medium text-2xl">8996</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#fff] p-4 rounded-xl shadow-lg flex items-center gap-3 w-1/4">
          <div className="flex items-center justify-center rounded-full h-[60px] w-[60px] bg-[#f7f7f8]">
            <img
              src="/images/me.jpg"
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Earnings</h3>
            </div>
            <div>
              <h3 className="text-[#1e3a5c] font-medium text-2xl">$14.2K</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
