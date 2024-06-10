import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/";
import { CalendarPage } from "../calendar";
import { PrincipalPage } from "../principal";
import { DashboardPage } from "../dashboard";

export const AppRouter = () => {
  const authStatus = "authenticated"; //"authenticated"; //"not-authenticated";
  return (
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/auth/*" element={<LoginPage />} />

      {authStatus === "authenticated" ? (
        <>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/auth/login" />} />
      )}
    </Routes>
  );
};
