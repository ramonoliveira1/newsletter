import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

const ToggleTheme = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div>
      <MoonIcon onClick={ toggleTheme } className="h-8 text-gray-100 cursor-pointer hidden dark:block" />
      <SunIcon onClick={ toggleTheme } className="h-8 text-gray-100 cursor-pointer block dark:hidden" />
    </div>
  );
};

export default ToggleTheme;