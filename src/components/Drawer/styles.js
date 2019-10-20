import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const mobileDrawerWidth = 160;
const appBarHeight = 64;

export default makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    flexShrink: 0
  },
  paperAnchorDockedLeft: {
    // borderRight: "none",
    marginTop: appBarHeight,
    paddingTop: 10,
    [theme.breakpoints.down("sm")]: {
      width: mobileDrawerWidth
    }
  },
  paper: {
    width: drawerWidth
  },
  divider: {
    width: "70%"
  },
  list: {
    padding: "24px 0"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));
