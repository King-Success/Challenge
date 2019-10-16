import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navigation from "../../components/Navigation";
import GlobalCss from "./globalCss";
import "typeface-montserrat";

const App = () => {
  return (
    <>
      <div>
        <CssBaseline />
        <GlobalCss />
        <Navigation handleSearch={() => ({})} />
      </div>
    </>
  );
};

export default App;
