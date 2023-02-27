"use client";

const setThemeToLight = () => {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
};
const setThemeToDark = () => {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
};
const initTheme = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    setThemeToDark();
    return "dark";
  }
  setThemeToLight();
  return "light";
};
export { setThemeToDark, setThemeToLight, initTheme };
