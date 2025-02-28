import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, stack }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <span className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-green-500  font-semibold flex justify-center items-center ">
              View
            </span>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <p className="text-orange-700 flex  flex-wrap gap-1">
          <span className=" px-2 py-1 rounded-md">{stack[0]}</span>
          <span className=" px-2 py-1 rounded-md">{stack[1]}</span>
          <span className=" px-2 py-1 rounded-md">{stack[2]}</span>
          <span className=" px-2 py-1 rounded-md">{stack[3]}</span>
          <span className=" px-2 py-1 rounded-md">{stack[4]}</span>
          <span className=" px-2 py-1 rounded-md">{stack[5]}</span>
          <span className=" px-2 py-1 rounded-md">{stack[6]}</span>
          <span className=" px-2 py-1 rounded-md">{stack[7]}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
