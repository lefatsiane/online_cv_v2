"use client";
import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dignissimos unde nemo maiores eligendi hic aspernatur, illo dolores molestiae saepe sequi? Repellendus, nesciunt ipsam ipsum nostrum hic minus officia ex.",
    image: "images/img6.JPG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "description of the project",
    image: "/images/mainImg.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "description of the project",
    image: "/images/mainImg.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: "description of the project",
    image: "/images/mainImg.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "description of the project",
    image: "/images/mainImg.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "description of the project",
    image: "/images/mainImg.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default ProjectsSection;

{
  /* <button className="rounded-full border-2 border-orange-500 hover:border-white  px-6 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-orange-500 hover:border-white  px-6 text-xl cursor-pointer">
          Web
        </button> */
}
