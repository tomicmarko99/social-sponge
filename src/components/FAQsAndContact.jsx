import React from "react";
import styles from "../styles/Styles";
import Accordion from "./widgets/Accordion";
import faqs from "../data/faqs.json";
import ContactForm from "./widgets/ContactForm";

const FAQsAndContact = () => {
  const faqsLength = faqs.length;
  return (
    <section className="w-full  bg-white px-[20px] flex flex-col items-center justify-center">
      <div
        className={`text-night_rider max-w-[1680px] w-full md:px-[145px] ${styles.transitions}`}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[130px]">
          <section
            id="faq"
            className="pt-[80px] md:py-[110px] flex items-center"
          >
            <div>
              <h2 className={`left-title ${styles.small_title} mb-[43px]`}>
                FREQUENTLY ASKED QUESTIONS
              </h2>
              {faqs.map((faq, i) => {
                let no = i + 1;
                return (
                  <Accordion
                    key={i}
                    no={no}
                    question={faq.question}
                    answer={faq.answer}
                    length={faqsLength}
                  />
                );
              })}
            </div>
          </section>
          <section
            id="contact"
            className="pt-[80px] pb-[80px] md:pt-[110px] md:pb-[110px]"
          >
            <div>
              <h2 className={`left-title ${styles.small_title} mb-[43px]`}>
                DO YOU HAVE SOME OTHER QUESTION?
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FAQsAndContact;
