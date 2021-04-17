import "../css/Profile.css";

import React from 'react'

function Profile({name, major, followers, following}) {
    return (
            <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel">
                        <div className="panel-body profile-information">
                        <div className="col-md-3">
                            <div className="profile-pic text-center">
                                <img src="https://images.huffingtonpost.com/2016-03-25-1458864692-9841862-MahatmaGandhiALegacyofPeace-thumb.jpg" alt=""></img>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="profile-desk text-center">
                                <h1>{name}</h1>
                                <div className="followStats">
                                    <h2><b>Followers:</b></h2> {followers}<h2><b>Following:</b></h2> {following}
                                </div>
                                <span className="text-muted">{major} major</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor vestibulum imperdiet. Ut auctor accumsan erat, a vulputate metus tristique non. Aliquam aliquam vel orci quis sagittis.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel act-content">
                        <div className="recent-act">
                            <div className="activity-icon terques">
                                <i className="fa fa-check"></i>
                            </div>
                            <div className="activity-desk">
                                <h2>[PLACEHOLDER FOR POST PREVIEW]</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor vestibulum imperdiet</p>
                            </div>
                            <div className="activity-icon terques">
                                <i className="fa fa-list"></i>
                            </div>
                            <div className="activity-desk">
                                <h2>[PLACEHOLDER FOR ABOUT PREVIEW]</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor vestibulum imperdiet</p>
                            </div>
                            <div className="activity-icon terques">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="activity-desk">
                                <h2>[PLACEHOLDER FOR PROJECTS PREVIEW]</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor vestibulum imperdiet</p>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}



export default Profile
