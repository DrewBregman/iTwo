import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";



function dataClubs(club_id){
    const [clubs, setClubs] = useState([])
    const { state } = useLocation();

    useEffect(() => {
        axios.get("api/club/" + club_id)
            .then(res =>{
                console.log(res)
                setClubs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    clubs
    )
  }
  
  export default dataClubs;