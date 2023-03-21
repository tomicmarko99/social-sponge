import React, { useEffect, useState } from "react";
import Plus from "../../assets/Plus.svg";
import Minus from "../../assets/Minus.svg";

const Accordion = ({ no, question, answer, length }) => {
  const [open, setOpen] = useState(false);
  const handleAccordion = () => {
    setOpen(!open);
  };

  const [last, setLast] = useState(false);

  useEffect(() => {
    if (no === length) {
      setLast(true);
    } else {
      setLast(false);
    }
  }, [no, length]);
  return (
    <div className="w-full flex">
      <div className="flex gap-[25px]">
        <div className="relative flex justify-center items-start">
          <div
            className={`absolute w-[2px] bg-sunglow ${
              last && !open ? "h-[0px]" : "h-full"
            }`}
          />
          <button
            onClick={() => handleAccordion()}
            className="relative flex justify-center items-center"
          >
            {open && (
              <div className="absolute w-[41px] h-[41px] bg-sunglow rounded-full opacity-[50%]" />
            )}
            <div className="text-[8px] z-10 font-[600] w-[29px] h-[29px] flex justify-center items-center bg-sunglow rounded-full">
              {open ? (
                <img src={Minus} alt="" className="w-auto" />
              ) : (
                <img src={Plus} alt="" className="w-auto" />
              )}
            </div>
          </button>
        </div>
        <div className={last ? "mb-0" : "mb-[43px]"}>
          <div className="text-[18px] font-[500] mb-[10px]">{question}</div>
          {open && (
            <div className="text-[14px] text-grey font-[400] tracking-[.05em]">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
