"use client";

import FilterProjects from "@/components/FilterProjects";
import ProjectList from "@/components/ProjectList";
import React, { useState } from "react";

function ProjectContainer() {
  const [filter, setFilter] = useState("All");

  return <div className="max-w-[1440px] flex flex-col items-center">
    <FilterProjects setFilter={setFilter} filter={filter}></FilterProjects>
    <ProjectList filter={filter}></ProjectList>
  </div>;
}

export default ProjectContainer;
