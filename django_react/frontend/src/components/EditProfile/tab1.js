import React  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Tab1() {

  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data.get('company')); // reference by form input's `name` tag

    fetch('/api/editP1/' + window.REP_LOG_APP_PROPS.user_id, {
      method: 'POST',
      body: data,
    });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField name="firstName" id="firstName" label="First Name" defaultValue="Hello World" />
        <TextField name="lastName" id="lastName" label="Last Name" defaultValue="Hello World" />
        <TextField
          name = "company"
          id="company"
          label="AY Company"
          defaultValue="current password"

        />
        <TextField
          name = "gradYear"
          id="grad year"
          label="Class Year"
          defaultValue="current value"
          type = "number"
        />

        <TextField
          name = "Major"
          id="major"
          label="Major"
          defaultValue="current value"
        />
        <TextField
          name = "day"
          id="day"
          label="Days Available"
          defaultValue="current value"
        />
                <TextField
        style = {{width: 460}}
        name = "meetMe"
        id="meetMe"
          label="Meet Me"
          defaultValue="Hello World"

        />
        <Button type = "submit" color="primary">
            Save Profile
          </Button>
      </div>
    </form>

  );
}