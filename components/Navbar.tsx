import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Anasayfa</Link>
          <Link href="/about" className="hover:text-gray-400">Hakkımda</Link>
          <Link href="/projects" className="hover:text-gray-400">Projeler</Link>
          <Link href="/contact" className="hover:text-gray-400">İletişim</Link>
        </div>
      </div>
    </nav>
  );
}
