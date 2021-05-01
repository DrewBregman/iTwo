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
          id="experienceOne"
          label="One Experience"
          defaultValue="Hello World"

        />
        <TextField
        style = {{width: 460}}
          id="experienceTwo"
          label="Another Experience"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          id="experienceThree"
          label="Another Experience"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          id="experienceFour"
          label="Another Experience"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          id="experienceFive"
          label="Another Experience"
          defaultValue="Hello World"
        />
        <TextField id="skillOne" label="One Skill" defaultValue="Hello World" />
        <TextField
          id="skillTwo"
          label="Another Skill"
          defaultValue="Hello World"
        />
        <TextField
          id="skillThree"
          label="Another Skill"
          defaultValue="Hello World"
        />
        <TextField
          id="skillFour"
          label="Another Skill"
          defaultValue="Hello World"
        />
        <TextField
          id="skillFive"
          label="Another Skill"
          defaultValue="Hello World"
        />
      </div>
    </form>
  );
}
