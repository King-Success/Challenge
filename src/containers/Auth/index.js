import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import useStyle from "./styles";
function Auth() {
  const classes = useStyle();
  const [active, setActive] = useState("login");

  const handleChange = (event, newValue) => {
    setActive(newValue);
  };

  return (
    <Card className={classes.card}>
      <Paper square>
        <Tabs
          varient="scrollable"
          value={active}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="authentication tabs"
          className={classes.tabs}
          classes={{
            flexContainer: classes.flexContainer
          }}
        >
          <Tab label="Sign in" value="login" />
          <Tab label="Register" value="register" />
        </Tabs>
      </Paper>
      {active === "login" ? <Login /> : <Signup linkHandler={handleChange} />}
    </Card>
  );
}

export default Auth;
