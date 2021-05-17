import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import $ from "jquery";

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
    function refreshPage() {
    window.location.reload(true);
  }
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
  var csrftoken = getCookie('csrftoken');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    console.log(data.get('company')); // reference by form input's `name` tag
    const headers = new Headers({
        'Content-Type': 'application/json',
        /*'X-CSRF-TOKEN': csrfToken*/
    });
    const data1 =
    { lookingFor: data.get('lookingFor'),
            goalOne: data.get('goalOne'),
            goalTwo: data.get('goalTwo'),
            goalThree: data.get('goalThree'),
            goalOneDesc: data.get('goalOneDesc'),
            goalTwoDesc: data.get('goalTwoDesc'),
            goalThreeDesc: data.get('goalThreeDesc'),
        };
     console.log(data1);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://127.0.0.1:8000/api/editP3/" + window.REP_LOG_APP_PROPS.user_id);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader('X-CSRFToken', csrftoken);

    xhr.send(JSON.stringify(data1));
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
        style = {{width: 460}}
          name="lookingFor"
          label="What Are You Looking For?"
          defaultValue={props.lookingFor}

        />
        <TextField
        style = {{width: 460}}
          name="goalOne"
          label="First Goal"
          defaultValue={props.goalOne}
        />
        <TextField
        style = {{width: 460}}
          name="goalOneDesc"
          label="Describe the Goal"
          defaultValue={props.goalOneDesc}
          multiline={true}
        />
                <TextField
        style = {{width: 460}}
          name="goalTwo"
          label="Second Goal"
          defaultValue={props.goalTwo}
        />
        <TextField
        style = {{width: 460}}
          name="goalTwoDesc"
          label="Describe the Goal"
          defaultValue={props.goalTwoDesc}
          multiline={true}
        />
                <TextField
        style = {{width: 460}}
          name="goalThree"
          label="Third Goal"
          defaultValue={props.goalThree}
        />
        <TextField
        style = {{width: 460}}
          name="goalThreeDesc"
          label="Describe the Goal"
          defaultValue={props.goalThreeDesc}
          multiline={true}
        />
         <Button type = "submit" color="primary">
            Save Profile
          </Button>
      </div>
    </form>
  );
}
