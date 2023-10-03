import { AppBar } from "@mui/material";
import { NavBar } from "./navigation-items/NavBar";

export const Navigation = () => {
  return (
    <AppBar>
      {/* App Navigation, Totally responsive */}
      <NavBar />
    </AppBar>
  );
};
