import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";


function dataProfile(){
    const [profiles, setProfiles] = useState([])
    const { state } = useLocation();

    useEffect(() => {
        axios.get("api/profiles/")
            .then(res =>{
                console.log(res)
                setProfiles(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    profiles.map(profile => {
                      const {major, day, experienceOne, experienceTwo, experienceThree,
                            experienceFour, experienceFive, skillOne, skillTwo, SkillThree,
                            skillFour, skillFive, name, goalOne, goalTwo, goalThree, 
                            goalOneDesc, goalTwoDesc, goalThreeDesc, meetMe, lookFor, id} = profile;
                      })
    )
  }
  
function DataFetching() {
    const [leads, setLeads] = useState([])

    useEffect(() => {
        axios.get("api/lead")
            .then(res =>{
                console.log(res)
                setLeads(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <ul>
                {
                    leads.map(lead => <li key={lead.id}>{lead.name} says {lead.message}</li>)
                }
            </ul>
        </div>
    )
}

export default dataProfile;

