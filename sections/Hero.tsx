export default function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white">
        <h1 className="text-5xl font-bold">Merhaba, Ben [Adın]!</h1>
        <p className="text-xl mt-4">Full Stack Developer | React & Next.js</p>
        <div className="mt-6">
          <a href="/projects" className="bg-blue-500 px-4 py-2 rounded">Projelerime Göz At</a>
        </div>
      </section>
    );
  }
  