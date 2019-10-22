import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function Error({ history, message }) {
  const classes = useStyles();
  const goBack = () => {
    history.goBack();
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.message}>
          <Typography component="h1" varient="h1">
            <strong>
              {message ||
                "Oops, Something went wrong! Check your connection and try again."}
            </strong>
          </Typography>
        </div>
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={goBack}
          >
            Go Back
          </Button>{" "}
        </div>
      </CardContent>
    </Card>
  );
}

Error.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  message: PropTypes.string
};
