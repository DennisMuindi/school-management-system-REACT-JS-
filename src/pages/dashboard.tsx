import {
  Banknote,
  BellRing,
  Book,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  School2,
  Search,
  UserCheck2,
  Wrench,
} from "lucide-react";
import React, { useState } from "react";

import { useRouter } from "next/router";
import MainDashboard from "./component/DashboardHero";

export default function Dashboard() {
  const router = useRouter();
 
  return (
    <>
    <div className=" h-screen flex justify-between items-center bg-[#fcfdfd]">
      <div className=" bg-[#e5eefa] w-[95%] mb-3 mx-auto mt-2 flex">
        {/* SIDE BAR */}
        <div className="bg-slate-600 text-white w-[200px] p-2 my-5 mx-6 rounded-lg ">
          <div className=" p-3 border-b-2 border-gray-500 flex gap-4 items-center">
            <img
              className="h-[40px] w-[40px] bg-[#b1d0f7] rounded-full"
              src="/images/school.png"
              alt=""
            />
            <h1 className="text-white font-bold">SCHOOL</h1>
          </div>
          <div className="flex items-center text-sm gap-3 font-medium mt-5 active:bg-[#d2dad7] hover:bg-[#d2dad7] py-3 px-2 hover:text-[#344e6d] hover:rounded-lg">
            <LayoutDashboard size={23} />
            <button onClick={()=>router.push("/dashboard")}>Dashboard</button>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium mt-3 hover:bg-[#d2dad7] py-2 px-2 hover:text-[#344e6d] hover:rounded-lg">
            <GraduationCap size={23} /> 
            <button onClick={()=>router.push('/student')}>Students</button>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium mt-3 hover:bg-[#d2dad7] py-2 px-2 hover:text-[#344e6d] hover:rounded-lg">
            <School2 size={23} />
          <button onClick={()=>router.push("/teachers")}>Teachers</button>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium mt-3 hover:bg-[#d2dad7] py-2 px-2 hover:text-[#344e6d] hover:rounded-lg">
            <UserCheck2 size={23} />
            Attendance
          </div>

          <div className="flex items-center gap-3 text-sm font-medium mt-3 hover:bg-[#d2dad7] py-2 px-2 hover:text-[#344e6d] hover:rounded-lg">
            <Book size={23} />
            Courses
          </div>

          <div className="flex items-center gap-3 text-sm font-medium mt-3 hover:bg-[#d2dad7] py-2 px-2 hover:text-[#344e6d] hover:rounded-lg">
            <BookOpen size={23} />
            Exams
          </div>

          <div className="flex items-center gap-3 text-sm font-medium mt-3 hover:bg-[#d2dad7] py-2 px-2 hover:text-[#344e6d] hover:rounded-lg">
            <Banknote size={23} />
            <button onClick={()=>router.push("/teachers")}> School Fees</button>
          </div>

          <div className="flex items-center gap-3 text-sm font-medium mt-14 py-1 px-2 ">
            <Wrench size={20} />
            Settings
          </div>

          <div className="flex items-center gap-3 text-sm font-medium mt-2 py-1 px-2">
            <LogOut size={20} />
            Log Out
          </div>
        </div>
        <MainDashboard />
      </div>
    </div>
  </>
  );
}
