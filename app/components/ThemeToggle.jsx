"use client";
import { assets } from "@/assets/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Image
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt=""
        className="w-6"
      />
    </button>
  );
}
