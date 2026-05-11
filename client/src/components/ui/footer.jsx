"use client";

import { DIcons } from "dicons";
import { useTheme } from "next-themes";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted border-white/20 p-1">
        <button
          onClick={() => setTheme("light")}
          className="bg-black mr-3 rounded-full p-2 text-white dark:bg-white dark:text-black"
        >
          <DIcons.Sun className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">Light Mode</span>
        </button>

        <button type="button" onClick={handleScrollTop} className="text-white">
          <DIcons.ArrowUp className="h-3 w-3" />
          <span className="sr-only">Top</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="dark:bg-black ml-3 rounded-full p-2 text-black dark:text-white bg-white"
        >
          <DIcons.Moon className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">Dark Mode</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
