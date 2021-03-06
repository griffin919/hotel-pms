import React from 'react'
import './StatusCircle.css'

const StatusCircle = ({statusCounter, statusLabel}) => {
    return (
            <div className="elipse-container">
                <div>
                  <h2 className='itemLabel'>{statusLabel}</h2>
                </div>
                <div className="elipse">
                    <h1>{statusCounter}</h1>
                </div> 
            </div>
    )
}

export default StatusCircle
