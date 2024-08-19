import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p12 flex justify-between  ">
        <span>
          <Link href={"/"}>
            <img
              src="/images/logo_size_invert.jpg"
              alt="logo"
              className="w-12.3 h-14"
            />
          </Link>{" "}
        </span>
        <p className="text-slate-600 mt-3">all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
