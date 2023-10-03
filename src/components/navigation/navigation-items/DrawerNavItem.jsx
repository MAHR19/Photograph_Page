import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export const DrawerNavItem = ({ key, item }) => {
  return (
    <ListItem key={key} disablePadding>
      <ListItemButton>
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  );
};
