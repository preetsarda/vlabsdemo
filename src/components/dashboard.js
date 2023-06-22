import React, { Component } from 'react';
import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div className='container-fluid'>
            {/* <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input className="form-control me-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}
            {/* <!-- Nav tabs --> */}
            <div>
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
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> home </div>
                    <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> profile </div>
                    <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> messages </div>
                </div>
            </div>

            <div className='col-lg-10 mt-5'>
                <div className="card text-start">
                    <img className="card-img-start" src="holder.js/100px180/" alt="LAb" />
                    <div className="card-body">
                        <h4 className="card-title">LAb</h4>
                        <p className="card-text">description</p>
                        <Link className="btn btn-primary-end" href="#" role="button">Clickhere</Link>

                    </div>
                </div>
                <div className="card text-start">
                    <img className="card-img-start" src="holder.js/100px180/" alt="LAb" />
                    <div className="card-body">
                        <h4 className="card-title">LAb</h4>
                        <p className="card-text">description</p>
                        <Link className="btn btn-primary-end" href="#" role="button">Clickhere</Link>
                    </div>
                </div>
                <div className="card text-start">
                    <img className="card-img-start" src="holder.js/100px180/" alt="LAb" />
                    <div className="card-body">
                        <h4 className="card-title">LAb</h4>
                        <p className="card-text">description</p>
                        <Link className="btn btn-primary-end" href="#" role="button">Clickhere</Link>
                    </div>
                </div>
                <div className="card text-start">
                    <img className="card-img-start" src="holder.js/100px180/" alt="LAb" />
                    <div className="card-body">
                        <h4 className="card-title">LAb</h4>
                        <p className="card-text">description</p>
                        <Link className="btn btn-primary-end" href="#" role="button">Clickhere</Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Dashboard;