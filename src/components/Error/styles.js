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
    maxWidth: "",
    paddingBottom: "10px"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    height: "100%",
    padding: 20
  },
  message: {
    paddingBottom: 30,
    margin: "0 auto"
  },
  buttonWrapper: {
    margin: "0 auto"
  }
}));
