import { useState } from "react";
import { ThemeContext } from "./ThemeSwitcherEx/Components/ThemeContext";
import Toolbar from "./ThemeSwitcherEx/Components/Toolbar";
import ShoppingPage from "./ShoppingCartEx/Components/ShoppingPage";
import Pages from "./ReactRouterPractice/components/Pages";
import DashboardRoutes from "./ReactRouterPractice/components/DashboardRoutes";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <Toolbar />
    // </ThemeContext.Provider>
    // <ShoppingPage></ShoppingPage>
    // <Pages></Pages>
    <BrowserRouter>
      <DashboardRoutes />
    </BrowserRouter>
  );
}

export default App;
