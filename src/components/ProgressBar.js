import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
  const [totalTasks, sett] = useState(props.tasks);
  const [completedPercentage, setcomp] = useState(0);
  useEffect(() => {
    sett(props.tasks)
    setcomp((props.complete / totalTasks) * 100);
  }, [props])

  return (<div className='sticky-top'>
    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={`${completedPercentage}%`} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: `${completedPercentage}%` }}>{completedPercentage.toFixed(2)}% completed</div>
    </div></div>

  );
};

export default ProgressBar;
