import React from "react";
import styles from "../styles/Styles";
import Location from "../assets/location.svg";
import Date from "../assets/date.svg";
import Stars from "../assets/stars.svg";

const HowItWorks = () => {
  return (
    <section className={styles.section_container}>
      <div className="text-night_rider max-w-[1080px] w-full flex flex-col gap-5 items-center">
        <h2 className={`center-title ${styles.small_title}`}>HOW IT WORKS</h2>
        <div className="w-full mt-[42px] md:mt-[62px] lg:px-[145px] grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-[90px]">
          <div className={styles.hiw_card}>
            <img src={Location} alt="" className="h-[94px]" />
            <p className={`mt-[50px] mb-[25px] ${styles.small_title}`}>
              Enter your location
            </p>
            <p className="text-[14px] font-[400]">
              Enter a name of your city to find cleaners available in your area.
            </p>
          </div>
          <div className={styles.hiw_card}>
            <img src={Date} alt="" className="h-[94px]" />
            <p className={`mt-[50px] mb-[25px] ${styles.small_title}`}>
              Pick a desired date
            </p>
            <p className="text-[14px] font-[400]">
              Select the preferred date, time and frequency of your clean.
            </p>
          </div>
          <div className={styles.hiw_card}>
            <img src={Stars} alt="" className="h-[94px]" />
            <p className={`mt-[50px] mb-[25px] ${styles.small_title}`}>
              Enjoy your free time
            </p>
            <p className="text-[14px] font-[400]">
              An experienced, fully-equipped housekeeping professional will be
              there on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
