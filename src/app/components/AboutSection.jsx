"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ">
        <li>Javascript</li>
        <li>Taliwind CSS & CSS</li>
        <li>HTML</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>MongoDb</li>
        <li>Google Analytics</li>
        <li>SQL & no SQL</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2 ">
        <li>HyperionDev</li>
        <li>Udemy: 100 days of Python </li>
        <li>Google Analytics Academy</li>
        <li>Self Taught</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "Certificates",
    content: (
      <ul className="list-disc pl-2 ">
        <li>HyperionDev: Full Stack Completion Certificate</li>
        <li>Advanced Google Analytics</li>
        <li>Introduction to Web Design and Development</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-centre py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image
          className="lg:mt-16 mt-0 w-50 "
          src="/images/img8.png"
          alt="cartoon of man by a computer"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            Results-driven professional excelling in dynamic environments with a
            positive mindset. Strong organizational skills and dedication ensure
            high-quality results. Known for balancing artistic expression with
            business objectives. Adaptable, eager to learn, and ready to make an
            impact as a software engineer.
          </p>

          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("Certificates")}
              active={tab === "Certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {" "}
            {TAB_DATA.find((t) => t.id === tab).content}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
