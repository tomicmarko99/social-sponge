import React from "react";
import Email from "../../assets/email-icon.png";

const FooterForm = () => {
  return (
    <form className="text-[14px] text-night_rider w-full md:max-w-[428px] flex flex-col items-center mb-0">
      <label>Subscribe to news letter</label>
      <div className="w-full px-[15px] py-[11px] bg-[#E9E9E9] mt-[10px] flex justify-between gap-[20px]">
        <input
          type="email"
          placeholder="Mail address"
          required
          className="w-full placeholder:text-night_rider bg-[#E9E9E9] outline-none"
        />
        <div className="flex">
          <button type="submit">
            <img src={Email} alt="Email icon" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FooterForm;
