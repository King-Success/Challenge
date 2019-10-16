import React from "react";
import Pagination from "material-ui-flat-pagination";
import PropTypes from "prop-types";

export default function PaginationTab({ limit, offset, total, onClick }) {
  return (
    <Pagination limit={limit} offset={offset} total={total} onClick={onClick} />
  );
}

PaginationTab.propTypes = {
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
