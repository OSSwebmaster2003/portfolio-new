import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

// services data
const services = [
  {
    name: "Web Development",
    description:
      "Elevate your online presence with my comprehensive web development service, where i blend creativity and technical prowess to deliver tailor-made solutions that bring your vision to life.",
    link: "Learn more",
  },
  {
    name: "Legacy front-end modernization",
    description:
      "We help update an older or outdated front-end codebase to make it more modern, efficient, and effective. Our team picks an appropriate front-end framework for the project, considering the size of the codebase and its complexity.",
    link: "Learn more",
  },
  {
    name: "LMS Services",
    description:
      "Unlock the potential of online education with our LMS services, providing robust platforms and tailored solutions to facilitate seamless learning experiences for students and educators alike.",
    link: "Learn more",
  },
  {
    name: "CRM Systems",
    description:
      "Empower your business operations with our cutting-edge CRM systems, streamlining customer interactions and maximizing efficiency through intuitive interfaces and advanced analytics.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 bg-no-repeat lg:bg-services lg:bg-bottom mix-blend-lighten lg:mb-0"
          >
            <h2 className="mb-6 h2 text-accent">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Frontend Developer with over 2 years of experince
            </h3>
            <button className="btn btn-sm">
              <Link to="work" smooth={true}>
                See my work
              </Link>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border-b border-white/20 mb-[38px] flex py-3"
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {service.name}
                    </h4>
                    <p className="text-sm leading-tight font-secondary">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end flex-1">
                    <a
                      href="/#"
                      className="btn w-9 h-9 mb-[42px] flex items-center justify-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="/#" className="text-sm text-gradient">
                      {service.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
