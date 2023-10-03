import { Stack } from "@mui/material";
import { NavMenuButton } from "./NavMenuButton";

export const NavMenu = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        display: { xs: "none", md: "block" }
      }}
    >
      <NavMenuButton text="Inicio" />
      <NavMenuButton text="Acerca de" />
      <NavMenuButton text="Portafolio" />
      <NavMenuButton text="Contacto" />
    </Stack>
  );
};
