import React from "react";
import { Link } from "react-router-dom";

function Preg() {
  return (
    <>
      <div className="min-h-screen py-16 bg-gradient-to-r from-green-100 via-green-200 to-green-300">
        <div className="container mx-auto">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center w-1/2 shadow-sm shadow-slate-300 rounded-lg">
              <h1 className="text-3xl font-bold">Mentor</h1>
              <img src="../images/mantor1.png" alt="" />
              <div>
                <Link to={"/menreg"}>
                  <button className="mt-3 bg-[#16d812] shadow-md ring-2 ring-slate-900/5 py-2 px-4 rounded-lg hover:bg-green-600 active:bg-green-600 text-lg font-bold hover:scale-105 duration-300">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 rounded-lg">
              <h1 className="text-3xl font-bold">Student</h1>
              <img
                className="h-3/4 w-screen"
                src="../images/student2.png"
                alt=""
              />
              <div>
                <Link to={"/stureg"}>
                  <button className="mt-3 bg-[#16d812] shadow-md ring-2 ring-slate-900/5 py-2 px-4 rounded-lg hover:bg-green-600 active:bg-green-600 text-lg font-bold hover:scale-105 duration-300">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Preg
