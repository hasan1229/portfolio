import React, { useState, useEffect } from "react";

import pic from "../../public/hasan.jpg";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { MdOutlinePhp } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

function Home() {
  const [currentText, setCurrentText] = useState("");
  const phrases = ["programmer", "developer", "designer"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200;
    const pauseAfterComplete = 1000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === phrases[phraseIndex].length) {
        setIsDeleting(true);
        setTimeout(() => {}, pauseAfterComplete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typingSpeed);

    setCurrentText(phrases[phraseIndex].slice(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-20 md:px-20 my-20 flex justify-between items-center py-36">
        <div className="w-1/2">
          <div>
            <p>Welcome to my feed</p>
            <h2 className="text-3xl">
              Hello, I am a{" "}
              <span style={{ color: "red" }}>{currentText}</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex-row">
              <div className="py-4">available on</div>
              <div className="flex justify-between py-2">
                <FaFacebook size={24} />
                <IoLogoWhatsapp size={24} />
                <FaInstagram size={24} />
              </div>
            </div>

            <div className="flex-row">
              <div className="py-4">available on</div>
              <div className="flex justify-between py-2">
                <GrReactjs size={24} />
                <MdOutlinePhp size={24} />
                <RiTailwindCssFill size={24} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            className="h-96 w-96 rounded-full mr-20"
            src={pic}
            alt="Hasan"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
