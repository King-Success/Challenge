import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTyes from "prop-types";
import SearchForm from "../SearchForm";
import useStyles from "./styles";

export default function Navigation({ handleSearch }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            MY-NEWS
          </Typography>
          <div className={classes.search}>
            <SearchForm />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  handleSearch: PropTyes.func.isRequired
};
