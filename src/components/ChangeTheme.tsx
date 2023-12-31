"use client";

import Image, { type StaticImageData } from "next/image";
import moonIcon from "public/svg/moon.svg";
import sunIcon from "public/svg/sun.svg";

export default function ChangeTheme() {
  const changeTheme = () => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("dark");
    }
  };

  return (
    <>
      <button className="dark:hidden" onClick={changeTheme}>
        <Image src={moonIcon as StaticImageData} alt="Change theme to dark" />
      </button>
      <button className="hidden dark:block" onClick={changeTheme}>
        <Image src={sunIcon as StaticImageData} alt="Change theme to dark" />
      </button>
    </>
  );
}
