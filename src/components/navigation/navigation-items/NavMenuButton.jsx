import { Button } from "@mui/material";

export const NavMenuButton = ({ text }) => {
  return (
    <Button
      sx={{
        color: "white"
      }}
    >
      {text}
    </Button>
  );
};
