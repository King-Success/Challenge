import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "../../components/Navigation";
import Drawer from "../../components/Drawer";
import Newsfeed from "../Newsfeed";
import GlobalCss from "./globalCss";

const App = () => {
  return (
    <>
      <div>
        <CssBaseline />
        <GlobalCss />
        <Navigation handleSearch={() => ({})} />
        <Drawer />
        <Newsfeed />
      </div>
    </>
  );
};

export default App;
