"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section  id="projects" >
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
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{duration: 0.3, delay: index * 0.4}}
            >
              <ProjectsCard
                title={project.title}
                description={project.description}
                imgURL={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
