import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Navbar from "./Navbar";
function Pages() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Pages;
