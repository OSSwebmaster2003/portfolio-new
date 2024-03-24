import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Otabek <span>Sodiqov</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={["Developer", 1000, "Programmer", 1000]}
                speed={150}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-lg mx-auto mb-8 lg:mx-0"
            >
              "Welcome to Otabek's World of Web Development! I'm a frontend
              developer specializing in crafting captivating user experiences.
              With expertise in <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong> and frameworks like{" "}
              <strong>React</strong>, I bring designs to life with precision and
              creativity. Let's collaborate to build stunning, responsive
              websites that leave a lasting impression. Let's connect today!"
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0"
            >
              <button className="btn btn-lg">
                <Link to="contact" smooth={true}>
                  Contact me
                </Link>
              </button>
              <Link
                to="work"
                smooth={true}
                className="cursor-pointer text-gradient btn-link"
              >
                My Portfolio
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="http://t.me/Otabek_Sobirjonovich"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://github.com/OSSwebmaster2003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/otabek-s-081013266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 hidden lg:flex max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
