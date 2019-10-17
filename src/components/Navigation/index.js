import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import SearchForm from "../SearchForm";
import useStyles from "./styles";

export default function Navigation({ handleSearch, handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <CardMedia
              component="img"
              className={classes.logo}
              image="/logo.png"
            />
          </Typography>
          <div className={classes.search}>
            <SearchForm submitHandler={handleSearch} />
          </div>
          <IconButton
            edge="end"
            className={classes.buggerMenu}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired
};
