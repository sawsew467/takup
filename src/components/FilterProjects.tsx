"use client";

import React from "react";

const filterList = [
  "All",
  "Manpower Supply",
  "Mobile App / Website",
  "UI/UX Design",
];

type IProps = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

function FilterProjects({ filter, setFilter }: IProps) {
  return (
    <ul className="flex flex-row gap-2 mb-[60px] flex-wrap justify-center">
      {filterList.map((item, index) => (
        <li
          onClick={() => setFilter(item)}
          key={index}
          style={{
            backgroundColor: item !== filter ? "transparent" : "#F8D000",
          }}
          className="px-4 py-2 text-[#212529] drop-shadow-md rounded-md text-lg cursor-pointer transition-all"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default FilterProjects;
