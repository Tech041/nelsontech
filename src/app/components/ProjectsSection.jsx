"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nelpharma",
    description:
      "Full-stack e-commerce platform for pharmaceutical products, featuring an admin dashboard. Stripe was integrated for secure online payment processing. ",
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
    id: 2,
    title: "E-SHOP",
    description:
      "Full stack e-commerce application for electronic gadgets like phones, laptops and wrist watches.Stripe was integrated for secure online payment processing",
    image: "/images/projects/e_shop.png",
    tag: ["All", "Web"],
    gitUrl: "https://just-electronics.onrender.com/",
    stack: [
      "Reactjs",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Nodejs",
      "Expressjs",
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
    stack: ["Nextjs", "JavaScript", "Tailwind CSS", "TMDB API"],
  },

  {
    id: 4,
    title: "Neldemy-LMS",
    description:
      "Learning Management System (LMS), Clerk was integrated for  efficient user authentication",
    image: "/images/neldemy.png",
    tag: ["All", "Web"],
    gitUrl: "https://neldemy-lms.vercel.app/",
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
    id: 5,
    title: "FitPulse",
    description:
      "FitPulse, a modern  gym UI, very responsive and user-friendly.",
    image: "/images/projects/fitpulse.png",
    tag: ["All", "Web"],
    gitUrl: "https://myfitnesspulse.vercel.app/",
    stack: ["Reactjs", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "MedSpark",
    description:
      "SaaS UI, severless but powered by google Gemini AI to automate responses. ",
    image: "/images/projects/ai_clinic.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://medspark-clinic.vercel.app/",
    stack: ["Reactjs", "JavaScript", "Tailwind CSS", "Google Gemini API"],
  },
  {
    id: 7,
    title: "MERN-AUTHENTICATION",
    description:
      "MERN authentication system featuring email verification via OTP, password reset via OTP and storage of JWT in HTTP-only cookies for security",
    image: "/images/mern_auth.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://mernauth-frontend.vercel.app/",
    stack: [
      "Reactjs",
      "JavaScript",
      "Tailwind CSS",
      "Nodejs, Expressjs, MongoDB",
    ],
  },
  {
    id: 8,
    title: "Lendsqr clone",
    description: " A loan application clone but still under development",
    image: "/images/lendsqr_clone.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://lendsqr-clone-bice.vercel.app/",
    stack: [
      "Reactjs",
      "TypeScript",
      "Tailwind CSS",
      "Nodejs, Expressjs, MongoDB",
    ],
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
