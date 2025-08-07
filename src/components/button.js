import React from "react";

export default function Button({children}) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors font-bold">
      {children}	
    </button>
  );
}
