import { Outlet, NavLink } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h1>My Dashboard</h1>
      <aside>
        SideBar Content
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          DashboardHome
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to="reports"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reports
        </NavLink>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
