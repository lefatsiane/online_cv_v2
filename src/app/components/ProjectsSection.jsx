"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Car Inventory",
    description:
      "This showcases my full stack capabilities and expertise in Express, MongoDB, and Node to make this code work please insert your own database.",
    image: "images/CarInventory.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lefatsiane/car_inventory2",
    previewUrl: "/images/CarInventory_preview.png",
  },
  {
    id: 2,
    title: "Online Store",
    description:
      "This code demonstrates proficiency in React the web app features a functional login, a cart, and product cards.",
    image: "/images/OnlineStore.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lefatsiane/onlineStore",
    previewUrl: "/images/OnlineStore_preview.png",
  },
  {
    id: 3,
    title: "Instagram Clone",
    description:
      "This code demonstrates my skills and understanding of app development especially in the front-end ",
    image: "/images/CloneApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lefatsiane/instagrame_clone",
    previewUrl: "/images/CloneApp_preview.png",
  },
  {
    id: 4,
    title: "Banking App",
    description:
      "This demonstrates my ability in Local State Management and Events",
    image: "/images/BankingApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lefatsiane/banking_app",
    previewUrl: "/images/BankingApp_preview.png",
  },
  {
    id: 5,
    title: "Online CV",
    description:
      "My first portfolio and my first mobile friendly app used to display my previous prjects and for future clients/employers to get familer with me  ",
    image: "/images/portfolio_1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/lefatsiane/online_cv",
    previewUrl: "https://lefa-online-cv.onrender.com",
  },
  {
    id: 6,
    title: "My Portfolio",
    description:
      "I usesd next.js and tailwind to create this portfolio, this portfolio features a logo that I created my  and an email section to make it easier for prospective clients/employers to contact me",
    image: "/images/porfolio_2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/lefatsiane/online_cv_v2",
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
    <section id="projects">
      <div>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
          My Projects
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
              transition={{ duration: 0.3, delay: index * 0.4 }}
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
