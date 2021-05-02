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

export default function Tab2(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
        style = {{width: 460}}
          name="experienceOne"
          label="One Experience"
          defaultValue={props.experienceOne}

        />
        <TextField
        style = {{width: 460}}
          name="experienceTwo"
          label="Another Experience"
          defaultValue={props.experienceTwo}
        />
        <TextField
        style = {{width: 460}}
          name="experienceThree"
          label="Another Experience"
          defaultValue={props.experienceThree}
        />
        <TextField
        style = {{width: 460}}
          name="experienceFour"
          label="Another Experience"
          defaultValue={props.experienceFour}
        />
        <TextField
        style = {{width: 460}}
          name="experienceFive"
          label="Another Experience"
          defaultValue={props.experienceFive}
        />
        <TextField name="skillOne" label="One Skill" defaultValue={props.skillOne} />
        <TextField
          name="skillTwo"
          label="Another Skill"
          defaultValue={props.skillTwo}
        />
        <TextField
          name="skillThree"
          label="Another Skill"
          defaultValue={props.skillThree}
        />
        <TextField
          name="skillFour"
          label="Another Skill"
          defaultValue={props.skillFour}
        />
        <TextField
          name="skillFive"
          label="Another Skill"
          defaultValue={props.skillFive}
        />
      </div>
    </form>
  );
}
