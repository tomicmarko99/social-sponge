import React from "react";
import styles from "../../styles/Styles";
import Arrow from "../../assets/arrow-down.png";

const ContactForm = () => {
  return (
    <form className="text-[14px] font-[400]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <input
          type="text"
          placeholder="First name*"
          required
          className={styles.input_cell}
        />
        <input
          type="text"
          placeholder="Last name*"
          required
          className={styles.input_cell}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] mt-[10px]">
        <input
          type="email"
          placeholder="Mail address*"
          required
          className={styles.input_cell}
        />
        <input
          type="tel"
          placeholder="Phone number"
          className={styles.input_cell}
        />
      </div>
      <div className="mt-[10px]">
        <div class="relative">
          <select className={`appearance-none ${styles.input_cell}`} required>
            <option value="" disabled selected hidden>
              Choose type of question*
            </option>
            <option value="someOption">Question type 1</option>
            <option value="otherOption">Question type 2</option>
            <option value="otherOption">Other question type</option>
          </select>
          <div class="pointer-events-none  absolute inset-y-0 right-0 px-[30px] flex items-center">
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-[10px]">
        <textarea
          type="text"
          placeholder="Message..."
          className={`h-[164px] ${styles.input_cell}`}
        />
      </div>
      <div className="mt-[10px]">
        <button
          type="submit"
          className={`font-[600] px-[20px] py-[11px] flex gap-[80px] w-full md:w-auto justify-between items-center ${styles.button}`}
        >
          Send us a message <img src={Arrow} alt="" className="-rotate-90" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
