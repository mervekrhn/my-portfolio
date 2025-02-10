const projects = [
    {
      title: "Interview Management System",
      description: "Online mülakat yönetim sistemi.",
      tech: "Next.js, TypeScript, Node.js, PostgreSQL, AWS S3",
      image: "/project1.png",
    },
    {
      title: "E-Ticaret Platformu",
      description: "React & Next.js ile modern e-ticaret sitesi.",
      tech: "React, Next.js, MongoDB, Tailwind",
      image: "/project2.png",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold">Projelerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <p className="text-sm text-gray-400">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  