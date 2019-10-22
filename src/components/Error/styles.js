import { makeStyles } from "@material-ui/core/styles";
import colors from "../../configs/colors";

export default makeStyles(theme => ({
  card: {
    display: "flex",
    backgroundColor: colors.gray,
    height: "inherit",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "100%"
    }
  },
  details: {
    maxWidth: ""
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    height: "100%",
    padding: 20
  },
  message: {
    paddingBottom: 15,
    paddingTop: 20,
    margin: "0 auto"
  },
  buttonWrapper: {
    margin: "0 auto",
    paddingBottom: 20
  },
  button: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(5),
    width: "100px",
    backgroundColor: colors.green,
    opacity: 0.8,
    float: "right",
    color: colors.white,
    "&:hover": {
      backgroundColor: colors.green,
      opacity: 1
    }
  }
}));
