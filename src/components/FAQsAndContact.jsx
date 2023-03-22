import React from "react";
import styles from "../styles/Styles";
import Accordion from "./widgets/Accordion";
import faqs from "../data/faqs.json";
import ContactForm from "./widgets/ContactForm";

const FAQsAndContact = () => {
  const faqsLength = faqs.length;
  return (
    <section id="faq" className={styles.section_container}>
      <div
        className={`text-night_rider max-w-[1680px] w-full md:px-[145px] ${styles.transitions}`}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[130px]">
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
          <div>
            <h2 className={`left-title ${styles.small_title} mb-[43px]`}>
              DO YOU HAVE SOME OTHER QUESTION?
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsAndContact;
