import { Box } from "@mui/material";

export const BoxLayout = ({ children }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};
