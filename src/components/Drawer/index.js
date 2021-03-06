import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutline";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PolicyOutlinedIcon from "@material-ui/icons/PolicyOutlined";
import Dropdown from "../Dropdown";
import useStyles from "./styles";
import configs from "../../configs";
import { useTheme } from "@material-ui/core/styles";

const { countries, sources, categories, languages, dropdownTypes } = configs;

function AppDrawer({
  user,
  handleDropdownChange,
  handleLogout,
  handleDrawerToggle,
  isOpen
}) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const userTabOptions = [
    {
      code: "",
      name: (user && user.username) || "User"
    },
    {
      code: (user && user.username && "logout") || "authentication",
      name: (user && user.username && "Logout") || "Sign in"
    }
  ];
  const [isMobile, setIsMobile] = useState(false);

  const handleAuthDropdown = value => {
    if (value === "logout") {
      handleLogout();
      return history.push("/");
    }
    history.push(`/${value}`);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 960px)");
    if (mediaQuery.matches) setIsMobile(true);
    else setIsMobile(false);
    // listen for a match event
    mediaQuery.addListener(mediaQ => {
      if (mediaQ.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, [isMobile]);

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      anchor={theme.direction === "rtl" ? "right" : "left"}
      open={isOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
      className={classes.drawer}
      classes={{
        paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
        paper: classes.paper
      }}
    >
      <List className={classes.list}>
        <ListItem button key="authentication">
          <ListItemIcon>
            <PersonOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Dropdown
                text="authentication"
                value="Authentication"
                handleChange={handleAuthDropdown}
                options={userTabOptions}
              />
            }
          />
        </ListItem>
      </List>
      <Divider variant="middle" />
      <List className={classes.list}>
        <ListItem button key="country">
          <ListItemIcon>
            <LocationOnOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Dropdown
                text="Country"
                value="Country"
                handleChange={handleDropdownChange(dropdownTypes.country)}
                options={countries}
              />
            }
          />
        </ListItem>
      </List>
      <Divider variant="middle" />
      <List className={classes.list}>
        <ListItem button key="language">
          <ListItemIcon>
            <LanguageOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Dropdown
                text="Language"
                value="Language"
                handleChange={handleDropdownChange(dropdownTypes.language)}
                options={languages}
              />
            }
          />
        </ListItem>
      </List>
      <Divider variant="middle" />
      <List className={classes.list}>
        <ListItem button key="source">
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Dropdown
                text="Source"
                value="Source"
                handleChange={handleDropdownChange(dropdownTypes.source)}
                options={sources}
              />
            }
          />
        </ListItem>
      </List>
      <Divider variant="middle" />
      <List className={classes.list}>
        <ListItem button key="category">
          <ListItemIcon>
            <CategoryOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Dropdown
                text="Category"
                value="Category"
                handleChange={handleDropdownChange(dropdownTypes.category)}
                options={categories}
              />
            }
          />
        </ListItem>
      </List>
      <Divider variant="middle" />
      <List className={classes.list}>
        <ListItem button key="bookmarks">
          <ListItemIcon>
            <BookmarkBorderOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
      </List>
      <Divider variant="middle" />
      <List className={classes.list}>
        <ListItem button key="our_policy">
          <ListItemIcon>
            <PolicyOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Our Policy" />
        </ListItem>
      </List>
    </Drawer>
  );
}

AppDrawer.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  handleDropdownChange: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default AppDrawer;
