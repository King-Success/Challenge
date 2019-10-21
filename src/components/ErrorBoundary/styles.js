import { makeStyles } from "@material-ui/core/styles";
import colors from "../../configs/colors";

export default makeStyles(theme => ({
  card: {
    display: "flex",
    backgroundColor: colors.gray,
    height: "inherit",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px"
    }
  },
  details: {
    maxWidth: "",
    width: "70%",
    paddingBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    height: "100%",
    paddingBottom: "0 !important",
    padding: "10px 20px"
  },
  description: {},
  title: {
    padding: "2px 0",
    margin: 0
  },
  linksWrapper: {}
}));
