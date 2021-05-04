import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';


const useStyles = makeStyles(theme => ({
    root: {
      minWidth: 275,
      flexGrow: 1,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    grid: {
      backgroundColor: 'blue',
    },
    paper: {
      padding: theme.spacing(2),
      flexGrow: 1,
      backgroundColor: 'white',
  
    },
  }));
  
function getMilestones(project_id){
    const [milestones, setMilestones] = useState([])
  
    useEffect(() => {
        const str = "/api/project/" + project_id + '/milestones'
        axios.get(str)
            .then(res =>{
                console.log(res)
                setMilestones(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    milestones
    )
  }

function numGen(){
    let val = Math.floor(Math.random() * 255);
    return val;
  };


function Milestones() {
    var randomColor = require('randomcolor'); 
    var color = randomColor();
    var colorIcon = randomColor();
    const milestones = getMilestones(project_id);
    const classes = useStyles();

    return (
        <div>
        <VerticalTimeline>
            <List className={classes.root} subheader={<li />}>
            <li key={`role-${milestones.milestones_id}`} >
                
                <ul >
                    {milestones.map((m) => 
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: '#000000'}}
                    contentArrowStyle={{ borderRight: '7px solid #0690FA' }}
                    date={m.date}
                    iconStyle={{ background: colorIcon, color: '#fff' }}
                    icon={<WorkIcon />}
                >

                    <h3 className="vertical-timeline-element-title">{m.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{m.project}</h4>
                    <p>
                    {m.description}
                    </p>
                    
                    </VerticalTimelineElement>

                )};
                </ul>
            </li>
            </List>
        </VerticalTimeline>
        </div>
    )
}

export default Milestones

/* Let's add a green check mark icon if the milestone model's status object = True, else add a red  "x" icon */
