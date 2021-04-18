import React from "react";
import classes from "./Banner.module.css";
import { Button } from "@material-ui/core";

function Banner() {
  return (
    <div id='home' className={classes.banner}>
      <div className={classes.bannerLeft}>
        <h1>
          The Software House <span> NexraTech </span>
        </h1>
        <h2>Next Era Technologies</h2>
        <p>
          We are leading technology solutions proving company all over the world
          doing over 40 years.
        </p>
        <Button variant='contained'> Get started</Button>
      </div>
      <img
        src={
          "https://rstheme.com/products/html/braintech/assets/images/banner/style2/bnr-ly2.png"
        }
        alt=''
      />
    </div>
  );
}

export default Banner;
