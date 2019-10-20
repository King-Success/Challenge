import React, { useState, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { withRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "../../components/Navigation";
import Drawer from "../../components/Drawer";
import * as NewsfeedActions from "../Newsfeed/NewsfeedReducer";
import GlobalCss, { useStyle } from "./globalCss";
// Using code splitting to load componets
const Newsfeed = lazy(() => import("../Newsfeed/index"));
const Auth = lazy(() => import("../Auth/index"));

const App = ({ fetchNews, user }) => {
  const classes = useStyle();
  const defaultPage = 1;
  const defaultPageSize = 10;
  const fetchData = {
    offset: defaultPage,
    pageSize: defaultPageSize
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDropdownChange = type => value => {
    fetchNews({ ...fetchData, [type]: value });
  };

  const handleSearch = ({ searchString }) => {
    fetchNews({ ...fetchData, searchString });
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div>
        <CssBaseline />
        <GlobalCss />
        <Navigation
          handleSearch={handleSearch}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Drawer
          handleDropdownChange={handleDropdownChange}
          handleDrawerToggle={handleDrawerToggle}
          isOpen={drawerOpen}
        />
        <div className={classes.container}>
          <Switch>
            <Route path="/authentication">
              <Suspense fallback={<div>Loading...</div>}>
                <Auth />
              </Suspense>
            </Route>
            <Route path="/">
              <Suspense fallback={<div>Loading...</div>}>
                <Newsfeed />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

const mapStateToProp = ({ user }) => ({ user });
const mapDispatchToProp = { fetchNews: NewsfeedActions.fetchNews };

export default withRouter(
  connect(
    mapStateToProp,
    mapDispatchToProp
  )(App)
);
