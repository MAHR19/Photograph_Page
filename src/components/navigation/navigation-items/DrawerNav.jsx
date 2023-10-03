import { Drawer, List } from "@mui/material";
import { DrawerNavItem } from "./DrawerNavItem";

export const DrawerNav = ({ openDrawer, onClose }) => {
  return (
    <Drawer
      variant="temporary"
      open={openDrawer}
      onClose={onClose}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        display: { xs: "block", md: "none" }
      }}
    >
      <List>
        <DrawerNavItem key="About us" item="About" />
        <DrawerNavItem key="Contact" item="Contact" />
        <DrawerNavItem key="Portafolio" item="Portafolio" />
      </List>
    </Drawer>
  );
};
