import React from "react";
import { Formik, Field } from "formik";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Proptypes from "prop-types";
import useStyles from "./styles";

export default function SearchForm({ submitHandler }) {
  const classes = useStyles();
  return (
    <Formik
      onSubmit={submitHandler}
      render={({ handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field
              render={() => (
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              )}
            />
            <InputBase
              name="searchString"
              placeholder="Search..."
              onChange={handleChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </form>
        );
      }}
    />
  );
}

SearchForm.propTypes = {
  submitHandler: Proptypes.func.isRequired
};
