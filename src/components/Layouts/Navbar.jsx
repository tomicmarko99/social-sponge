import React, { useState } from "react";
import Logo from "../../assets/SocialSponge Logo.png";
import styles from "../../styles/Styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="text-[12px] text-night_rider font-[500] w-full px-[20px] py-[26px] flex justify-center">
      <div className="tracking-[0.05rem] max-w-[1680px] w-full flex justify-between items-center gap-5">
        <a href="/">
          <img
            src={Logo}
            alt="Social Sponge"
            className={`max-h-[35px] md:max-h-[55px] ${styles.transitions}`}
          />
        </a>
        <div className="space-x-[40px] hidden md:block">
          <a href="/">HOME</a>
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
          className={`text-xl block md:hidden active:rotate-180 ${styles.transitions}`}
        >
          {toggle ? (
            <i class="fa-solid fa-bars"></i>
          ) : (
            <i class="fa-solid fa-x"></i>
          )}
        </button>
      </div>
      <div
        className={`fixed md:hidden top-0 ${
          toggle ? "-right-[150%]" : "right-0"
        } w-full h-screen ${
          styles.transitions
        } ease-linear flex justify-end gap-3 shadow-md`}
      >
        <div
          className="w-full h-screen navbar__galssmorphism"
          onClick={() => handleToggle()}
        ></div>
        <div className="absolute w-[70%] bg-[#fff] h-full px-[20px] py-[29px]">
          <div className="flex justify-end pb-2 border-b-[1px]">
            <button onClick={() => handleToggle()} className="text-xl">
              <i class="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <a href="/">HOME</a>
            <a href="/">CONTACT</a>
            <a href="/">FAQ</a>
            <a href="/">EN</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
