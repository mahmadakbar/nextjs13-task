"use client";

import images from "@assets/images";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { GetStorage, SetStorage } from "@services/storage";

export default function Header() {
  const pathName = usePathname();
  const localTheme = GetStorage("theme");

  const menuHeader = [
    { name: "Galerry", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "User", href: "/users" },
  ];

  const [isDark, setIsDark] = useState(localTheme === "dark");

  useEffect(() => {
    if (localTheme === "light" || localTheme === "dark") {
      setIsDark(localTheme === "dark");
    } else {
      const getCurrentTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(getCurrentTheme());
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    SetStorage("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="px-5 flex flex-row custom-shadow">
      <h1 className="flex-1 py-4">
        <Link href="/" className="flex flex-row">
          <Image
            src={images.LOGO_BERIJALAN}
            width={25}
            height={25}
            alt="logo-berijaln"
          />
          <h1 className="text-xl ml-2 font-extrabold">berijalan</h1>
        </Link>
      </h1>

      <div
        className="px-5 py-5"
        style={{ cursor: "pointer" }}
        onClick={() => setIsDark(!isDark)}
      >
        <Image
          src={isDark ? images.LIGHT : images.DARK}
          width={24}
          height={24}
          alt={isDark ? "light" : "dark"}
        />
      </div>

      <ul className="flex flex-row">
        {menuHeader.map((item, index) => (
          <Link key={index} href={item.href}>
            <li
              className={`${
                pathName === item.href ? "header-selection" : ""
              }  menu-header`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
