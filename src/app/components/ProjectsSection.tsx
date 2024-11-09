"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Define types for the project data
interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "GYM Website",
    description: "This is a gym website that I made using HTML, CSS, and JavaScript",
    image: "/images/projects/gym-pic.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/GYM-Website",
    previewUrl: "https://gym-website-indol.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description: "This is a weather app built using Next.js, which provides weather information.",
    image: "/images/projects/weather-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/weather-widget-app",
    previewUrl: "https://y-blue-nu.vercel.app/",
  },
  {
    id: 3,
    title: "Countdown timer",
    description: "Countdown timer built with Next.js, a React framework, using libraries for time management .",
    image: "/images/projects/countdown-timer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/Countdown-Timer",
    previewUrl: "https://countdown-timer-by-maham-saif.vercel.app/",
  },
  {
    id: 4,
    title: "Furniture Website",
    description: "This is a Furniture website that I made using HTML, CSS, and JavaScript",
    image: "/images/projects/GYM-Website.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/MahamSaif786/Furniture-Website",
    previewUrl: "https://furniture-website-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Simple Calculator",
    description: "Command-line calculator built with TypeScript to perform basic arithmetic operations efficiently.",
    image: "/images/projects/calculator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/Simple-Calculator",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Currency Converter",
    description: "This is a command-line currency converter created with TypeScript.",
    image: "/images/projects/currency-convertor.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MahamSaif786/Currency-Converter",
    previewUrl: "/",
  },
];
const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="w-full bg-[#2F4156] py-20 px-[20px] md:px-[40px]">
      <h2 className="text-center text-4xl font-bold  text-white mt-8 mb-2 md:mb-4">
        My Projects
      </h2>
      
      <div className=" bg-[#2F4156] flex flex-row justify-center items-center gap-2 py-6">
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
      </div>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

 export default ProjectsSection;
