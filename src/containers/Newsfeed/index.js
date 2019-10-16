import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import shortid from "shortid";
import Newscard from "../../components/Newscard";
import useStyles from "./styles";

export default function Newsfeed() {
  const classes = useStyles();
  const [articles] = useState([
    {
      source: {
        id: "the-new-york-times",
        name: "The New York Times"
      },
      author: "Benjamin Weiser and William K. Rashbaum",
      title: "Trump Taxes: Justice Dept. Asks Judges to Block Subpoena",
      description:
        "But the department did not agree with President Trump’s lawyers that a sitting president is immune from criminal investigation.",
      url:
        "https://www.nytimes.com/2019/10/11/nyregion/trump-tax-returns-lawsuit.html",
      urlToImage:
        "https://static01.nyt.com/images/2019/10/11/nyregion/11nytrump/11nytrump-facebookJumbo.jpg",
      publishedAt: "2019-10-11T21:45:27Z",
      content:
        "Judge Marrero called the position repugnant to the nations governmental structure and constitutional values. \r\nBefore filing the brief on Friday, the Justice Department had not weighed in with its view about the merits of Mr. Trumps lawsuit, which makes an ar… [+858 chars]"
    }
  ]);

  return (
    <Grid className={classes.container} container spacing={1} justify="center">
      {(false ? Array.from(new Array(10)) : [...articles]).map(newsItem => {
        return newsItem ? (
          <>
            <Grid key={shortid.generate()} item xs={12} sm={11}>
              <Newscard news={newsItem} />
            </Grid>
          </>
        ) : (
          <Grid key={shortid.generate()} item xs={12} sm={11}>
            <Skeleton
              height={150}
              width="100%"
              variant="rect"
              className={classes.skeleton}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
