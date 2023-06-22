import React, { Component } from 'react';
import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div className='container-fluid'>
            <nav className="navbar bg-primary navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">V-Labs</a>
                </div>
            </nav>
            <div className='mt-1'>
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
                {/* <div className="tab-content">
                    <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> HOME </div>
                    <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> profile </div>
                    <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> messages </div>
                </div> */}
            </div>

            <div className='col-lg-10 '>
                <div className="card text-start">
                    <img className="card-img-start" src="holder.js/100px180/" alt="LAb" />
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-md-10'>
                                <h4 className="card-title">LAb</h4>
                                <p className="card-text">description</p>
                            </div><div className='col-md-2'>
                                <Link className="btn btn-primary " href="#" role="button">Clickhere</Link>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="card text-start">
                    <img className="card-img-start" src="holder.js/100px180/" alt="LAb" />
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-md-10'>
                                <h4 className="card-title">LAb</h4>
                                <p className="card-text">description</p>
                            </div><div className='col-md-2'>
                                <Link className="btn btn-primary " href="#" role="button">Clickhere</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card text-start">
                    <img className="card-img-start" src="holder.js/100px180/" alt="LAb" />
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-md-10'>
                                <h4 className="card-title">LAb</h4>
                                <p className="card-text">description</p>
                            </div><div className='col-md-2'>
                                <Link className="btn btn-primary " href="#" role="button">Clickhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card text-start">
                    <img className="card-img-start" src="holder.js/100px180/" alt="LAb" />
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-md-10'>
                                <h4 className="card-title">LAb</h4>
                                <p className="card-text">description</p>
                            </div><div className='col-md-2'>
                                <Link className="btn btn-primary " href="#" role="button">Clickhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Dashboard;