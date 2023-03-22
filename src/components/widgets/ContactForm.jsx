import React from "react";
import styles from "../../styles/Styles";
import Arrow from "../../assets/arrow-down.png";

const ContactForm = () => {
  return (
    <form className="text-[14px] font-[400]">
      <div className="grid grid-cols-1 cd:grid-cols-2 gap-[10px]">
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
      <div className="grid grid-cols-1 cd:grid-cols-2 gap-[10px] mt-[10px]">
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
        <div className="relative">
          <select
            defaultValue="Choose type of question*"
            className={`appearance-none ${styles.input_cell}`}
            required
          >
            <option value="Choose type of question*" disabled hidden>
              Choose type of question*
            </option>
            <option value="Question type 1">Question type 1</option>
            <option value="Question type 2">Question type 2</option>
            <option value="Other">Other question type</option>
          </select>
          <div className="pointer-events-none  absolute inset-y-0 right-0 px-[20px] flex items-center">
            <img src={Arrow} alt="Choose type of question*" />
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
          className={`font-[600] px-[20px] py-[11px] flex gap-[80px] w-full cd:w-auto justify-between items-center ${styles.button}`}
        >
          Send us a message{" "}
          <img
            src={Arrow}
            alt="Send us a message > Arrow icon"
            className="-rotate-90"
          />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
