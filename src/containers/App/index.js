import React, { useState, useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { withRouter, Switch, Route, useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "../../components/Navigation";
import Drawer from "../../components/Drawer";
import Spinner from "../../components/Spinner";
import ErrorBoundary from "../../components/ErrorBoundary";
import * as NewsfeedActions from "../Newsfeed/NewsfeedReducer";
import * as AuthActions from "../Auth/AuthReducer";
import GlobalCss, { useStyle } from "./globalCss";
// Using code splitting to load componets
const Newsfeed = lazy(() => import("../Newsfeed/index"));
const Bookmark = lazy(() => import("../Bookmark/index"));
const Auth = lazy(() => import("../Auth/index"));

const App = ({ fetchNews, user, loadActiveUser, logout }) => {
  const classes = useStyle();
  const history = useHistory();
  const defaultPage = 1;
  const defaultPageSize = 10;
  const fetchData = {
    offset: defaultPage,
    pageSize: defaultPageSize
  };

  useEffect(() => {
    loadActiveUser();
  }, [loadActiveUser]);
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

  const handleLogout = async () => {
    await logout();
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
          handleLogout={handleLogout}
          isOpen={drawerOpen}
          user={user}
        />
        <div className={classes.container}>
          <Switch>
            <Route path="/authentication">
              <Suspense fallback={<Spinner />}>
                <Auth />
              </Suspense>
            </Route>
            <Route path="/bookmarks">
              <Suspense fallback={<Spinner />}>
                <Bookmark />
              </Suspense>
            </Route>
            <Route path="/">
              <Suspense fallback={<Spinner />}>
                <ErrorBoundary history={history}>
                  <Newsfeed />
                </ErrorBoundary>
              </Suspense>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

const mapStateToProp = ({ user }) => ({ user });
const mapDispatchToProp = {
  fetchNews: NewsfeedActions.fetchNews,
  loadActiveUser: AuthActions.loadActiveUser,
  logout: AuthActions.logout
};

export default withRouter(
  connect(
    mapStateToProp,
    mapDispatchToProp
  )(App)
);
