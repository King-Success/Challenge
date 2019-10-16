import React from "react";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "../../components/Navigation";
import Drawer from "../../components/Drawer";
import Newsfeed from "../Newsfeed";
import * as NewsfeedActions from "../Newsfeed/NewsfeedReducer";
import GlobalCss from "./globalCss";

const App = ({ fetchNews }) => {
  const defaultPage = 1;
  const defaultPageSize = 10;
  const fetchData = {
    offset: defaultPage,
    pageSize: defaultPageSize
  };
  const handleDropdownChange = type => value => {
    fetchNews({ ...fetchData, [type]: value });
  };

  return (
    <>
      <div>
        <CssBaseline />
        <GlobalCss />
        <Navigation handleSearch={() => {}} />
        <Drawer handleDropdownChange={handleDropdownChange} />
        <Newsfeed />
      </div>
    </>
  );
};

const mapDispatchToProp = { fetchNews: NewsfeedActions.fetchNews };

export default connect(
  null,
  mapDispatchToProp
)(App);
