"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Hooks</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>React Query</li>
        <li>Redux Toolkit</li>
        <li>RESTFUL APIs</li>
        <li>AWS</li>
        <li>GIT</li>
        <li>Vercel</li>
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
        <h2 className=""> Role: MERN Developer </h2>
        <p className="">
          Built and deployed dynamic, scalable web apps using the MERN stack.
          Developed a real-time chat app with Socket.io, JWT auth (HTTP-only
          cookies), Gemini AI, and online user tracking. Developed a pharmacy
          e-commerce featuring payment integration (Stripe), admin dashboard,
          and product management. Engineered OTP-based email verification and
          password reset with Google SMTP.
        </p>
        

        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Fiverr [2019 to 2020]</h1>
        <h2 className=""> Role: Frontend Developer</h2>
        <p className="">
          Designed, developed, and maintained key modules of complex web
          applications including e-commerce platforms, hospital admin dashboards
          and other custom applications.Implemented third-party APIs and
          services to enhance functionality and optimize the user experience.
        </p>
        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Megabon [2019]</h1>
        <h2 className=""> Role: Frontend developer</h2>
        <p className="">
          : Worked closely with UI/UX designers to transform design mockups into
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
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Frontend-focused MERN stack developer with 5+ years of experience in
            building responsive and scalable web apps. Skilled in React/Next.js,
            REST APIs and modern authentication flows.
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
