import { makeStyles } from "@material-ui/core/styles";
import { textAlign } from "@material-ui/system";

export default makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  },
  wrapper: {
    width: "100%",
    textAlign: "center"
  }
}));
