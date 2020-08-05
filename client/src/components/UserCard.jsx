import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginTop: "1em",
    marginLeft: "1em",
    paddingRight: "1em",
    minWidth: 370,
    height: 90,
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px #e3e8ec",
  },
  number: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3em",
    height: "100%",
    backgroundColor: "#f8f9fd",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "1.5em",
    color: "#e3e8ec",
  },
  avatar: {
    padding: ".2em",
    marginLeft: "1em",
    marginRight: "1em",
    backgroundColor: "#2BA6B5",
  },
  data: {
    display: "flex",
    flexDirection: "column",
  },
  name: {},
  email: {
    fontSize: ".8em",
    color: "#769bb8",
  },
}));

export default function UserCard({ user, i }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.number}>{`#${i + 1}`}</div>
      <Avatar className={classes.avatar}>
        {`${user.name[0]}${user.sirname[0]}`.toUpperCase()}
      </Avatar>
      <div className={classes.data}>
        <span className={classes.name}>{`${user.name} ${user.sirname}`}</span>
        <span className={classes.email}>{user.email}</span>
      </div>
    </div>
  );
}
