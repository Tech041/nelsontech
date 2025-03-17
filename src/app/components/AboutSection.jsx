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
          Klicks Communications [2020 to current]
        </h1>
        <h2 className=""> Role: React Developer </h2>
        <p className="">
          Developed scalable, responsive, and dynamic web applications which
          include e-commerce, learning management system, SaaS UI, loan apps
          etc. Utilizing React, Next.js, JavaScript, TypeScript, and Tailwind
          CSS. Utilized Redux and Context API for efficient global state
          management. • Consumed REST APIs and third-party services to enhance
          application functionality and performance.
        </p>
        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Upwork [2020 to current]</h1>
        <h2 className=""> Role: Front End Developer</h2>
        <p className="">
          Designed, developed, and maintained key modules of complex web
          applications like e-commerce, hospital admin dashboard etc. Using
          React.js/Next.js and TypeScript, while integrating .NET, Django,
          Spring Boot, and REST APIs. Implemented third-party APIs and services
          to enhance functionality and optimize the user experience.
        </p>
        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Fiverr [2019 to 2020]</h1>
        <h2 className=""> Role: Front end Developer</h2>
        <p className="">
          Developed and maintained various modules of complex web applications,
          employing React.js/Next.js and TypeScript and consuming .Net, Django,
          Spring Boot and REST APIs. Integrated third-party APIs and services to
          extend application functionalities, improving the overall user
          experience.
        </p>
        <hr className="my-10" />
        <h1 className="text-purple-500 text-2xl ">Megabon [2019]</h1>
        <h2 className=""> Role: Intern Developer</h2>
        <p className="">
          Worked closely with UX/UI designers to transform design mockups into
          pixel-perfect, responsive user interfaces which include gym app,
          e-commerce and LMS applications. Using React, Next.js,
          TypeScript/JavaScript, Tailwind CSS, Redux, and other front-end
          technologies. • Implemented server-side rendering (SSR) and static
          site generation (SSG) with Next.js to improve application performance
          and SEO. Integrated and consumed REST APIs to enhance functionality.
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
            Express, HTML5, CSS3, Tailwind CSS,Bootstrap,Hooks ,RESTFUL
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
