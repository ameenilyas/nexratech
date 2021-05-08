import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import classes from "./HomeScreen.module.css";
import {
  CheckCircle,
  Home,
  LocationOn,
  Phone,
  AccessTime,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Pinterest,
  Send,
  Twitter,
  Menu,
} from "@material-ui/icons";
import {
  Button,
  Card,
  CardActionArea,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setOpen(false);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  const services = [
    {
      img:
        "https://rstheme.com/products/html/braintech/assets/images/services/style8/1.png",
      title: "Web Application Testing",
      text:
        "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.",
    },
    {
      img:
        "https://rstheme.com/products/html/braintech/assets/images/services/style8/2.png",
      title: "Desktop Application Testing",
      text:
        "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.",
    },
    {
      img:
        "https://rstheme.com/products/html/braintech/assets/images/services/style8/3.png",
      title: "Mobile Application Testing",
      text:
        "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.",
    },
  ];

  const projects = [
    {
      img:
        "https://rstheme.com/products/html/braintech/assets/images/project/style4/1.jpg",
    },
    {
      img:
        "https://rstheme.com/products/html/braintech/assets/images/project/style4/2.jpg",
    },
    {
      img:
        "https://rstheme.com/products/html/braintech/assets/images/project/style4/3.jpg",
    },
    {
      img:
        "https://rstheme.com/products/html/braintech/assets/images/project/style4/4.jpg",
    },
  ];

  const drawerInfo = (
    <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
      <div className={classes.drawerInfo}>
        <IconButton onClick={() => setOpen(false)}>
          <img
            className={classes.headerImg}
            src='https://netmind.net/en/wp-content/uploads/2020/06/9-Dots.png'
            alt=''
          />
        </IconButton>
        <img src='https://nexratech.com/images/logo.png' alt='' />
        <p>
          Braintech quisque placerat vitae lacus ut scelerisque. Fusce luctus
          odio ac nibh luctus, in porttitor theo lacus egestas etiusto odio data
          center.
        </p>
        <div className={classes.contactLeftReach}>
          <p>
            <Home />
          </p>
          <div className={classes.contactLeftSubReach}>
            <h4>Email:</h4>
            <p>123@gmail.com</p>
          </div>
        </div>
        <div className={classes.contactLeftReach}>
          <p>
            <Phone />
          </p>
          <div className={classes.contactLeftSubReach}>
            <h4>Phone:</h4>
            <p>(123)34556678</p>
          </div>
        </div>
        <div className={classes.contactLeftReach}>
          <p>
            <LocationOn />
          </p>
          <div className={classes.contactLeftSubReach}>
            <h4>Address:</h4>
            <p>New Jersey ,1202 ,USA</p>
          </div>
        </div>
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
    </Drawer>
  );

  const drawerMenu = (
    <Drawer anchor='right' open={openMenu} onClose={() => setOpenMenu(false)}>
      <div className={classes.openMenu}>
        <List>
          <ListItem
            className={classes.openMenuList}
            button
            onClick={() => setOpenMenu(false)}
          >
            <a href='#home'>Home</a>
          </ListItem>
          <ListItem
            className={classes.openMenuList}
            button
            onClick={() => setOpenMenu(false)}
          >
            <a href='#services'>Services</a>
          </ListItem>
          <ListItem
            className={classes.openMenuList}
            button
            onClick={() => setOpenMenu(false)}
          >
            <a href='#about'>About</a>
          </ListItem>
          <ListItem
            className={classes.openMenuList}
            button
            onClick={() => setOpenMenu(false)}
          >
            <a href='#project'>Project</a>
          </ListItem>
          <ListItem
            className={classes.openMenuList}
            button
            onClick={() => setOpenMenu(false)}
          >
            <a href='#contact'>Contact</a>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );

  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <img src='https://nexratech.com/images/logo.png' alt='' />
        <div className={classes.headerNav}>
          <a href='#home'>Home</a>
          <a href='#services'>Services</a>
          <a href='#about'>About</a>
          <a href='#project'>Project</a>
          <a href='#contact'>Contact</a>
        </div>
        <IconButton
          className={classes.openInfoButton}
          onClick={() => setOpen(true)}
        >
          <a href='#home'>
            <img
              className={classes.headerImg}
              src='https://netmind.net/en/wp-content/uploads/2020/06/9-Dots.png'
              alt=''
            />
          </a>
        </IconButton>
        <IconButton
          className={classes.openMenuButton}
          onClick={() => setOpenMenu(true)}
        >
          <Menu />
        </IconButton>
      </div>

      <Banner />
      <div id='services' />
      <div className={`${classes.serviceSection} ${classes.snap}`}>
        <h1>Services</h1>
        <div className={classes.services}>
          {services.map(({ title, img, text }, index) => (
            <div key={index} className={classes.service}>
              <img src={img} alt='' />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <Button variant='contained'>View All Services</Button>
      </div>
      <div id='about' className={`${classes.about} ${classes.snap}`}>
        <h1>About</h1>
        <div className={classes.aboutSection}>
          <img
            src={
              "https://rstheme.com/products/html/braintech/assets/images/about/about-testing.png"
            }
            alt=''
          />
          <div className={classes.aboutContent}>
            <h2>Easier and Faster Testing with</h2>
            <h2>AI TestBot</h2>
            <p>
              We've been building creative tools together for over a decade and
              have a deep appreciation tools.
            </p>
            <div className={classes.aboutPoints}>
              <div className={classes.aboutPoint}>
                <CheckCircle />
                <p>Build at the speed of innovation</p>
              </div>
              <div className={classes.aboutPoint}>
                <CheckCircle />
                <p>Quick Results in 20 minutes</p>
              </div>
              <div className={classes.aboutPoint}>
                <CheckCircle />
                <p>No Coding, No Setup</p>
              </div>
              <div className={classes.aboutPoint}>
                <CheckCircle />
                <p>Drive Business Impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='project' className={`${classes.project} ${classes.snap}`}>
        <img
          src='https://rstheme.com/products/html/braintech/assets/images/portfolio.png'
          alt=''
        />
        <h1>
          Recent <span> Case Studies</span>
        </h1>
        <p>
          We've been building creative tools together for over a decade and have
          a deep appreciation for software applications and AI tools.
        </p>
        <div className={classes.projectSection}>
          {projects.map(({ img }, index) => (
            <Card key={index} className={classes.projectCard}>
              <CardActionArea>
                <img src={img} alt='' />
              </CardActionArea>
              <h3>Product Design</h3>
              <div className={classes.projectButton}>
                <p>View</p>
                <span>{">"}</span>
              </div>
            </Card>
          ))}
        </div>
        <Button variant='contained'>View Case Study </Button>
      </div>
      <div id='contact' className={`${classes.contact} ${classes.snap}`}>
        <h1>Contact Us</h1>
        <div className={classes.contactMain}>
          <div className={classes.contactLeft}>
            <p>LET'S TALK</p>
            <h1>Speak With Expert Engineers</h1>
            <div className={classes.contactLeftReach}>
              <p>
                <Home />
              </p>
              <div className={classes.contactLeftSubReach}>
                <p>Email:</p>
                <p>123@gmail.com</p>
              </div>
            </div>
            <div className={classes.contactLeftReach}>
              <p>
                <Phone />
              </p>
              <div className={classes.contactLeftSubReach}>
                <p>Phone:</p>
                <p>(123)34556678</p>
              </div>
            </div>
            <div className={classes.contactLeftReach}>
              <p>
                <LocationOn />
              </p>
              <div className={classes.contactLeftSubReach}>
                <p>Address:</p>
                <p>New Jersey ,1202 ,USA</p>
              </div>
            </div>
          </div>
          <div className={classes.contactForm}>
            <h2>Fill the Form Below</h2>
            <form>
              <div className={classes.contactFormInput}>
                <input required placeholder='Name' type='text' />
                <input required placeholder='Email' type='email' />
              </div>
              <div className={classes.contactFormInput}>
                <input required placeholder='Phone Number' type='phone' />
                <input required placeholder='Your Website' type='website' />
              </div>
              <div className={classes.contactFormInput}>
                <textarea placeholder='Your Message Here' />
              </div>
              <Button variant='contained'>Submit Now</Button>
            </form>
          </div>
        </div>
      </div>
      <div className={`${classes.footer} ${classes.snap}`}>
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
            We denounce with righteous and in and dislike men who are so
            beguiled and demo realized.
          </p>
          <div className={classes.footerEmail}>
            <input placeholder='Your Email Address' type='email' />
            <IconButton>
              <Send />
            </IconButton>
          </div>
        </div>
      </div>
      {drawerInfo}
      {drawerMenu}
    </div>
  );
}

export default HomeScreen;
