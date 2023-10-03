import "./styles.css";
import { CssBaseline } from "@mui/material";
import { Navigation } from "./components/navigation/Navigation";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
      </BrowserRouter>
    </>
  );
};
