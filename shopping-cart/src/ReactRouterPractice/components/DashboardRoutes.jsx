import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import DashboardHome from "./DashboardHome";
import Profile from "./Profile";
import Reports from "./Reports";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthProvider from "./AuthContext";
function DashboardRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <DashboardLayout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
export default DashboardRoutes;
