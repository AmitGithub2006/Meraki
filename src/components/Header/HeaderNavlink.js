import React from "react";
import useStyles from "./styles";

import { Typography, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

function HeaderNavLink(props) {
  const classes = useStyles();
  return (
    <MenuItem
      onClick={props.toggleDrawer && props.toggleDrawer(false)}
      sx={{
        padding: 0,
        borderRadius: "8px",
      }}
    >
      <NavLink
        to={props.to}
        className={classes.link}
        activeClassName={classes.active}
        style={{ width: "100%" }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            height: "36px",
            padding: "6px 16px",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#E9F5E9",
              borderRadius: "8px",
            },
          }}
        >
          {props.text}
        </Typography>
      </NavLink>
    </MenuItem>
  );
}
export default HeaderNavLink;
