import React from "react";

const Icon = ({ title }: { title: string }) => {
  return (
    <div className="basis-300px flex-1 bg-gradient-to-b from-gray-500 to-gray-600 p-3 rounded-sm shadow-sm">
      <h2>{title}</h2>
    </div>
  );
};

export default Icon;
