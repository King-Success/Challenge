import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import PropTyes from "prop-types";
import SearchForm from "../SearchForm";
import useStyles from "./styles";
import logo from "../../../public/logo.png";

export default function Navigation({ handleSearch }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <CardMedia component="img" className={classes.logo} image={logo} />
          </Typography>
          <div className={classes.search}>
            <SearchForm submitHandler={handleSearch} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  handleSearch: PropTyes.func.isRequired
};
