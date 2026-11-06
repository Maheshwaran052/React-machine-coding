import { useState } from "react";
import { ThemeContext } from "./ThemeSwitcherEx/Components/ThemeContext";
import Toolbar from "./ThemeSwitcherEx/Components/Toolbar";
import ShoppingPage from "./ShoppingCartEx/Components/ShoppingPage";
import Pages from "./ReactRouterPractice/components/Pages";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <Toolbar />
    // </ThemeContext.Provider>
    // <ShoppingPage></ShoppingPage>
    <Pages></Pages>
  );
}

export default App;
