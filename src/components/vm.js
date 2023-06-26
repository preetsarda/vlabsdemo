import React, { forwardRef } from 'react';

const MainPanel = forwardRef((props, ref) => {
    return (
        <>

            <embed tabIndex="-1" src={props.link.url} ></embed>
        </>
    )
})
export default MainPanel;