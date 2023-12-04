import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

type IProps = {
  data: {
    imageUrl: string;
    catagories: string[];
    title: string;
  };
};

function ProjectItem({ data }: IProps) {
  return (
    <li className="relative rounded-sm drop-shadow-md hover:translate-y-[-4px] hover:drop-shadow-xl transition-all duration-300 cursor-pointer">
      <Image alt="" src={data.imageUrl} width={407} height={407} className="w-full"></Image>
      <div className="flex flex-row justify-between items-center bg-white absolute bottom-0 left-0 right-0 m-4 p-4 rounded-md drop-shadow-lg">
        <p>{data.title}</p>
        <FaAngleRight />
      </div>
    </li>
  );
}

export default ProjectItem;
