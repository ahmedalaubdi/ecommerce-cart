import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    maxWidth: "100%",
    background: "#eee",
  },
  media: {
    height: "0",
    paddingTop: "56.25%",
    width: "200px",
    margin: "0 auto",
    marginTop: "10px",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
