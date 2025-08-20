"use client";

import Image from "next/image";

const services = () => {
  return (
    <div className="grid grid-cols-3 gap-9 p-25">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">TA</span>
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-800">Tapan Adesara</h3>
        <p className="text-sm text-gray-600 text-center mt-2">MERN Stack Developer</p>
        <p className="text-xs text-gray-500 text-center mt-1">React, Node, Express, MongoDB</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-green-600">RA</span>
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-800">raj Adesara</h3>
        <p className="text-sm text-gray-600 text-center mt-2">MERN Stack Developer</p>
        <p className="text-xs text-gray-500 text-center mt-1">React, Node, Express, MongoDB</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="w-24 h-24 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-yellow-600">GA</span>
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-800">gaurav Adesara</h3>
        <p className="text-sm text-gray-600 text-center mt-2">MERN Stack Developer</p>
        <p className="text-xs text-gray-500 text-center mt-1">React, Node, Express, MongoDB</p>
      </div>
    
     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
       <div className="w-24 h-24 bg-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
           <span className="text-2xl font-bold text-teal-600">UA</span>
        </div>
        <h3  className="text-lg font-semibold text-center text-gray-800">Uday adesara</h3>
        <p className="text-sm text-gray-600 text-center mt-2">mern stack developer</p>
        <p className="text-xs text-gray-500 text-center mt-1">react, node, express, mongodb</p>
     </div>
       <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300" style={{ height: "300px" }}>
       <Image src="/thapa.jpg" alt="Thapa Technical" width={150} height={300} className="object-cover h-full w-auto rounded-lg"/>
      </div>
     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
       <div className="w-24 h-24 bg-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
           <span className="text-2xl font-bold text-teal-600">UA</span>
        </div>
        <h3  className="text-lg font-semibold text-center text-gray-800">Uday adesara</h3>
        <p className="text-sm text-gray-600 text-center mt-2">mern stack developer</p>
        <p className="text-xs text-gray-500 text-center mt-1">react, node, express, mongodb</p>
     </div>
    </div>
  )
}

export default services;