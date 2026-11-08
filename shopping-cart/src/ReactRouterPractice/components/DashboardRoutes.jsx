import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthProvider from "./AuthContext";
import { lazy, Suspense } from "react";

const DashboardHome = lazy(() => import("./DashboardHome"));
const Profile = lazy(() => import("./Profile"));
const Reports = lazy(() => import("./Reports"));

function DashboardRoutes() {
  return (
    <AuthProvider>
      <Suspense fallback={<h2>Loading...</h2>}>
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
      </Suspense>
    </AuthProvider>
  );
}

export default DashboardRoutes;
