import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  skeleton: {
    borderRadius: "5px"
  },
  noStyleLink: {
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
