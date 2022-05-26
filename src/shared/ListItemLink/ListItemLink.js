import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
function ListItemLink({ icon, primary, to, onclick }) {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <li onClick={onclick}>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default ListItemLink;
