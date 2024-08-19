import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
//width img

const ProjectsCard = ({ imgURL, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 mt-2 rounded-t-xl relative group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute rounded-t-xl top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            className="h-14 w-14 mr-2 relative border-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
            href={gitUrl}
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>

          <Link
            className="h-14 w-14 relative border-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
            href={previewUrl}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white pb-4 rounded-b-xl bg-[#181818] py-6 px-4  ">
        <h5 className="font-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
