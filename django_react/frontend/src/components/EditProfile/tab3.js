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

export default function Tab3() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
        style = {{width: 460}}
          id="LookingFor"
          label="What Are You Looking For?"
          defaultValue="Hello World"

        />
        <TextField
        style = {{width: 460}}
          id="goalOne"
          label="First Goal"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          id="goalOneDesc"
          label="Describe the Goal"
          defaultValue="Hello World"
          multiline={true}
        />
                <TextField
        style = {{width: 460}}
          id="goalTwo"
          label="Second Goal"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          id="goalTwoDesc"
          label="Describe the Goal"
          defaultValue="Hello World"
          multiline={true}
        />
                <TextField
        style = {{width: 460}}
          id="goalThree"
          label="Third Goal"
          defaultValue="Hello World"
        />
        <TextField
        style = {{width: 460}}
          id="goalThreeDesc"
          label="Describe the Goal"
          defaultValue="Hello World"
          multiline={true}
        />
      </div>
    </form>
  );
}
