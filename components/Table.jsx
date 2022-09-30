import React from "react";

const Table = ({ title, photo, createdAt ,id}) => {
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
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
          <button
            type="button"
            className="inline-block text-gray-500 hover:text-gray-700"
          >
            <svg
              className="inline-block h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 
                                        0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
              />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Table;
