import React from "react";
import styles from "../styles/Styles";
import Google from "../assets/google-play.png";
import Store from "../assets/app-store.png";

const StayInTouch = () => {
  return (
    <section id="home" className={styles.section_container}>
      <div className="text-night_rider text-center w-full max-w-[474px] flex flex-col items-center">
        <h2 className={`center-title ${styles.small_title} mb-[20px]`}>
          STAY IN TOUCH
        </h2>
        <p className="text-[14px] font-[500] mb-[60px]">
          Be in direct communication with your job giver.
          <br />
          Communicate with them by using our web or mobile app.
        </p>
        <p className="text-[18px] font-[500]">
          Comming soon on both platforms...
        </p>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] mt-[30px]">
          <a
            href="#"
            target="_blank"
            className={`p-[16px] rounded-xl ${styles.button}`}
          >
            <img src={Google} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            className={`p-[16px] rounded-xl ${styles.button}`}
          >
            <img src={Store} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
