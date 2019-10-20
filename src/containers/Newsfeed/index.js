import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Skeleton from "@material-ui/lab/Skeleton";
import Newscard from "../../components/Newscard";
import Pagination from "../../components/Pagination";
import * as NewsfeedActions from "./NewsfeedReducer";
import useStyles from "./styles";

function Newsfeed({ news, loading, fetchNews }) {
  const classes = useStyles();
  const {
    articles,
    total,
    offset,
    pageSize,
    language,
    category,
    country,
    source,
    searchString
  } = news;

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articles]);

  const handlePageChange = pageOffset => {
    const fetchData = {
      offset: pageOffset,
      pageSize,
      language,
      category,
      country,
      source,
      searchString
    };
    fetchNews(fetchData);
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

Newsfeed.propTypes = {
  loading: PropTypes.bool.isRequired,
  news: PropTypes.shape({
    articles: PropTypes.array.isRequired,
    offset: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    searchString: PropTypes.string.isRequired
  }).isRequired,
  fetchNews: PropTypes.func.isRequired
};

const mapStateToProps = ({ news, loading }) => ({ news, loading });
const mapDispatchToProps = { fetchNews: NewsfeedActions.fetchNews };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsfeed);
