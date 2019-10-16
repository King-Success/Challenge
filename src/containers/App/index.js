import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "../../components/Navigation";
import Drawer from "../../components/Drawer";
import GlobalCss from "./globalCss";
import "typeface-montserrat";

const App = () => {
  return (
    <>
      <div>
        <CssBaseline />
        <GlobalCss />
        <Navigation handleSearch={() => ({})} />
        <Drawer />
      </div>
    </>
  );
};

export default App;
