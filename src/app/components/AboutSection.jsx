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
        <li>Certified Web developer</li>
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
          Klicks Communications [2023 to current]
        </h1>
        <h2 className=""> Role: React Developer </h2>
        <p className="">
          Develop scalable, responsive and dynamic web applications using React,
          Next.js, JavaScript, TypeScript and Tailwind CSS. Use Redux and
          Context API for global state management. • Integrate REST APIs and
          other third-party services.
        </p>
        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Fiverr [2023 to current]</h1>
        <h2 className=""> Role: Front End Developer</h2>
        <p className="">
          Developed and maintained various modules of complex web applications,
          employing React.js/Next.js and TypeScript and consuming .Net, Django,
          Spring Boot and REST APIs. • Integrated third-party APIs and services
          to extend application functionalities, improving the overall user
          experience.
        </p>
        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Upwork [2023 to current]</h1>
        <h2 className=""> Role: Front end Developer</h2>
        <p className="">
          Developed and maintained various modules of complex web applications,
          employing React.js/Next.js and TypeScript and consuming .Net, Django,
          Spring Boot and REST APIs. • Integrated third-party APIs and services
          to extend application functionalities, improving the overall user
          experience.
        </p>
        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Megabon [2022]</h1>
        <h2 className=""> Role: Intern Developer</h2>
        <p className="">
          Developed and maintained various modules of a complex web application,
          employing React.js/Next.js and TypeScript for the frontend and
          consumed .Net, Django, Spring Boot and REST APIs , Integrated
          third-party APIs and services to extend application functionalities,
          improving the overall user experience.
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
            I am a front end web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, React, Next js, Redux, Node.js,
            Express, HTML5, CSS3, Tailwind CSS,Bootstrap,Hooks RESTFUL
            APIs,React Query,Vercel and Git. I am a quick learner and I am
            always looking to expand my knowledge and skill set. I am a team
            player and I am excited to work with others to create amazing
            applications.
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
