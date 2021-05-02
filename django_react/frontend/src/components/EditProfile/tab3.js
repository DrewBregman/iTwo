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

export default function Tab3(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
        style = {{width: 460}}
          name="lookingFor"
          label="What Are You Looking For?"
          defaultValue={props.lookingFor}

        />
        <TextField
        style = {{width: 460}}
          id="goalOne"
          label="First Goal"
          defaultValue={props.goalOne}
        />
        <TextField
        style = {{width: 460}}
          id="goalOneDesc"
          label="Describe the Goal"
          defaultValue={props.goalOneDesc}
          multiline={true}
        />
                <TextField
        style = {{width: 460}}
          id="goalTwo"
          label="Second Goal"
          defaultValue={props.goalTwo}
        />
        <TextField
        style = {{width: 460}}
          id="goalTwoDesc"
          label="Describe the Goal"
          defaultValue={props.goalTwoDesc}
          multiline={true}
        />
                <TextField
        style = {{width: 460}}
          id="goalThree"
          label="Third Goal"
          defaultValue={props.goalThree}
        />
        <TextField
        style = {{width: 460}}
          id="goalThreeDesc"
          label="Describe the Goal"
          defaultValue={props.goalThreeDesc}
          multiline={true}
        />
      </div>
    </form>
  );
}
