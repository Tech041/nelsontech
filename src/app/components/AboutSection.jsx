"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className=" w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-3">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>RESTful APIs</li>
        <li>Socket.IO</li>
        <li>Cloudinary</li>
        <li>NodeMailer</li>
        <li>MongoDB</li>
        <li>Hooks</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Zod</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>React Query</li>
        <li>Redux Toolkit</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>GIT</li>
        <li>Vercel</li>
        <li>Render</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Klick Institute of Computers and ICT studies</li>
        <li>Nnamdi Azikiwe University </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Diploma in Software development</li>
        <li>Bachelor of Pharmacy</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="list-disc pl-2">
        <h1 className="text-purple-500 text-2xl ">
          Klicks Communications [2020 to current]
        </h1>
        <h2 className=""> Role:Full stack Developer [MERN] </h2>
        <div className="">
          <p>
            •Containerized React applications using Docker and implemented WCAG
            standards for accessibility.
          </p>
          <p className="">
            •Implemented secure OTP-based email verification and password reset
            with Google SMTP.
          </p>{" "}
          <p className="">
            •Developed and implemented real-time functionalities using Socket.io.
          </p>{" "}
          <p className="">
            •Integrated Stripe for secure e-commerce payments and implemented API
            rate limiting using Arcjet.
          </p>{" "}
          <p className="">
            •Implemented TDD with Jest and improved performance via
            code-splitting, and caching (30% speed boost).
          </p>{" "}
          <p className="">
            •Collaborated with 3+ functional teams to gather requirements and
            define project scopes.
          </p>{" "}
          <p className="">
            •Led junior developers in building a responsive and user-friendly
            Learning Management System featuring Google Gemini AI chatbot.
          </p>
          <p className="">
            •Leveraged React Query for managing server state and performing
            mutations to update data seamlessly.
          </p>
        </div>

        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Fiverr [2019 to 2020]</h1>
        <h2 className=""> Role: Frontend Developer</h2>
        <p className="">
          •Designed, developed, and maintained key modules of complex web
          applications including e-commerce platforms, hospital admin dashboards
          and other custom applications.Implemented third-party APIs and
          services to enhance functionality and optimize the user experience.
        </p>
        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Megabon [2019]</h1>
        <h2 className=""> Role: Frontend developer</h2>
        <p className="">
          •Worked closely with UI/UX designers to transform design mockups into
          pixel-perfect, responsive user interfaces which include Learning
          Management System (LMS) featuring google gemini AI.
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/bg_pic.jpg"
          width={500}
          height={500}
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            Professional Summary
          </h2>
          <p className="text-base lg:text-lg">
            Proactive and result-driven React.js/Node.js Developer with 5 years
            of experience designing, building, and maintaining high-performance,
            accessible web applications using the MERN stack. Proven expertise
            in frontend and backend development, real-time systems, RESTful
            APIs, and third-party integrations. Adept at Test-Driven Development
            (TDD), accessibility standards (WCAG), and cross-functional team
            collaboration.
          </p>
          <div className="flex flex-row justify-start flex-wrap mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
