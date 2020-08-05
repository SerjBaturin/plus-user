import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUsersAsync } from "../redux/actions/getUsersAsync";

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
    // console.log(users)
  }, []);

  return (
    <div className="users">
      {users.map(user => <div key={user._id}>{user.name}</div>)}
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
