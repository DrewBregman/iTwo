import "../css/Profile.css";

import React from 'react'

function Profile({title, imageURL, body}) {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageURL} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-title">
                    <p>{body}</p>
                </div>
            </div>
            <div className='btn'>
                <a>
                    View More
                </a>
            </div> 
        </div>
    )
}

export default Profile
