import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">
        {dark ? "Dark Mode" : "Light Mode"}
      </h1>
      <button
        onClick={() => setDark(!dark)}
        className={`px-6 py-3 rounded-md font-semibold ${
          dark
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}
