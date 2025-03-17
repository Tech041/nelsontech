import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, stack }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <Link
            href={gitUrl}
            target="_blank"
            className="text-green-600 font-bold"
          >
            Live View
          </Link>
        </div>
        <p className="text-[#ADB7BE]">{description}</p>
        <p className=" pt-1 ">Technologies used are::</p>
        <p className="text-orange-700 flex  flex-wrap ">
          {stack.map((item, index) => (
            <span key={index} className="py-1 pr-3 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
