import { withStyles, makeStyles } from "@material-ui/core/styles";
import "typeface-montserrat";
import colors from "../../configs/colors";

const drawerWidth = "240px";
const appBarHeight = "64px";

export default withStyles({
  "@global": {
    ".MuiInput-underline:before": {
      borderBottom: "none !important"
    },
    ".MuiTypography-body1, .MuiInputBase-root, body": {
      fontFamily: "Montserrat"
    }
  }
})(() => null);

export const useStyle = makeStyles(theme => ({
  container: {
    width: `calc(100% - ${drawerWidth})`,
    minHeight: `calc(100vh - ${appBarHeight})`,
    margin: `${appBarHeight} 0 0 0`,
    paddingTop: 30,
    float: "right",
    background: colors.white,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "3px"
    }
  }
}));
