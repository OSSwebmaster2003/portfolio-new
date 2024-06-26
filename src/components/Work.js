import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 mb-10 gap-y-12 lg:mb-0"
          >
            <div>
              <h2 className="leading-tight h2 text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Explore my latest works, where I showcase a diverse portfolio of
                captivating frontend projects, each meticulously crafted to
                deliver exceptional user experiences and reflect the latest
                trends in web design.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            <div className="relative overflow-hidden border-2 border-white group group/50 rounded-xl">
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              <img
                src={Img1}
                alt="projects"
                className="transition-all duration-500 group-hover:scale-125"
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-between flex-1 gap-y-10"
          >
            <div className="relative overflow-hidden border-2 border-white group group/50 rounded-xl">
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              <img
                src={Img2}
                alt="projects"
                className="transition-all duration-500 group-hover:scale-125"
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">LMS System</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Learning Management</span>
              </div>
            </div>
            <div className="relative overflow-hidden border-2 border-white group group/50 rounded-xl">
              <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"></div>
              <img
                src={Img3}
                alt="projects"
                className="transition-all duration-500 group-hover:scale-125"
              />
              <div className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24">
                <span className="text-gradient">CRM Dashboard</span>
              </div>
              <div className="absolute z-50 transition-all duration-700 -bottom-full left-12 group-hover:bottom-14">
                <span className="text-3xl text-white">Admin Dashboard</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
