"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true);

  // Karakterin 5 saniye görünüp kaybolması
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false); // 5 saniye sonra kaybolur
    }, 5000);

    return () => clearTimeout(timeout); // Bellek temizliği
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center text-text relative">
      {/* Eğilimli Header */}
      <header className="relative w-full h-[60vh] bg-[#b3d9ff] text-white">
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="absolute w-full h-full flex flex-col justify-start items-center pt-10"
  >
    <h1 className="text-7xl font-extrabold mb-5 italic tracking-wide mt-20">
      Merhaba, Ben <span className="text-[#5b5bff]">Merve!</span> 👋
    </h1>

    <p className="text-lg font-medium text-[#444]">
      Full Stack Developer 🚀 | Next.js & TypeScript
    </p>
  </motion.div>

  {/* Eğilimli Alt Kısım */}
  <svg
    className="absolute bottom-0 w-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#ffffff"
      fillOpacity="1"
      d="M0,160L40,186.7C80,213,160,267,240,266.7C320,267,400,213,480,181.3C560,149,640,139,720,133.3C800,128,880,128,960,138.7C1040,149,1120,171,1200,165.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
</header>


      {/* İçerik */}
     {/* İçerik */}
<section className="bg-white w-full py-40 px-10 text-center">
  {/* Başlık */}
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl font-poppins font-semibold text-gray-800 mb-8"
  >
    Hayallerinizi Gerçekleştirecek Projeler!
  </motion.h2>

  {/* Buton */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="flex justify-center"
  >
    <motion.a
      href="/projects"
      whileHover={{
        scale: 1.1,
        backgroundColor: "#34D399", // Hover rengi (yeşil)
        boxShadow: "0px 10px 20px rgba(52, 211, 153, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
    >
      Projelerime Göz At 🚀
    </motion.a>
  </motion.div>
</section>



      {/* Sol Altta Karakter ve Mesaj */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: -300, opacity: 0, scale: 0.9 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: 300,
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute left-10 bottom-32 flex flex-col items-center"
          >
            {/* İkon */}
            <motion.div className="relative flex justify-center items-center">
              <img
                src="/kadın.svg"
                alt="Character Illustration"
                className="w-36 h-auto z-10 bg-transparent"
              />
            </motion.div>

            {/* Mesaj */}
            <p className="text-md font-medium text-primary mt-3 text-center">
              Yazılım geliştirme tutkusu ile <br /> harika projeler üretiyorum!
            </p>
            <span className="text-xs text-gray-500 italic">
              Daha fazlası için projelerimi inceleyin. 🚀
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
