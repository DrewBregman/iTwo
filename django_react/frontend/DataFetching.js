import React, {useState, useEffect} from 'react'
import axios from 'axios'


function dataProfile(){
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

export default DataFetching

