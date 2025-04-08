"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Pingme",
    description:
      "A full-stack MERN chat application powered by Socket.io for seamless real-time messaging. Features secure authentication, online user tracking, instant message delivery, and a smooth user experience.",
    image: "/images/pingchat.png",
    tag: ["All", "Web"],
    gitUrl: "https://pingme-chat-app.vercel.app",
    stack: [
      "React js",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Node",
      "Express",
      "Socket.IO",
      "Cloudinary",
      "MongoDB",
    ],
  },
  {
    id: 2,
    title: "Nelpharma",
    description:
      "MERN stack e-commerce for pharmaceutical products featuring admin dashboard, user authentication, payments (Stripe), and product management. ",
    image: "/images/nelpharma.png",
    tag: ["All", "Web"],
    gitUrl: "https://nelpharmaceuticals.vercel.app/",
    stack: [
      "Reactjs",
      "JavaScript",
      "Tailwind CSS",
      "Nodejs",
      "Expressjs",
      "Cloudinary",
      "MongoDB",
    ],
  },

  {
    id: 3,
    title: "MERN-AUTH",
    description:
      "MERN authentication system with OTP-based email verification and password reset via Google SMTP.",
    image: "/images/mern_auth.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://mernauth-frontend.vercel.app/",
    stack: [
      "Reactjs",
      "JavaScript",
      "Tailwind CSS",
      "Google SMTP",
      "Nodejs",
      "Expressjs",
      "MongoDB",
    ],
  },
  {
    id: 4,
    title: "Neldemy-LMS",
    description:
      "Learning Management System (LMS) UI featuring google gemini AI.Clerk was integrated for  efficient user authentication",
    image: "/images/neldemy.png",
    tag: ["All", "Web"],
    gitUrl: "https://neldemy-lms.vercel.app/",
    stack: [
      "Reactjs",
      "JavaScript",
      "Tailwind CSS",
      "Nodejs",
      "gemini AI",
      "Expressjs",
      "Cloudinary",
      "MongoDB",
    ],
  },

  {
    id: 5,
    title: "Nelfix",
    description:
      "Explore the ultimate movie destination! Powered by the TMDB API, this website offers an extensive library of movies and TV shows, complete with detailed information, trailers, reviews, and ratings.",
    image: "/images/nelfix.png",
    tag: ["All", "Web"],
    gitUrl: "https://nelfixmovies.vercel.app/",
    stack: ["Nextjs", "JavaScript", "Tailwind CSS", "TMDB API"],
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
