import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen">
      <div className="flex items-center justify-center w-full h-full bg-black/70 absolute top-0 left-0">
        <div className="flex flex-col gap-4 text-center text-lg md:text-2xl">
          <span className="font-plusJakarta">Welcome to</span>
          <h1 className="font-dancingScript text-4xl md:text-6xl lg:text-8xl">
            Desa <span className="text-orange-300">Tumpakkepuh</span>
          </h1>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover select-none"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
