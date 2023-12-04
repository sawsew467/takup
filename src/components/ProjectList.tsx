import ProjectItem from "./ProjectItem";
import { PROJECTS_DATA } from "@/data/project";

type IProps = {
  filter: string;
};

function ProjectList({ filter }: IProps) {

  const renderProjectItem = () => {
    if (filter === "Manpower Supply") {
      return PROJECTS_DATA.map((item, index) =>
        item.catagories.includes("Manpower Supply") ? (
          <ProjectItem key={index} data={item}></ProjectItem>
        ) : null
      );
    }

    return PROJECTS_DATA.map((item, index) =>
      (item.catagories.includes(filter) || filter === "All") &&
      !item.catagories.includes("Manpower Supply") ? (
        <ProjectItem key={index} data={item}></ProjectItem>
      ) : null
    );
  };

  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-flow-row gap-x-[30px] gap-y-[24px] transition-all">
      {renderProjectItem()}
    </ul>
  );
}

export default ProjectList;