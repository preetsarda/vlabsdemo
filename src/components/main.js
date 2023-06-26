import React, { useState } from 'react';

import { useRef, useEffect } from 'react';
import LabAccordion from './labacc';
function MainPanels() {
    const ref = useRef(0)
    const [vserverlink, setServer] = useState({
        url: "",
        username: "",
        password: ""
    });
    const [labs, setLabs] = useState({});
    const updateLabs = (newLabs) => {
        setLabs(newLabs);
    }
    const updateServer = (newServer) => {
        setServer(newServer);
    }
    async function ab() {
        const Response = await fetch("https://rport-data.s3.ap-south-1.amazonaws.com/lab1.json", {
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
        const dat = await Response.json();
        updateServer(dat.VmDetails);
        updateLabs(dat.Lab);
    }
    const reloadFrame = () => {
        if (ref.current) {
            ref.current.src = ref.current.src;
        }
    };

    useEffect(() => {
        ab();
    }, []);
    // useEffect(() => {
    //     const handleFocus = () => {
    //         ref.current.contentWindow.focus();
    //     };

    //     window.addEventListener('DOMContentLoaded', handleFocus);

    //     return () => {
    //         window.removeEventListener('DOMContentLoaded', handleFocus);
    //     };
    // }, []);
    return (
        <div className="container-fluid g-0 p-0 ms-0 me-0">
            <div className="row m-0 g-0 p-0">
                <div className="container mt-0  ms-0 me-0 col-9 g-0 text-align-center">
                    <div><iframe title='VM' id="content" ref={ref} tabIndex="-1" src={vserverlink.url} ></iframe>
                    </div>
                </div>
                <div className="col-3 g-0 p-0 ms-0 me-0 " >
                    <div id='sidebar' className="container overflow-auto ps-1 pe-1 mt-0 position-top-0 position-end-0 position-bottom-0 position-start-0 ms-0 me-0 col-md-10 g-0 ">
                        <div className='row   ms-0 me-0'>
                            <button onClick={reloadFrame}>refresh</button>
                            <div className='col-md-5'>Username</div>
                            <div className='col-md-7 lead'>{vserverlink.username}</div>
                            <div className='col-md-5'>Password</div>
                            <div className='col-md-7 lead'>{vserverlink.password}</div>
                        </div>
                        {Object.keys(labs).length > 0 && <LabAccordion labs={labs} />}
                    </div>
                </div>
            </div>
        </div>


    )
}
export default MainPanels;