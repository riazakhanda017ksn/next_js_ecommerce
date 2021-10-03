import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040!important",
    "& a": {
      color: "#FFFF",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    textDecoration: "none",
  },

  grow: {
    flexGrow: 1,
  },
  section: {
    marginTop: 25,
    marginBottom: 25,
  },
});

export default useStyles;
