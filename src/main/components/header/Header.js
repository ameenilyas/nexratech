import React from "react";
import classes from "./Header.module.css";
import { Menu } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className={classes.header}>
      <img src='https://nexratech.com/images/logo.png' alt='' />
      <div className={classes.headerNav}>
        <a href='#home'>Home</a>
        <a href='#services'>Services</a>
        <a href='#about'>About</a>
        <a href='#project'>Project</a>
        <a href='#contact'>Contact</a>
      </div>
      <IconButton>
        <Menu className={classes.menuIcon} />
      </IconButton>
    </div>
  );
}

export default Header;
