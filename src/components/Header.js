import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            className="flex flex-col items-start justify-start"
          >
            <span className="-mb-1 text-3xl font-bold text-gradient font-primary">
              Otabek
            </span>
            <span className="text-4xl font-bold tracking-wider font-secondary">
              Sodiqov
            </span>
          </Link>
          <button className="btn btn-sm">
            <Link to="contact" smooth={true}>
              Work with me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
