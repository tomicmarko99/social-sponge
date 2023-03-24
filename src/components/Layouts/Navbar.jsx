import React, { useEffect, useState } from "react";
import Logo from "../../assets/SocialSponge Logo.png";
import styles from "../../styles/Styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("");
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 15) {
        setColor("#fff");
        setScroll(true);
      } else {
        setColor("");
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  // Initialize IntersectionObserver when component is loaded
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  // Find sections with observer
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
  return (
    <nav
      style={{ backgroundColor: color }}
      className={`text-[12px] text-night_rider font-[500] w-full px-[20px] fixed flex justify-center z-50 ${
        scroll ? "py-[10px] shadow-md" : "py-[26px]"
      } ${styles.transitions}`}
    >
      <div className="tracking-[0.05rem] max-w-[1680px] w-full flex justify-between items-center gap-5">
        <a href="/">
          <img
            src={Logo}
            alt="Social Sponge Logo"
            className={`max-h-[35px] md:max-h-[55px] ${styles.transitions}`}
          />
        </a>
        <div className="space-x-[40px] hidden md:block">
          <a
            href="#home"
            className={activeSection === "home" ? "font-[700]" : null}
          >
            HOME
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "font-[700]" : null}
          >
            CONTACT
          </a>
          <a
            href="#faq"
            className={activeSection === "faq" ? "font-[700]" : null}
          >
            FAQ
          </a>
          <a href="/">EN</a>
        </div>
        <div className="space-x-[20px] hidden md:block">
          <button className="tracking-[0.05rem]">Login</button>
          <button className={`${styles.navbar__button}`}>
            REGISTER AS A <strong>SERVICE PROVIDER</strong>
          </button>
        </div>
        <button
          onClick={() => handleToggle()}
          className={`text-xl block md:hidden active:rotate-180 ${styles.transitions}`}
        >
          {toggle ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-x"></i>
          )}
        </button>
      </div>
      <div
        className={`fixed md:hidden top-0 ${
          toggle ? "-right-[150%]" : "right-0"
        } w-full h-screen ${
          styles.transitions
        } ease-linear flex justify-end gap-3 shadow-md`}
      >
        <div
          className="w-full h-screen navbar__galssmorphism"
          onClick={() => handleToggle()}
        ></div>
        <div className="absolute w-[70%] bg-[#fff] shadow-md h-full px-[20px] py-[29px]">
          <div className="text-right mb-5">
            <button onClick={() => handleToggle()} className="text-xl">
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="flex mb-5 flex-col gap-3">
            <a
              href="#home"
              onClick={() => handleToggle()}
              className={activeSection === "home" ? "font-[700]" : null}
            >
              HOME
            </a>
            <a
              href="#contact"
              onClick={() => handleToggle()}
              className={activeSection === "contact" ? "font-[700]" : null}
            >
              CONTACT
            </a>
            <a
              href="#faq"
              onClick={() => handleToggle()}
              className={activeSection === "faq" ? "font-[700]" : null}
            >
              FAQ
            </a>
            <a href="/" onClick={() => handleToggle()}>
              EN
            </a>
          </div>
          <div className="flex flex-col gap-3 py-5 border-y-2 border-light_grey">
            <button
              onClick={() => handleToggle()}
              className="tracking-[0.05rem] px-[28px] py-[10px] border-2 rounded-full"
            >
              Login
            </button>
            <button
              onClick={() => handleToggle()}
              className={`${styles.navbar__button}`}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
