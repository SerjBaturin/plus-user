import React, { useEffect } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import { getUsersAsync } from "../redux/actions/getUsersAsync";
import UserCard from "./UserCard.jsx";
import ModalForm from "./ModalForm.jsx";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "1em",
    marginTop: "1em",
    padding: "0",
    width: 280,
    backgroundColor: "#f8f9fd",
    boxShadow: "none",
    border: "2px dashed #e3e8ec",
    cursor: "pointer",
  },
  plus: {
    padding: "0",
    margin: "0",
    fontSize: "3.5em",
    fontWeight: "bolder",
    color: "#e3e8ec",
  },
}));

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {users.map((user, i) => (
        <UserCard user={user} i={i} key={user._id} />
      ))}
      <Card className={classes.card} onClick={handleOpen}>
        <h2 className={classes.plus}>+</h2>
      </Card>
      <ModalForm open={open} handleClose={handleClose} />
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.getUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersAsync()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
