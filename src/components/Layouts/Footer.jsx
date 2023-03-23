import React from "react";
import styles from "../../styles/Styles";
import Logo from "../../assets/SocialSpogne Logo2.png";
import Facebook from "../../assets/facebook-logo.png";
import Twitter from "../../assets/twitter-logo.png";
import Instagram from "../../assets/instagram-logo.png";
import FooterForm from "../widgets/FooterForm";

const Footer = () => {
  return (
    <footer className="text-grey font-[400] tracking-[.05em] bg-very_light_grey w-full px-[20px] py-[55px] flex justify-center">
      <div className="max-w-[1680px] w-full grid grid-cols-1 md:grid-cols-4 gap-[50px] md:gap-[100px]">
        <div className="text-[12px] md:col-span-1 flex flex-col justify-start gap-[21px]">
          <img src={Logo} alt="Social Sponge Logo" className="max-w-[150px]" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad. nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad.
          </p>
        </div>
        <div className="md:col-span-2 md:px-[100px] py-[50px] border-y-[2px] md:border-y-0 border-x-0 md:border-x-[1.5px] border-[#CBCBCB] flex flex-col justify-center items-center">
          <FooterForm />
          <nav className="text-[15px] w-full mt-[50px] flex flex-col md:flex-row md:flex-wrap justify-center gap-[20px]">
            <a href="/">Email Marketing</a>
            <a href="/">Branding</a>
            <a href="/">Offline</a>
            <a href="/">Contact</a>
            <a href="/">FAQs</a>
            <a href="/">Campaigns</a>
          </nav>
        </div>
        <div className="md:col-span-1 flex flex-col justify-center items-center cd:items-end">
          <div className="flex gap-[36px]">
            <a
              href="/"
              target="_blank"
              className={`w-[33px] h-[33px] p-[8px] rounded-[5px] flex justify-center align-center ${styles.button}`}
            >
              <img src={Facebook} alt="Follow Social Spogne on Facebook" />
            </a>
            <a
              href="/"
              target="_blank"
              className={`w-[33px] h-[33px] p-[8px] rounded-[5px] flex justify-center align-center ${styles.button}`}
            >
              <img src={Twitter} alt="Follow Social Spogne on Twitter" />
            </a>
            <a
              href="/"
              target="_blank"
              className={`w-[33px] h-[33px] p-[8px] rounded-[5px] flex justify-center align-center ${styles.button}`}
            >
              <img src={Instagram} alt="Follow Social Spogne on Instagram" />
            </a>
          </div>
          <div className="text-[12px] text-center cd:text-right mt-[50px]">
            <p>Copyright &copy; 2023 SocialSponge, All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
