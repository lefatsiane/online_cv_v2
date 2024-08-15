import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white bg-orange-500"
    : "text-white border-red-500 hover:border-white";
  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-6 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
