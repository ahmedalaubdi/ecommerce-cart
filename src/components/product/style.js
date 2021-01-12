import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    background: "#eee",
    margin: "0 10px",
  },
  media: {
    height: "0",
    paddingTop: "56.25%",
    width: "200px",
    margin: "0 auto",
    marginTop: "10px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
