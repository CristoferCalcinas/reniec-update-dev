import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/";
import { CalendarPage } from "../calendar";
import { PrincipalPage } from "../principal";

export const AppRouter = () => {
  const authStatus = "authenticated"; //"authenticated"; //"not-authenticated";
  return (
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/auth/*" element={<LoginPage />} />
      {/* <Route path="/calendar" element={<CalendarPage />} /> */}

      {authStatus === "authenticated" ? (
        <Route path="/calendar" element={<CalendarPage />} />
      ) : (
        <Route path="*" element={<Navigate to="/auth/login" />} />
      )}
    </Routes>
  );
};
