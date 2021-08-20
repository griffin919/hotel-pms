import React from 'react'
import MUTab from './MUTab'
import './FrontOffice.css'

const FrontOffice = () => {
  return (
    <div className="FOcontainer">
      <div className="griditem FOitem1">
        <MUTab/>
      </div>
      <div className="griditem FOitem2">
        <h1>fo main</h1>
      </div>
    </div>
  )
}

export default FrontOffice

