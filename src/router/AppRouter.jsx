import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/";
import { CalendarPage } from "../calendar";
import { PrincipalPage } from "../principal";

export const AppRouter = () => {
  const authStatus = "not-authenticated"; //"authenticated"; //"not-authenticated";
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}
      {/* <Route path="/*" element={<Navigate to={"/auth/login"} />} /> */}
      <Route path="/principal" element={<PrincipalPage />} />
    </Routes>
  );
};
