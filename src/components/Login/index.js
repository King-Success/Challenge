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
function Login({ loginHandler }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography varient="h1" component="h1" className={classes.header}>
        <CardMedia component="img" className={classes.logo} image="/logo.png" />
        <strong>Welcome back</strong>
      </Typography>
      <Formik
        onSubmit={loginHandler}
        render={({ handleChange, handleSubmit }) => {
          return (
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                id="email"
                label="Email"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                type="email"
                variant="outlined"
                onChange={handleChange}
                required
              />{" "}
              <TextField
                id="password"
                label="Password"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                type="password"
                onChange={handleChange}
                required
              />{" "}
              <Typography varient="h3" component="h2">
                <Link className={classes.link}>Forgot password?</Link>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.button}
                >
                  Sign in
                </Button>
              </Typography>
            </form>
          );
        }}
      />
    </div>
  );
}

Login.propTypes = {
  loginHandler: PropTypes.func.isRequired
};

export default Login;
