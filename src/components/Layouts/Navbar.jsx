import React, { useState } from "react";
import Logo from "../../assets/SocialSponge Logo.png";
import styles from "../../styles/Styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="w-full px-[20px] py-[26px] flex justify-center">
      <div className="text-[12px] text-night_rider font-[500] tracking-[0.05rem] max-w-[1680px] w-full flex justify-between items-center gap-5">
        <a href="/">
          <img
            src={Logo}
            alt="Social Sponge"
            className={`max-h-[35px] md:max-h-[55px] ${styles.transitions}`}
          />
        </a>
        <div className="space-x-[40px] hidden md:block">
          <a href="/" className="">
            HOME
          </a>
          <a href="/">CONTACT</a>
          <a href="/">FAQ</a>
          <a href="/">EN</a>
        </div>
        <div className="space-x-[20px] hidden md:block">
          <button className="tracking-[0.05rem]">Login</button>
          <button
            className={`tracking-[0.05rem] px-[30px] py-[12px] rounded-full ${styles.button}`}
          >
            REGISTER AS A <strong>SERVICE PROVIDER</strong>
          </button>
        </div>
        <button
          onClick={() => handleToggle()}
          className="text-xl block md:hidden"
        >
          {toggle ? (
            <i className="fa-solid fa-bars-staggered"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
      </div>
      <div className=""></div>
    </nav>
  );
};

export default Navbar;
