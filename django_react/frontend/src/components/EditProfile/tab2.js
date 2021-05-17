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

export default function Tab2(props) {
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
    { experienceOne: data.get('experienceOne'),
            experienceTwo: data.get('experienceTwo'),
            experienceThree: data.get('experienceThree'),
            experienceFour: data.get('experienceFour'),
            experienceFive: data.get('experienceFive'),
            skillOne: data.get('skillOne'),
            skillTwo: data.get('skillTwo'),
            skillThree: data.get('skillThree'),
            skillFour: data.get('skillFour'),
            skillFive: data.get('skillFive'),
        };
     console.log(data1);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://127.0.0.1:8000/api/editP2/" + window.REP_LOG_APP_PROPS.user_id);
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
        <Button type = "submit" color="primary">
            Save Profile
          </Button>
      </div>
    </form>
  );
}
