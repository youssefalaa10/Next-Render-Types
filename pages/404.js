import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-800">Page Not Found</p>
    
      <Link href="/">
        <i className="mt-4 inline-block px-6 py-3 bg-green-500 text-white rounded-md transition duration-300 hover:bg-green-200">
          Go Back Home
        </i>
      </Link>
    </div>
  </div>
  );
};

export default NotFound;
NotFound.getLayout = function pageLayout(page) {
    return <>{ page}</>
}


