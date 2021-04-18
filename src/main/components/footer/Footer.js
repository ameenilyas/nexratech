import { IconButton } from "@material-ui/core";
import {
  AccessTime,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Phone,
  Pinterest,
  Send,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerSub}>
        <img src='https://nexratech.com/images/logo.png' alt='' />
        <p>
          Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium
          doloremque denounce with illo inventore veritatis
        </p>
        <div className={classes.footerSubICons}>
          <IconButton>
            <Facebook className={classes.footerSubICon} />
          </IconButton>
          <IconButton>
            <Twitter className={classes.footerSubICon} />
          </IconButton>
          <IconButton>
            <Pinterest className={classes.footerSubICon} />
          </IconButton>
          <IconButton>
            <Instagram className={classes.footerSubICon} />
          </IconButton>
          <IconButton>
            <LinkedIn className={classes.footerSubICon} />
          </IconButton>
        </div>
      </div>
      <div className={classes.footerSub}>
        <h3>IT Services</h3>
        <Link to='/'>Software Development</Link>
        <Link to='/'>Web Development</Link>
        <Link to='/'>Analytical Solutions</Link>
        <Link to='/'>Cloud and DevOps</Link>
        <Link to='/'>Project Design</Link>
      </div>
      <div className={classes.footerSub}>
        <h3>Contact Info</h3>
        <div className={classes.footerSubDiv}>
          <LocationOn />
          <p>374 FA Tower, William S Blvd 2721, IL, USA</p>
        </div>
        <div className={classes.footerSubDiv}>
          <Phone />
          <p>(+92)3123234456</p>
        </div>
        <div className={classes.footerSubDiv}>
          <Mail />
          <p>ameenilyas78@gmail.com</p>
        </div>
        <div className={classes.footerSubDiv}>
          <AccessTime />
          <p>Opening Hours: 10:00 - 18:00</p>
        </div>
      </div>
      <div className={classes.footerSub}>
        <h3>Newsletter</h3>
        <p>
          We denounce with righteous and in and dislike men who are so beguiled
          and demo realized.
        </p>
        <div className={classes.footerEmail}>
          <input placeholder='Your Email Address' type='email' />
          <IconButton>
            <Send />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
