import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ tasks }) => {
  const [totalTasks] = useState(tasks.length);

  const completedTasks = tasks.filter(task => task.completed);
  const completedPercentage = (completedTasks.length / totalTasks) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${completedPercentage}%` }}
      />
      <div className="progress-bar__text">
        {`${completedPercentage.toFixed(2)}% completed`}
      </div>
    </div>
  );
};

export default ProgressBar;
