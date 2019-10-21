import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import * as AuthReducer from "./AuthReducer";
import useStyle from "./styles";
function Auth({ user, loading, error, signup, login }) {
  const classes = useStyle();
  const [active, setActive] = useState("login");
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setActive(newValue);
  };

  const handleLogin = async data => {
    await login(data);
    history.push("/");
  };

  const handleSignup = async data => {
    await signup(data);
    history.push("/");
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
      {active === "login" ? (
        <Login loginHandler={handleLogin} />
      ) : (
        <Signup linkHandler={handleChange} signupHandler={handleSignup} />
      )}
    </Card>
  );
}

Auth.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string
  }).isRequired,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = ({ user, loading, error }) => ({
  user,
  loading,
  error
});

const mapDispatchToProps = {
  signup: AuthReducer.signup,
  login: AuthReducer.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
