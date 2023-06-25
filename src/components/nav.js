import React, { Component } from 'react';
function Navbar() {
    return (
        <div className='container-fluid m-0'>
            <nav className="navbar navbar-expand bg-primary navbar-dark m-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">V-Labs</a>
                </div>
            </nav>
            {/* <div className='mt-1'>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}
export default Navbar;