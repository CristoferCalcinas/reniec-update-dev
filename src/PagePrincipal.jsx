import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const PagePrincipal = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
