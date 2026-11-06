import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Users
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Settings
      </NavLink>
    </div>
  );
}
export default Navbar;
