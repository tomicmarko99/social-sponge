import React from "react";
import styles from "../styles/Styles";
import Carousel from "./widgets/Carousel";

const AsignTasks = () => {
  return (
    <section className="pt-[40px]">
      <div className="text-night_rider flex flex-col items-center gap-[20px]">
        <h2 className={`center-title ${styles.small_title}`}>ASIGN TASKS</h2>
        <p className="text-[14px] font-[500]">
          Tell your cleaner if you have special tasks for them
        </p>
      </div>
      <Carousel />
    </section>
  );
};

export default AsignTasks;
