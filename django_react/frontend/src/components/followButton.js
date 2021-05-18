
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import $ from "jquery";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      marginTop: 20,
      maxHeight: 200,
      height: 450,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    post: {
      margin: "auto",
      padding: 10,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    text:{
      color: theme.palette.text.secondary,
    },
    name: {
      margin: "auto",
      height: 450,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    divide: {
      textAlign: 'center',
      margin: 'auto',
    },
    profileImg: {
      margin: "0 2px",
      display: "inline-block",
      width: 160,
      height: 160,
      border: 10
    }
  }));
  

function getProfile(id){
    const [profiles, setProfiles] = useState([])
  
    useEffect(() => {
        const str = "/api/profiles/" + id
        axios.get(str)
            .then(res =>{
                console.log(res)
                setProfiles(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    profiles
                    /*profiles.map(profile => {
                      const {major, day, experienceOne, experienceTwo, experienceThree,
                            experienceFour, experienceFive, skillOne, skillTwo, SkillThree,
                            skillFour, skillFive, name, goalOne, goalTwo, goalThree,
                            goalOneDesc, goalTwoDesc, goalThreeDesc, meetMe, lookFor} = profile;
                      })*/
    )
  }
  


export default function FollowButton(props) {

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
      const handleFollow = (event) => {
        event.preventDefault();
        //const data = new FormData(event.target);
        //const rProf = getProfile(window.REP_LOG_APP_PROPS.rProf);
        //const folProf = getProfile(window.REP_LOG_APP_PROPS.folProf);
        console.log(data);
        console.log(data.get('company')); // reference by form input's `name` tag
        const headers = new Headers({
            'Content-Type': 'application/json',
            /*'X-CSRF-TOKEN': csrfToken*/
        });
        const data1 =
        {       rProf: window.REP_LOG_APP_PROPS.user_id,
                folProf: window.REP_LOG_APP_PROPS.request_id,
            };
         console.log(data1);
    
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
    
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
          }
        });
    
        xhr.open("POST", "http://127.0.0.1:8000/api/follow");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader('X-CSRFToken', csrftoken);
    
        xhr.send(JSON.stringify(data1));
      };
      return (
          <div>
            <Button onClick={handleFollow} variant="outlined" color="primary">
                Follow
            </Button>
          </div>
      );
    }