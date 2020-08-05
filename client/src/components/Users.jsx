import React, { useEffect } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import { getUsersAsync } from "../redux/actions/getUsersAsync";
import { toggleModal } from "../redux/actions/toggleModal";
import UserCard from "./UserCard.jsx";
import ModalForm from "./ModalForm.jsx";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1em",
    marginLeft: "1em",
    width: 384,
    backgroundColor: "#f8f9fd",
    boxShadow: "none",
    border: "2px dashed #e3e8ec",
    cursor: "pointer",
  },
  plus: {
    fontSize: "4.5em",
    fontWeight: "400",
    color: "#e3e8ec",
  },
}));

const Users = ({ users, getUsers, open, closeModal }) => {
  useEffect(() => {
    getUsers();
  }, []);

  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   return true
  // };

  // const handleClose = () => {
  //   return false
  // };

  const classes = useStyles();

  return (
    <Grid container>
      {users.map((user, i) => (
        <UserCard user={user} i={i} key={user._id}/>
      ))}
      <Card className={classes.card} onClick={closeModal}>
        <span className={classes.plus}>+</span>
      </Card>
      <ModalForm open={open} handleClose={closeModal} />
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.getUsers,
    open: state.toggleModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersAsync()),
    closeModal: () => dispatch(toggleModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
