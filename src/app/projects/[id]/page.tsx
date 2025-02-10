import { notFound } from "next/navigation";

const projectDetails = [
  {
    id: 1,
    title: "Interview Management System",
    description: "Bu proje, online mülakat yönetimi için geliştirilmiştir.",
    tech: "Next.js, TypeScript, Node.js, PostgreSQL, AWS S3",
    experience:
      "Bu projede REST API'ler geliştirdim ve AWS S3 üzerinde dosya saklama yaptım.",
  },
  {
    id: 2,
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret platformudur.",
    tech: "React, Next.js, MongoDB, Tailwind CSS",
    experience:
      "MongoDB veritabanı tasarımı yaptım ve Tailwind CSS ile responsive bir UI geliştirdim.",
  },
  {
    id: 3,
    title: "Kişisel Blog Platformu",
    description: "Kullanıcıların blog yazabileceği bir platform.",
    tech: "Django, React, PostgreSQL",
    experience:
      "PostgreSQL ile kullanıcıların veri saklama sorunlarını çözdüm. Django Rest Framework ile API'ler geliştirdim.",
  },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Parametreye göre doğru projeyi bul
  const project = projectDetails.find((p) => p.id === Number(params.id));

  if (!project) return notFound(); // Eğer proje bulunamazsa 404 sayfası döner

  return (
    <main className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <p className="text-sm text-gray-400 italic mb-6">{project.tech}</p>
      <h2 className="text-2xl font-bold">Tecrübelerim:</h2>
      <p className="text-gray-300 mt-2">{project.experience}</p>
    </main>
  );
}
