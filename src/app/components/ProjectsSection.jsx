"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nelpharma",
    description:
      "A comprehensive and fullstack e-commerce application for pharmaceutical products with admin panel.",
    image: "/images/nelpharma.png",
    tag: ["All", "Web"],
    gitUrl: "https://nelpharmaceuticals.vercel.app/",
    stack: [
      "Reactjs",
      "Tailwind CSS",
      "Nodejs,",
      "Expressjs",
      "Cloudinary",
      "MongoDB",
    ],
  },

  {
    id: 2,
    title: "E-SHOP",
    description:
      "Your number one ecommerce website for all kinds of electronic gadgets ranging from phones, laptops to wrist watches.",
    image: "/images/projects/e_shop.png",
    tag: ["All", "Web"],
    gitUrl: "https://just-electronics.onrender.com/",
    stack: [
      "Reactjs",
      "Tailwind CSS",
      "Redux",
      "Nodejs",
      "Expressjs",
      "Cloudinary",
      "MongoDB",
    ],
  },

  {
    id: 3,
    title: "Nelfix",
    description:
      "Explore the ultimate movie destination! Powered by the TMDB API, this website offers an extensive library of movies and TV shows, complete with detailed information, trailers, reviews, and ratings.",
    image: "/images/nelfix.png",
    tag: ["All", "Web"],
    gitUrl: "https://nelfixmovies.vercel.app/",
    stack: ["Nextjs", "Tailwind CSS", "TMDB API"],
  },

  {
    id: 4,
    title: "Neldemy-LMS",
    description:
      "This is a learning management system where students can enroll, buy courses and have  direct access to the course instructors/educators.",
    image: "/images/neldemy.png",
    tag: ["All", "Web"],
    gitUrl: "https://neldemy-lms.vercel.app/",
    stack: [
      "Reactjs",
      "Tailwind CSS",
      "Nodejs,",
      "Expressjs",
      "Cloudinary",
      "MongoDB",
    ],
  },
  {
    id: 5,
    title: "FitPulse",
    description:
      "FitPulse is a a modern UI/UX gym website where clients can book sessions, chat real time with admin or gym instructors and also choose type of services they want.",
    image: "/images/projects/fitpulse.png",
    tag: ["All", "Web"],
    gitUrl: "https://myfitnesspulse.vercel.app/",
    stack: ["Reactjs", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "MedSpark",
    description:
      "This is a SaaS project,powered by google Gemini API. Clients can seek automated health care support at the comfort of their homes using their devices.The application performs diagnosis with prevailing symptoms, recommends quick treatment plans and other automated health tasks.",
    image: "/images/projects/ai_clinic.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://medspark-clinic.vercel.app/",
    stack: ["Reactjs", "Tailwind CSS", "Google Gemini API"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
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
              stack={project.stack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
