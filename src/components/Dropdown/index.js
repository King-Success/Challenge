import React from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import PropTypes from "prop-types";

export default function Dropdown({ text, handleChange, options }) {
  return (
    <InputLabel>
      <Select
        native
        varient="filled"
        onChange={event => {
          handleChange(event.target.value);
        }}
        inputProps={{
          name: text,
          code: text
        }}
      >
        {options.map(item => {
          return (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          );
        })}
      </Select>
    </InputLabel>
  );
}

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
};
