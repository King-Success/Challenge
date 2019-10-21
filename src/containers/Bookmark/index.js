import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Skeleton from "@material-ui/lab/Skeleton";
import Newscard from "../../components/Newscard";
import Pagination from "../../components/Pagination";
import * as BookmarkReducer from "./BookmarkReducer";
import useStyles from "./styles";

function Bookmark({ bookmarks, loading, fetchBookmarks }) {
  const classes = useStyles();
  const { articles, total, offset, pageSize, searchString } = bookmarks;

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articles]);

  const handlePageChange = pageOffset => {
    const fetchData = {
      offset: pageOffset,
      pageSize,
      searchString
    };
    fetchBookmarks(fetchData);
  };

  return (
    <Grid container spacing={1} justify="center">
      {(loading ? Array.from(new Array(10)) : [...articles]).map(
        (newsItem, key) => {
          return newsItem ? (
            <>
              <Grid key={key} item xs={12} sm={11}>
                <Link
                  href={newsItem.url}
                  className={classes.noStyleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Newscard news={newsItem} />
                </Link>
              </Grid>
            </>
          ) : (
            <Grid key={key} item xs={12} sm={11}>
              <Skeleton
                height={150}
                width="100%"
                variant="rect"
                className={classes.skeleton}
              />
            </Grid>
          );
        }
      )}
      {loading || total <= pageSize ? (
        " "
      ) : (
        <Pagination
          limit={10}
          offset={offset}
          total={total}
          onClick={(e, ofst) => {
            handlePageChange(ofst);
          }}
        />
      )}
    </Grid>
  );
}

Bookmark.propTypes = {
  loading: PropTypes.bool.isRequired,
  bookmarks: PropTypes.shape({
    articles: PropTypes.array.isRequired,
    offset: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    searchString: PropTypes.string.isRequired
  }).isRequired,
  fetchBookmarks: PropTypes.func.isRequired
};

const mapStateToProps = ({ bookmarks, loading }) => ({ bookmarks, loading });
const mapDispatchToProps = { fetchBookmarks: BookmarkReducer.fetchBookmarks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmark);
