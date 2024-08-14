import React from "react";
import ProjectsCard from "./ProjectsCard";

const projectData = [
  {
    id: 1,
    title: "Project 1",
    description: "description of the project",
    image: "/images/MainImg.JPG",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 2",
    description: "description of the project",
    image: "/images/MainImg.JPG",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 3",
    description: "description of the project",
    image: "/images/MainImg.JPG",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 4",
    description: "description of the project",
    image: "/images/MainImg.JPG",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 5",
    description: "description of the project",
    image: "/images/MainImg.JPG",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 6",
    description: "description of the project",
    image: "/images/MainImg.JPG",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <h2>My projects</h2>
      <div>
        {projectData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            tags={project}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default ProjectsSection;
