"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex items-start px-4 sm:px-8 pt-32 pb-10 bg-[#2F4156] min-h-[88vh]"> {/* Keeping the original background color */}
    
      <div className="grid grid-cols-1 sm:grid-cols-12 w-full max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            
            <br />
            <TypeAnimation
              sequence={[
                "Maham Saif",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Video Editor",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-12 lg:text-xl leading-relaxed">
            Creative Front-end Developer with a passion for crafting responsive websites
            <br />
            with expertise in front-end development and proficiency in video editing.
          </p>
          <div>
            <Link
              href="/#Contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-400 hover:bg-primary-600 text-white transition-all duration-300 ease-in-out"
            >
              Hire Me
            </Link>

            {/* <Link
              href="/mycv.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-primary-600 text-white mt-3 transition-all duration-300 ease-in-out"
            >
              <span className="block hover:bg-to-secondary-200 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link> */}
            <Link
  href="/mycv.pdf" // Path to your CV file (in the public folder or external link)
  download // This attribute should prompt the download
  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-primary-600 text-white mt-3 transition-all duration-300 ease-in-out"
>
  <span className="block hover:bg-to-secondary-200 rounded-full px-5 py-2">
    Download CV
  </span>
</Link>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile pic.jpeg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={800}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
