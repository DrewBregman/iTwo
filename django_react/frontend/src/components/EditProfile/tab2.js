import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function Tab2() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
        style = {{width: 460}}
          name="experienceOne"
          label="One Experience"
          defaultValue="Hello World"

        />
        <TextField
        style = {{width: 460}}
          name="experienceTwo"
          label="Another Experience"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          name="experienceThree"
          label="Another Experience"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          name="experienceFour"
          label="Another Experience"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          name="experienceFive"
          label="Another Experience"
          defaultValue="Hello World"
        />
        <TextField name="skillOne" label="One Skill" defaultValue="Hello World" />
        <TextField
          name="skillTwo"
          label="Another Skill"
          defaultValue="Hello World"
        />
        <TextField
          name="skillThree"
          label="Another Skill"
          defaultValue="Hello World"
        />
        <TextField
          name="skillFour"
          label="Another Skill"
          defaultValue="Hello World"
        />
        <TextField
          name="skillFive"
          label="Another Skill"
          defaultValue="Hello World"
        />
      </div>
    </form>
  );
}
