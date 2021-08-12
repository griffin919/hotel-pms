import React from 'react'
import './FrontOffice.css'
import DataTable from '../../DataTable'
import FOmenuTab from './FOmenuTab'

const FrontOffice = () => {
    return (
        <div className="FOcontainer">
            <div className="grid-item GMitem1" >
                    <FOmenuTab/>
                 </div>

            <div className="grid-item GMitem2">
                <DataTable /> 
            </div>
   
        </div>
    )
}

export default FrontOffice
