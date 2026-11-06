import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h1>My Dashboard</h1>

      <aside>Sidebar content</aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
