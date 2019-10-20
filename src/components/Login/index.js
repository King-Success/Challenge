import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import useStyles from "./styles";
function Login() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography varient="h1" component="h1" className={classes.header}>
        <CardMedia component="img" className={classes.logo} image="/logo.png" />
        <strong>Welcome back</strong>
      </Typography>
      <form className={classes.form}>
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
          <Link className={classes.link}>Forgot password?</Link>
          <Button variant="contained" className={classes.button}>
            Sign in
          </Button>
        </Typography>
      </form>
    </div>
  );
}

export default Login;
