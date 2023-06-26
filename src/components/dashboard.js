import React, { Component } from 'react';
import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div className='container-fluid mt-5'>


            <div className='col-lg-10 card'>
                <div className="card text-start">
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-md-10'>
                                <h4 className="card-title">LAB</h4>
                            </div><div className='col-md-2'>
                                <Link className="btn btn-primary " to="/test" role="button">Clickhere</Link>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="card text-start">   
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-md-10'>
                                <h4 className="card-title">LAB</h4>

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