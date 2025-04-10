"use client";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const handleSubmit = (e) => {
  e.preventDefault();
};
const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="h-auto mt-8 py-10 ">
          <div className="flex items-center gap-4">
            <span className="">
              <IoLogoWhatsapp color="green" size={30} />
            </span>
            <Link href="https://wa.link/ogqrbb" className="text-white">
              Click to Send me message
            </Link>
          </div>
          <div className="my-8 flex items-center gap-4">
            <span className="">
              <TiSocialLinkedin size={30} color="white" />
            </span>
            <Link
              href="https://www.linkedin.com/in/nel21"
              target="_blank"
              className="text-white"
            >
              chinwuba Nelson
            </Link>
          </div>
          <div className="my-8 flex items-center gap-4">
            <span className="">
              <MdEmail size={30} color="white" />
            </span>
            <span className="text-white">
              <a href="mailto:chinwubanelson@gmail.com?subject=Hello chinwuba Nelson&body=Greetings from me...">
                chinwubanelson@gmail.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <span className="">
              <FaPhone color="white" size={30} />
            </span>
            <span className="text-white">
              <a href="tel:08030507512">08030507512</a>
            </span>
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="chinwubajoshua94@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
