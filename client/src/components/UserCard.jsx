import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 345,
    marginLeft: "1em",
    marginTop: "1em",
    padding: "0",
  },
  header: {
    // margin: "0",
    // padding: "0",
  },
  number: {
    textAlign: "center",
    width: "2em",
    height: "100%",
    backgroundColor: "#e2e2e2",
    fontFamily: "sans-serif",
    color: "#666",
  },
  avatar: {
    backgroundColor: "#2BA6B5",
  },
}));

export default function UserCard({ user, i }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <h2 className={classes.number}>{`#${i + 1}`}</h2>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar className={classes.avatar}>
            {`${user.name[0]}${user.sirname[0]}`.toUpperCase()}
          </Avatar>
        }
        title={`${user.name} ${user.sirname}`}
        subheader={user.email}
      />
    </Card>
  );
}
