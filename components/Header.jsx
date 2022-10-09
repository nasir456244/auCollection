import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { CollectBrisbaneContext } from "@/context/CollectBrisbane";
 
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useContext(CollectBrisbaneContext)

 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0  text-[#000] text-blue-gray-900 lg:flex-row lg:items-center lg:gap-6">
      <li
        className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal"
      >
        <a className="flex items-center">
          Pages
        </a>
      </li>
      <li
        className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal"
      >
        <a className="flex items-center">
          Account
        </a>
      </li>
      <li
        className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal"
      >
        <a className="flex items-center">
          Blocks
        </a>
      </li>
      <li
        className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal"
      >
        <a className="flex items-center">
          Docs
        </a>
      </li>
    </ul>
  );
 
  return (
    <div className="mx-auto max-w-screen-xl rounded-[10px] bg-[#ffffffcc] py-2 shadow-xl px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href='/'>
        <h5
          className="text-[#000] tracking-normal font-sans text-2xl leading-snug mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>Collect Brisbane</span>
        </h5>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <Link href={`${!user ? '/login' : '/account'}`}>
          <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] hidden lg:inline-block">
            <span> {!user ? 'Get Started' : 'Account'}</span>
          </button>
        </Link>
        <div
          variant="text"
          className="ml-auto h-6 w-6 text-blue-gray-900 cursor-pointer hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-[#000]"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#000]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
      {openNav && <div>
        {navList}
        <button className="font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full mb-2">
          <span>Get Started</span>
        </button>
      </div> }
    </div>
  );
}

export default Header;