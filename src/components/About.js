import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col h-screen lg:items-center gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0">
          {/* image  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-no-repeat bg-contain bg-about h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text  */}
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              soluta, similique fuga amet esse deleniti officiis labore officia
              rerum quisquam atque nesciunt nostrum quis, est dolorum sequi
              quasi et reiciendis.
            </p>
            {/* stats  */}
            <div className="flex mb-12 gap-x-6 lg:gap-x-10">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="text-sm font-primary tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="text-sm font-primary tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={30} duration={3} /> : null}
                </div>
                <div className="text-sm font-primary tracking-[2px]">
                  Clients <br />
                  Satisfied
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <button className="btn btn-lg">Contact me</button>
              <a href="/#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
