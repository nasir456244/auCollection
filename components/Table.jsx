import { Tooltip } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React from "react";

const Table = ({ title, photo, createdAt ,id}) => {
  const router = useRouter();
  return (
    <tbody>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10">
              <img className="w-full h-full rounded-full" src={photo} alt="" />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{title}</p>
              <p className="text-gray-600 whitespace-no-wrap">{id}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
          <p className="text-gray-600 whitespace-no-wrap">USD</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
          <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Paid</span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-black-200 bg-white text-sm text-right">
            <Tooltip content="Visit">
              <svg onClick={() => router.push(`/collection/${id}`)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-black h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Tooltip>
        </td>
      </tr>
    </tbody>
  );
};

export default Table;
