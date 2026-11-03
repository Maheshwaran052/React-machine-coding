import { useState } from "react";
import { ThemeContext } from "./components/ThemeSwitcherEx/ThemeContext";
import Toolbar from "./components/ThemeSwitcherEx/Toolbar";
import ShoppingPage from "./components/ShoppingCartEx/ShoppingPage";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <Toolbar />
    // </ThemeContext.Provider>
    <ShoppingPage></ShoppingPage>
  );
}

export default App;
