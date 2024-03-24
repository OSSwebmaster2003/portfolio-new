import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col h-screen lg:items-center gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-no-repeat bg-contain bg-about h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="mb-4 h3">
              I'm a Freelance Frontend Developer with over 2 years of
              experience.
            </h3>
            <p className="mb-6">
              Coding enthusiast with a passion for frontend development, I
              thrive on transforming ideas into captivating digital experiences.
              With a keen eye for design and a dedication to clean, efficient
              code, I specialize in crafting user-friendly interfaces that
              elevate brands and engage audiences. Let's create something
              extraordinary together.
            </p>
            <div className="flex mb-12 gap-x-6 lg:gap-x-10">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="text-sm font-primary tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="text-sm font-primary tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="text-sm font-primary tracking-[2px]">
                  Clients <br />
                  Satisfied
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
