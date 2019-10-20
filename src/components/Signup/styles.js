import { makeStyles } from "@material-ui/core/styles";
import colors from "../../configs/colors";

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  wrapper: {
    marginTop: 20
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(3)
  },
  logo: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    margin: "0 auto",
    marginBottom: "15px"
  },
  header: {
    textAlign: "center"
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
  },
  link: {
    fontSize: 12,
    margin: "0 10px",
    cursor: "pointer"
  }
}));
