import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

function VmDetails(props) {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        console.log(233)
        setShowModal(true);
    }, [props.username]);

    return (
        <>
            {showModal && (<div className="modal" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Credentials</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            username:{props.username}<br />password:{props.password}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            )}</>
    );
}
export default VmDetails;