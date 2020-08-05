import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersAsync } from "../redux/actions/getUsersAsync";
import UserCard from "./UserCard.jsx";

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users">
      {users.map((user) => (
        <UserCard user={user} key={user._id}/>
      ))}
    </div>
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
