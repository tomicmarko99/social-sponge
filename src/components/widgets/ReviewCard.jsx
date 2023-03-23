import React from "react";

const ReviewCard = ({ avatar, name, recension, location, jobs, sponges }) => {
  return (
    <div className="reviews__glassmorphism tracking-[.05em] p-5 rounded-[5px] flex flex-col md:flex-row gap-[20px]">
      <div className="flex">
        <div className="w-[80px] md:max-w-[130px]">
          <img src={avatar} alt="" />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-[600] mb-10px">{name}</p>
        <q className="font-[400] mb-[20px]">
          <i>{recension}</i>
        </q>
        <p className="font-[400] opacity-[50%] mb-[20px] flex items-center gap-[8px]">
          <i className="fa-solid fa-location-dot"></i>
          {location} | {jobs} finished jobs
        </p>
        <div>
          <img src={sponges} alt="Rate" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
