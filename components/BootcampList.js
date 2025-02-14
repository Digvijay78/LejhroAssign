import React from "react";
import BootcampCard from "./BootcampCard";

const bootcamps = [
  { title: "Data Analyst Course", startDate: "Feb 9, 2025", duration: "4 Months" },
  { title: "Full Stack Development Course", startDate: "Feb 9, 2025", duration: "4 Months" },
];

const BootcampList = () => {
  return (
    <div className="flex flex-col gap-4 w-80">
      <h2 className="text-xl font-semibold text-gray-800">Bootcamps</h2>
      {bootcamps.map((camp, index) => (
        <BootcampCard key={index} {...camp} />
      ))}
    </div>
  );
};

export default BootcampList;
