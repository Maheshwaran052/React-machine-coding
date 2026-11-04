import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
  // Get theme and setTheme from the context here
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <p>Current Theme {theme}</p>

      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  );
}

export default ThemeButton;
