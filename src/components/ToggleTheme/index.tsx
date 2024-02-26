import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";

const ToggleTheme = () => {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const pageClasses = document.documentElement.classList;

  const toggleTheme = () => {
    pageClasses.toggle("dark");
  };

  useEffect(() => {
    if (systemPreference) {
      pageClasses.add("dark");
    }
  });
  
  return (
    <div>
      <MoonIcon onClick={ toggleTheme } className="h-8 text-gray-100 cursor-pointer block dark:hidden" />
      <SunIcon onClick={ toggleTheme } className="h-8 text-gray-100 cursor-pointer hidden dark:block" />
    </div>
  );
};

export default ToggleTheme;