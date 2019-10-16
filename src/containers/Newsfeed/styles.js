import { makeStyles } from "@material-ui/core/styles";
import colors from "../../configs/colors";

const drawerWidth = "240px";
const appBarHeight = "64px";
export default makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    maxWidth: `calc(100% - ${drawerWidth})`,
    minHeight: `calc(100vh - ${appBarHeight})`,
    margin: `${appBarHeight} 0 0 0`,
    paddingTop: 30,
    float: "right",
    background: colors.white,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: "3px"
    }
  },
  skeleton: {
    borderRadius: "5px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
