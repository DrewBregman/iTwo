import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";



function dataProject(){
    const [projects, setProfiles] = useState([])
    const { state } = useLocation();

    useEffect(() => {
        axios.get("api/project/")
            .then(res =>{
                console.log(res)
                setProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    projects
    )
  }
  
  export default dataProject;