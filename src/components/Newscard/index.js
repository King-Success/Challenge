import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import useStyles from "./styles";

export default function Newscard({ news }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.description}>
            <h2 className={classes.title}>{news.title}</h2>
            <p className={classes.slug}>{news.description}</p>
          </div>
          <div className={classes.linksWrapper}>
            <ul className={classes.links}>
              <li className={classes.linkItem}>
                Source: <a href="/https:google.com?q=CNN">{news.source.name}</a>
              </li>
              <li className={classes.linkItem}>Posted: 6 hours ago</li>
              <li className={classes.linkItem}>
                Author:{" "}
                <a href="/https:google.com?q=Gim%20Beglin">{news.author}</a>
              </li>
            </ul>
          </div>
        </CardContent>
      </div>
      <div className={classes.media}>
        <CardMedia className={classes.avater} image={news.urlToImage} />
      </div>
    </Card>
  );
}

Newscard.propTypes = {
  news: PropTypes.objectOf(PropTypes.any).isRequired
};
