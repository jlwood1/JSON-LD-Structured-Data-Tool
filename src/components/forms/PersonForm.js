import React from 'react'
import {connect} from 'react-redux'
import {updateURLLink, onTextboxUpdate} from '../../reducers/formReducer'
import AddURLWidget from '../widgets/AddURLWidget'

let PersonForm = (props) => {
    const form = 'PERSON_FORM'
    return (
        <div className = 'form-content-wrapper'>     
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Name </label> 
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
                    <label className = 'form-label'> Image URL </label> 
                    <input className = 'input-text' type="text" id = "image" onChange = {(event) => {
                        props.onTextboxUpdate('image' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Job Title </label> 
                    <input className = 'input-text' type="text" id = "jobTitle" onChange = {(event) => {
                        props.onTextboxUpdate('jobTitle' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Company </label> 
                    <input className = 'input-text' type="text" id = "worksFor" onChange = {(event) => {
                        props.onTextboxUpdate('worksFor' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label'> Social Profile(s) </label>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget 
                    type = 'Profile'
                    id = 'personSocialProfileLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.personSocialProfileLinks}
                    form = 'PERSON_FORM'
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        personSocialProfileLinks: state.form.personData.sameAs
    }
}

PersonForm = connect(mapStateToProps, {updateURLLink, onTextboxUpdate})(PersonForm)

export default PersonForm;         