import { makeStyles } from "@material-ui/core/styles";
import colors from "../../configs/colors";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white
  },
  appBar: {
    backgroundColor: colors.gray,
    color: colors.red,
    boxShadow: "0 2px 10px -1 rgba(0,0,0,0.2)",
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: colors.white
    },
    marginLeft: 0,
    width: "100%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
      width: 0
    }
  },
  buggerMenu: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  logo: {
    height: "50px",
    width: "50px",
    borderRadius: "50%"
  }
}));
