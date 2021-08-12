import React from 'react'
import StatusCircle from '../../StatusCircle/StatusCircle'
import InHouseTable from '../../InHouseTable'
import './Overview.css'

const Overview = () => {
    return (
        <div className="OVcontainer">
           
            <div className="grid-item OVitem1" >
                <StatusCircle statusCounter={6} statusLabel={'In House'}/> 
                <StatusCircle statusCounter={3} statusLabel={'Checkout'}/> 
                <StatusCircle statusCounter={1} statusLabel={'Booked'}/> 
                <StatusCircle statusCounter={2} statusLabel={'Clean'}/> 
                <StatusCircle statusCounter={5} statusLabel={'Dirty'}/>
                <StatusCircle statusCounter={3} statusLabel={'Out of Order'}/> 
            </div>

            <div className="grid-item OVitem2">
                <InHouseTable /> 
            </div>
   
        </div>
    )
}

export default Overview
