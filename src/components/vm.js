import React, { forwardRef } from 'react';
import VmDetails from './vmced';

const MainPanel = forwardRef((props, ref) => {
    return (
        <>

            <iframe ref={ref} src={props.link.url} title="Virtual server" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </>
    )
})
export default MainPanel;