import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "UI/UX Design",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa esse quasi quo doloremque pariatur laudantium nostrum ab mollitia necessitatibus quas reiciendis eaque impedit atque et molestiae rerum voluptate, voluptates tenetur.",
    link: "Learn more",
  },
  {
    name: "Web Development",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa esse quasi quo doloremque pariatur laudantium nostrum ab mollitia necessitatibus quas reiciendis eaque impedit atque et molestiae rerum voluptate, voluptates tenetur.",
    link: "Learn more",
  },
  {
    name: "LMS Services",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa esse quasi quo doloremque pariatur laudantium nostrum ab mollitia necessitatibus quas reiciendis eaque impedit atque et molestiae rerum voluptate, voluptates tenetur.",
    link: "Learn more",
  },
  {
    name: "CRM Dashboards",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa esse quasi quo doloremque pariatur laudantium nostrum ab mollitia necessitatibus quas reiciendis eaque impedit atque et molestiae rerum voluptate, voluptates tenetur.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 bg-no-repeat lg:bg-services lg:bg-bottom mix-blend-lighten lg:mb-0"
          >
            <h2 className="mb-6 h2 text-accent">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Frontend Developer with over 5 years of experince
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services  */}
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
