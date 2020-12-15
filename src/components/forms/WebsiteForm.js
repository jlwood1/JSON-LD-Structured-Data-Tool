import React from 'react'
import {onTextboxUpdate} from '../../reducers/formReducer'
import {connect} from 'react-redux'
let WebsiteForm = (props) => {
    const form = 'WEBSITE_FORM'
    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Website Name </label> 
                    <input className = 'input-text' type="text" id = "name" onChange = {(event) => {
                        props.onTextboxUpdate('name' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> URL </label> 
                    <input className = 'input-text' type="text" id = "url" onChange = {(event) => {
                        props.onTextboxUpdate('url' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Search URL </label> 
                    <input className = 'input-text' type="text" id = "target" onChange = {(event) => {
                        props.onTextboxUpdate('target' , event.target.value, form)
                    }}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        websiteData: state.form.websiteData
    }
}

WebsiteForm = connect(mapStateToProps, {onTextboxUpdate})(WebsiteForm)

export default WebsiteForm