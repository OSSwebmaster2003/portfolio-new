import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-start flex-1"
          >
            <div>
              <h4 className="mb-2 text-xl font-medium tracking-wide uppercase text-accent">
                Get in touch.
              </h4>
              <h2 className="text-[45px] uppercase lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-start flex-1 p-6 pb-24 mb-10 border rounded-2xl gap-y-6 lg:mb-0"
          >
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
              type="text"
              placeholder="Your name"
            />
            <input
              className="w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
              type="email"
              placeholder="Your email"
            />
            <textarea
              className="w-full py-12 mb-12 transition-all bg-transparent border-b outline-none resize-none placeholder:text-white focus:border-accent"
              placeholder="Your message"
              rows="4"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
