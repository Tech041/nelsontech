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
    highlight: [
      "Real-time messaging using Socket.IO",
      "Online status tracking",
      "AI chatbot",
      "MongoDB for message persistence",
      "Clean and intuitive chat UI",
    ],
    image: "/images/pingchat.png",
    tag: ["All", "Web"],
    gitUrl: "https://pingme-chat-app.vercel.app",
    stack: [
      "React js",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Gemini API",
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
    highlight: [
      "Cart and order state management with Context API",
      "JWT-based authentication with protected routes",
      "Admin panel for product and user management",
      "Fully responsive UI with modern styling",
    ],
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
    title: "Nelpinterest",
    description:
      "Discover, save, and share ideas you love. Nelpinterest app helps you find inspiration for everything from fashion and recipes to home decor and more!",
    highlight: [
      "Secure cookie-based token handling",
      "Protected routes",
      "Infinite Scrolling: Enjoy seamless browsing with endless content loading.",
      "Content Creation: Create and share your own Pins to inspire others",
      "Boards Organization: Save Pins to custom boards for easy organization",
      "Visual Discovery: Find and save ideas through images",
      "Search with Images: Use visual search to find related ideas instantly.",
    ],
    image: "/images/nelpin.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://nelpinterest-app.vercel.app/",
    stack: ["Reactjs", "CSS3", "JavaScript", "Nodejs","ImageKIt", "Expressjs", "MongoDB"],
  },

  {
    id: 4,
    title: "MERN-AUTH",
    description:
      "MERN authentication system with OTP-based email verification and password reset via Google SMTP.",
    highlight: [
      "OTP-based email verification and password reset",
      "Secure cookie-based token handling",
      "Protected routes and role-based access",
      "Real-world auth flow simulation",
    ],
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
    id: 5,
    title: "Neldemy-LMS",
    description:
      "Learning Management System (LMS) UI featuring google Gemini AI chatbot.Gemini was integrated to enhance user conversation experience",
    highlight: [
      "AI-enhanced user interface with chatbot",
      "Modular components",
      "Clean, professional LMS layout using Tailwind",
      "Modern frontend architecture for scalability",
    ],
    image: "/images/neldemy.png",
    tag: ["All", "Web"],
    gitUrl: "https://neldemy-lms.vercel.app/",

    stack: ["Reactjs", "JavaScript", "Tailwind CSS", "Gemini API"],
  },

  {
    id: 6,
    title: "Nelfix",
    description:
      "Explore the ultimate movie destination! Powered by the TMDB API, this website offers an extensive library of movies and TV shows, complete with detailed information, trailers, reviews, and ratings.",
    highlight: [
      "Fast and SEO-friendly: Utilized Next.js's built-in SSR capabilities to pre-render pages on the server, improving page load times and search engine optimization.",
      " Dynamic Data Fetching: Implemented SSR to fetch movie data from an API, ensuring that pages are rendered with the latest data.",
      " Improved User Experience: Leveraged Next.js's automatic code splitting and optimized rendering to provide a seamless user experience.",
    ],
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
        Latest Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
              highlight={project.highlight}
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
