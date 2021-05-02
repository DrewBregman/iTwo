import React  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import $ from "jquery";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Tab1(props) {
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
  const classes = useStyles();
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
    { firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            company: data.get('company'),
            gradYear: data.get('gradYear'),
            Major: data.get('Major'),
            day: data.get('day'),
            meetMe: data.get('meetMe')
        };
     console.log(data1);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://127.0.0.1:8000/api/editP1/2");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader('X-CSRFToken', csrftoken);

    xhr.send(JSON.stringify(data1));
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField name="firstName" id="firstName" label="First Name" defaultValue={props.firstName} />
        <TextField name="lastName" id="lastName" label="Last Name" defaultValue={props.lastName} />
        <TextField
          name = "company"
          id="company"
          label="AY Company"
          defaultValue={props.company}

        />
        <TextField
          name = "gradYear"
          id="grad year"
          label="Class Year"
          defaultValue= {Number(props.gradYear)}
          type = "number"
        />

        <TextField
          name = "Major"
          id="Major"
          label="Major"
          defaultValue={props.Major}
        />
        <TextField
          name = "day"
          id="day"
          label="Days Available"
          defaultValue={props.day}
        />
                <TextField
        style = {{width: 460}}
        name = "meetMe"
        id="meetMe"
          label="Meet Me"
          defaultValue={props.meetMe}

        />
        <Button type = "submit" color="primary">
            Save Profile
          </Button>
      </div>
    </form>

  );
}