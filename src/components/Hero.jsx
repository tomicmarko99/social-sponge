import React from "react";
import styles from "../styles/Styles";
import Check from "../assets/check_mark.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero text-night_rider px-[20px] min-h-[100vh] py-[120px] flex justify-center items-center"
    >
      <div
        className={`max-w-[1680px] w-full md:pl-[145px] ${styles.transitions}`}
      >
        <h1 className="text-[36px] font-[600] mb-[30px]">
          Find top rated cleaners
          <br /> on #1 cleaning platform!
        </h1>

        <div>
          <p className="text-[18px] font-[500] mb-[20px]">
            You decide when and who you
            <br /> want to clean your appartment.
          </p>
          <ul className="text-[14px] text-eclipse font-[400] flex flex-col gap-[16px]">
            <li className="flex gap-[20px]">
              <img src={Check} alt="Check mark" />
              <p>Create tasks</p>
            </li>
            <li className="flex gap-[20px]">
              <img src={Check} alt="Check mark" />
              <p>Hire right cleaning professionals</p>
            </li>
            <li className="flex gap-[20px]">
              <img src={Check} alt="Check mark" />
              <p>Track your cleaning schedule</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
