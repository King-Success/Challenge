import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import useStyles from "./styles";
function Signup({ linkHandler, signupHandler }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography varient="h1" component="h1" className={classes.header}>
        <CardMedia component="img" className={classes.logo} image="/logo.png" />
        <strong>Create an account</strong>
      </Typography>
      <Formik
        onSubmit={signupHandler}
        render={({ handleChange, handleSubmit }) => {
          return (
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                id="username"
                label="Username"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                onChange={handleChange}
                required
              />{" "}
              <TextField
                id="email"
                label="Email"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                type="email"
                onChange={handleChange}
                required
              />{" "}
              <TextField
                id="password"
                label="Password"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                onChange={handleChange}
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
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.button}
                >
                  Sign up
                </Button>
              </Typography>
            </form>
          );
        }}
      />
    </div>
  );
}

Signup.propTypes = {
  linkHandler: PropTypes.func.isRequired,
  signupHandler: PropTypes.func.isRequired
};

export default Signup;
