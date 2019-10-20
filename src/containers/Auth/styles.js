import { makeStyles } from "@material-ui/core/styles";
import colors from "../../configs/colors";

export default makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.gray,
    height: "inherit",
    width: "100%",
    maxWidth: "500px",
    paddingBottom: 80,
    margin: "0 auto",
    marginTop: theme.spacing(3),
    borderRadius: 8,
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px"
    }
  },
  flexContainer: {
    justifyContent: "space-between"
  }
}));
