import React from 'react'

let WebsiteForm = () => {
    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Website Name </label> 
                    <input className = 'input-text' type="text" id = "name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> URL </label> 
                    <input className = 'input-text' type="text" id = "url"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Search URL </label> 
                    <input className = 'input-text' type="text" id = "target"/> 
                </div>
            </div>
        </div>
    )
}

export default WebsiteForm