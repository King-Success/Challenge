import { withStyles } from "@material-ui/core/styles";
import "typeface-montserrat";

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
