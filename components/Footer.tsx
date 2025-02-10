"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100); // 100px aşağı inince görünür
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-[#b3d9ff]">
      {/* Dalgalı SVG Arka Plan */}
      <svg
        className="absolute top-[-50px] w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#4B5563"
          fillOpacity="1"
          d="M0,160L40,186.7C80,213,160,267,240,266.7C320,267,400,213,480,181.3C560,149,640,139,720,133.3C800,128,880,128,960,138.7C1040,149,1120,171,1200,165.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      {/* Footer İçeriği */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        {/* Footer Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="mb-6 mx-auto"
        >
          <img
            src="/character.svg"
            alt="Footer Character"
            className="w-24 h-24 mx-auto"
          />
        </motion.div>

        <h3 className="text-5xl font-bold mb-4 text-gray-800 hover:text-gray-900 transition-colors duration-300">
          İletişim
        </h3>
        <p className="text-lg mb-2 text-gray-700 hover:text-black transition-all duration-300">
          Telefon: +90 123 456 7890
        </p>
        <p className="text-lg mb-6 text-gray-700 hover:text-black transition-all duration-300">
          Email: merve@example.com
        </p>

        {/* Sosyal Medya İkonları */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-8 text-4xl"
        >
          <a
            href="https://github.com/mervekrhn"
            target="_blank"
            className="text-gray-400 hover:text-black hover:scale-110 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/merve-karahan/"
            target="_blank"
            className="text-gray-400 hover:text-blue-600 hover:scale-110 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
