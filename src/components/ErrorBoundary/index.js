import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

class ErrorBoundary extends Component() {
  constructor(props) {
    super(props);
  }
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }
  render() {
    const classes = useStyles();
    const { hasError } = this.state;
    return (
      (hasError && (
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <div className={classes.description}>
                <Typography component="h1">
                  Oops, Something went wrong! Check your connection and try
                  again.
                </Typography>
              </div>
              <div className={classes.linksWrapper}></div>
            </CardContent>
          </div>
        </Card>
      )) ||
      this.props.children
    );
  }
}

export default ErrorBoundary;
