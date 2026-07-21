import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full h-dvh">
      <div className="flex items-center justify-center w-full h-full bg-black/70 absolute top-0 left-0">
        <div className="flex flex-col gap-8 text-center text-base md:text-lg">
          <span className="font-plusJakarta uppercase">Welcome to</span>
          <h1 className="font-dancingScript text-4xl md:text-6xl lg:text-8xl">
            Desa <span className="text-orange-300">Tumpakkepuh</span>
          </h1>

          <div className="flex tracking-wider gap-1 md:gap-4 items-center justify-center text-center font-plusJakarta opacity-80 text-xs lg==md:text-sm uppercase">
            <h2>Kecamatan Bakung</h2>
            <span>·</span>
            <h2>Kabupaten Blitar</h2>
            <span>·</span>
            <h2>Jawa Timur</h2>
          </div>
        </div>

        <div className="absolute flex flex-col items-center bottom-0 font-plusJakarta text-xs uppercase text-white/80 animate-[bounce_2s_infinite] w-auto h-auto">
          <p className="">
            Scroll
          </p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
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
        <source src="/hero_fix.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
