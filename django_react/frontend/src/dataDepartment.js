import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";



function dataDepartment(){
    const [departments, setDepartments] = useState([])
    const { state } = useLocation();

    useEffect(() => {
        axios.get("api/department/")
            .then(res =>{
                console.log(res)
                setDepartments(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
                    departments
    )
  }
  
  export default dataDepartment;