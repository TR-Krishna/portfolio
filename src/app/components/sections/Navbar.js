"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-[#0f0f0f] text-white font-sans">
     <header className="w-full px-6 py-4 flex justify-between items-center border-b border-white/10 sticky top-0 backdrop-blur-md z-50">
        <h1 className="text-xl font-semibold tracking-tight"> T R KRISHNA</h1>
        <nav className="space-x-6 text-sm text-gray-300">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>
      </div>
  );
}
