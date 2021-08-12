import React from 'react'
import DataTable from '../../DataTable'
import MenuTab from '../../MenuTab'
import './GuestMgt.css'

const GuestMgt = () => {
    return (
        <div className="GMcontainer">
               
               <div className="grid-item GMitem1" >
                    <MenuTab/>
                 </div>

            <div className="grid-item GMitem2">
                <DataTable /> 
            </div>
        </div>
    )
}

export default GuestMgt
