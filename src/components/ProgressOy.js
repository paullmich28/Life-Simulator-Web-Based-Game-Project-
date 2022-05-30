import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressOy = () => {
  return (
    <div className='bar'>
        <ProgressBar className='progress' variant="success" now={50} />
        <ProgressBar variant="danger" now={50} />
        <ProgressBar variant="warning" now={50} />
        <ProgressBar variant="info" now={50} />
    </div>
    
  )
}

export default ProgressOy