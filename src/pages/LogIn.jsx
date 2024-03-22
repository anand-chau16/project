import React from 'react'
import { Link } from 'react-router-dom'
function LogIn() {
  return (
    <>
    <div
      className="min-h-screen py-20 bg-gradient-to-r from-green-100 via-green-200 to-green-300"
      
    >
      <div className="container mx-auto">
        <div
          className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center w-1/2">
            <div>
              <img src="../images/login2.png" alt="" />
            </div>
          </div>
          <div
            className="w-1/2 py-16 px-12 shadow-2 rounded-xl shadow-md shadow-slate-500 ring-2 ring-slate-900/5"
          >
            <h2 className="text-3xl mb-10 text-center font-bold">Log In</h2>
            <form action="" id="log" name="log_in">
              <div>
                <input
                  type="text"
                  placeholder="Username or E-mail"
                  className="shadow-md border border-gray-400 py-2 px-3 my-3 rounded-full w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="shadow-md border border-gray-400 py-2 px-3 my-6 rounded-full w-full focus:outline-none focus:border-[#16d812] focus:ring-[#16d812] block focus:ring-1 hover:bg-slate-50"
                />
                <div className="mt-5 px-4">
                  <input type="checkbox" className="border-gray-300" />
                  <span>{" "}Remember Me</span>
                  <a className="ml-10 text-[#16d812] hover:underline" href="">Forgot Password?</a>
                </div>
                <div className="mt-8">
                  <button
                    className="text-2xl font-sans shadow-md w-full bg-[#16d812] py-2 text-center text-white rounded-full hover:bg-green-400 hover:scale-95 duration-300"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button
              className="bg-white border font-sans text-lg py-2 w-full rounded-full mt-5 hover:scale-95 duration-300 hover:bg-slate-50 flex justify-center items-center"
            >
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                width="20px"
                viewBox="0 0 488 512"
              >
                <path
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                /></svg>Login with Google
            </button>
            <p className="text-xs border-b py-6 border-gray-400">
              <a className="hover:text-[#16d812]" href="#">Forgot your Password?</a>
            </p>
            <div className="mt-3 text-xs flex justify-between items-center">
              <p>If you don't have an account?</p>
            <Link to="/preg"> 
              <button
                className="py-2 px-5 bg-white border rounded-full hover:bg-slate-50 hover:scale-95 duration-300"
              >
              Register
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

export default LogIn