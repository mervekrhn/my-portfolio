"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Interview Management System",
    description: "Online mülakat yönetim sistemi.",
    tech: "Next.js, TypeScript, Node.js, PostgreSQL, AWS S3",
  },
  {
    id: 2,
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret sitesi.",
    tech: "React, Next.js, MongoDB, Tailwind CSS",
  },
  {
    id: 3,
    title: "Kişisel Blog Platformu",
    description: "Kullanıcıların blog yazabileceği bir platform.",
    tech: "Django, React, PostgreSQL",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#b3d9ff] flex flex-col items-center">
      {/* Başlık */}
      <header className="relative w-full bg-[#b3d9ff] py-20 text-center">
        <h1 className="text-6xl font-extrabold italic text-white">
          Projelerim
        </h1>
        <p className="text-lg mt-4 text-[#444]">
          Hayallerinizi gerçekleştirecek projeler burada!
        </p>
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

      {/* Proje Kartları */}
      <section className="bg-white w-full py-20 px-10 text-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-[#f7fafc] rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-primary">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-sm text-secondary italic mt-2">
                {project.tech}
              </p>
              <Link
                href={`/projects/${project.id}`}
                className="mt-4 inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-accent transition duration-300"
              >
                Detayları Gör
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
