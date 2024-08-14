import React from "react";

const ProjectsCard = ({ imgURL, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url ${imgURL}`, backgroundSize: "cover" }}
      >
        <div className="overlay absoulute top-0 left-0 w-full h-full bg-orange-500 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 "></div>
      </div>
      <div className="text-white rounded-b-xl bg-red-500 py-6 px-4  ">
        <h5 className="font-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
