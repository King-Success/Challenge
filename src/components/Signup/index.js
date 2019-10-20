import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import useStyles from "./styles";
function Signup({ linkHandler }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography varient="h1" component="h1" className={classes.header}>
        <CardMedia component="img" className={classes.logo} image="/logo.png" />
        <strong>Create an account</strong>
      </Typography>
      <form className={classes.form}>
        <TextField
          id="outlined-dense"
          label="Username"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          required
        />{" "}
        <TextField
          id="outlined-dense"
          label="Email"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          required
        />{" "}
        <TextField
          id="outlined-dense"
          label="Password"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          type="password"
          required
        />{" "}
        <Typography varient="h3" component="h2">
          <Link
            className={classes.link}
            onClick={() => linkHandler(null, "login")}
          >
            Already have an account? Login instead
          </Link>
          <Button variant="contained" className={classes.button}>
            Sign up
          </Button>
        </Typography>
      </form>
    </div>
  );
}

Signup.propTypes = {
  linkHandler: PropTypes.func.isRequired
};

export default Signup;
