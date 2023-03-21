import React from "react";
import styles from "../styles/Styles";
import Check from "../assets/check_mark.svg";

const WhyChoseSP = () => {
  return (
    <section id="home" className={`wcsp ${styles.section_container}`}>
      <div
        className={`text-night_rider max-w-[1680px] w-full md:px-[145px] ${styles.transitions}`}
      >
        <div className="text-[14px] font-[400] w-full max-w-[428px]">
          <h2 className={`left-title ${styles.small_title} mb-[50px]`}>
            WHY CHOOSE SOCIAL SPONGE
          </h2>
          <div>
            <p className="text-[24px] tracking-[0.05em] font-[500] mb-[10px]">
              Your complete
              <br />
              cleaning services provider
            </p>
            <p className="text-grey tracking-[0.05em]">
              Make your clients happy by keeping your business hygienic and
              tidy. We offer custom service packages tailored to the specific
              cleaning needs of your facility.
            </p>
          </div>
          <div className="text-eclipse mt-[72px] flex flex-col gap-[30px]">
            <div>
              <div className="flex gap-[20px] mb-[6px]">
                <img src={Check} alt="" />
                <p className="text-[18px] font-[500]">
                  Customer focused reviews
                </p>
              </div>
              <div className="text-grey tracking-[0.05em]">
                We hire only professionals in cleaning services. They will clean
                your business to look like new.
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] mb-[6px]">
                <img src={Check} alt="" />
                <p className="text-[18px] font-[500]">We are committed</p>
              </div>
              <div className="text-grey tracking-[0.05em]">
                Cleaning all kinds of places and take care of everything for
                you.
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] mb-[6px]">
                <img src={Check} alt="" />
                <p className="text-[18px] font-[500]">
                  Regular and monthly cleaning
                </p>
              </div>
              <div className="text-grey tracking-[0.05em]">
                All our cleaners are pure professionals, so you don’t need to
                worry about anything.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseSP;
