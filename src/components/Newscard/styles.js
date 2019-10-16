import { makeStyles } from "@material-ui/core/styles";
import configs from "../../configs";

const { colors } = configs;
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
  slug: {
    padding: "3px 0",
    margin: 0
  },
  linksWrapper: {},
  links: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
    alignItems: "flex-end",
    padding: 0,
    paddingTop: "7px",
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
      fontSize: "10px"
    }
  },
  linkItem: {
    width: "calc(100% / 3)",
    [theme.breakpoints.down("xs")]: {
      padding: "0 3px",
      textAlign: "center"
    }
  },
  media: {
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: 0
    }
  },
  avater: {
    height: "100%",
    width: "100%"
  }
}));
