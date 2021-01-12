import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "-40px",
    marginBottom: "30px",
    textAlign: "center",
  },
  // grid: {
  //   background: "#333",
  //   maxWidth: "80%",
  //   margin: "0 auto",
  // },
  container: {
    maxWidth: "80%",
    margin: "70px auto",
    paddingBottom: "20px",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
