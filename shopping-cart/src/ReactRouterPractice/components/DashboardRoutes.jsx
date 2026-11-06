import { BrowserRouter, Routes, Route } from "react-router-dom";
function DashboardRoutes() {
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}
