import React from "react";
import styles from "../styles/Styles";
import { ReviewsList } from "../data/Reviews";
import ReviewCard from "./widgets/ReviewCard";

const Reviews = () => {
  return (
    <section id="home" className={`reviews ${styles.section_container}`}>
      <div
        className={`text-night_rider max-w-[1680px] w-full md:px-[145px] flex flex-col items-center ${styles.transitions}`}
      >
        <div className="max-w-[1080px] text-center  mb-[40px] md:mb-[112px]">
          <h2 className={`center-title ${styles.small_title} mb-[20px]`}>
            REVIEWS
          </h2>
          <p className="text-[14px] font-[500]">
            Welcome to <strong>Social Sponge</strong>, no. 1 online marketplace
            for finding domestic cleaners. Through{" "}
            <strong>Social Sponge</strong>
            you can easily find liability insured cleaners for your home. Scroll
            through cleaner profiles to compare prices, ratings and cleaning
            experience and find the best match for you and your home.
          </p>
        </div>
        <div className="reviews__container w-full py-[10px] md:py-[114px] flex justify-center">
          <div className="text-[14px] w-full max-w-[1080px] mx-center grid grid-cols-1 cd:grid-cols-2 gap-x-[30px] gap-y-[69px]">
            {ReviewsList.map((review, i) => {
              return (
                <ReviewCard
                  key={i}
                  avatar={review.avatar}
                  name={review.user}
                  recension={review.recension}
                  location={review.location}
                  sponges={review.rate}
                  jobs={review.jobs}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
