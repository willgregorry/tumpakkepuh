'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed flex items-center justify-between px-10 py-6 z-999 top-0 left-0 w-full">
      <h1 className="font-dancingScript text-xl md:text-2xl lg:text-3xl font-semibold select-none z-50 text-white">
        Tumpakkepuh
      </h1>

      <div className="hidden md:flex items-center gap-6 font-plusJakarta text-white">
        <nav className="cursor-pointer hover:opacity-70 transition-opacity">Wisata</nav>
        <nav className="cursor-pointer hover:opacity-70 transition-opacity">Kegiatan</nav>
        <nav className="cursor-pointer hover:opacity-70 transition-opacity">Cara Ke Sini</nav>
        <button className="hidden md:block px-4 py-2 bg-orange-300 text-black font-medium rounded-full hover:bg-white transition-colors">
            tes
        </button>
      </div>
      

      <button
        className="relative flex md:hidden justify-center items-center w-6 h-6 focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`absolute w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45' : '-translate-y-2'
          }`}
        />
        <span
          className={`absolute w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
          }`}
        />
        <span
          className={`absolute w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45' : 'translate-y-2'
          }`}
        />
      </button>

      <div
        className={`absolute top-full left-4 right-4 mt-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg flex flex-col items-center gap-6 pt-6 pb-8 font-plusJakarta text-white transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="text-lg cursor-pointer hover:text-gray-300 transition-colors">Wisata</nav>
        <nav className="text-lg cursor-pointer hover:text-gray-300 transition-colors">Kegiatan</nav>
        <nav className="text-lg cursor-pointer hover:text-gray-300 transition-colors">Cara Ke Sini</nav>
        <button className="px-8 py-2 mt-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
          tes
        </button>
      </div>
    </header>
  );
}