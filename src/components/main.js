import React, { createRef, useState } from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './vm';
import IframeResizer from 'iframe-resizer-react';
import { useRef, useEffect } from 'react';
import LabAccordion from './labacc';
// import { createRef } from 'react';
function MainPanels() {
    const ref = useRef(0)
    const ref1 = useRef(null);
    const [f, setF] = useState(0);
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
    function fo() {
        if (ref.current) {
            ref.current.contentWindow.focus()
        }
    }
    useEffect(() => {
        ab();
        if (labs) {
            setF(1);
        }
    }, []);
    return (
        <div className="container-fluid g-0 p-0 ms-0 me-0">
            <div className="row m-0 g-0 p-0">
                <div className="container mt-0  ms-0 me-0 col-9 g-0 text-align-center">
                    <div><MainPanel link={vserverlink} ref={ref} />
                    </div>
                </div>
                <div className="col-3 g-0 p-0 ms-0 me-0">
                    <div id='sidebar' className="container overflow-auto ps-1 pe-1 mt-0 position-top-0 position-end-0 position-bottom-0 position-start-0 ms-0 me-0 col-md-10 g-0 ">
                        <div className='row   ms-0 me-0'>
                            <div className='col-5'>Username</div>
                            <div className='col-7 lead'>{vserverlink.username}</div>
                            <div className='col-5'>Password</div>
                            <div className='col-7 lead'>{vserverlink.password}</div>
                        </div>
                        {Object.keys(labs).length > 0 && <LabAccordion labs={labs} />}
                    </div>
                </div>
            </div>
        </div>


    )
}
export default MainPanels;