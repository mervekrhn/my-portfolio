import './globals.css';
import Footer from '../../components/Footer'; // Footer bileşenini içe aktar

export const metadata = {
  title: 'My Portfolio',
  description: 'Kişisel portfolyo sayfam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main> {/* Sayfa içeriği */}
        <Footer /> {/* Footer her sayfada görünecek */}
      </body>
    </html>
  );
}
