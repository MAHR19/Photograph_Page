import { useState } from "react";
import { Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerNav } from "./DrawerNav";
import { NavMenu } from "./NavMenu";

export const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toogleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Toolbar>
      <IconButton
        edge="start"
        onClick={toogleDrawer}
        sx={{
          color: "white",
          display: { md: "none" }
        }}
      >
        <MenuIcon />
      </IconButton>
      <DrawerNav openDrawer={openDrawer} onClose={toogleDrawer} />
      <NavMenu />
    </Toolbar>
  );
};
