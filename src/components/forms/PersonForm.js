import React from 'react'
import {connect} from 'react-redux'
import {updateURLLink} from '../../reducers/widgetReducer'
import AddURLWidget from '../widgets/AddURLWidget'

let PersonForm = (props) => {
    return (
        <div className = 'form-content-wrapper'>     
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Name </label> 
                    <input className = 'input-text' type="text" id = "name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> URL </label> 
                    <input className = 'input-text' type="url" id = "name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Image URL </label> 
                    <input className = 'input-text' type="text" id = "image"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Job Title </label> 
                    <input className = 'input-text' type="jobTitle" id = "name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Company </label> 
                    <input className = 'input-text' type="worksFor" id = "name"/> 
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
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        personSocialProfileLinks: state.app.personSocialProfileLinks
    }
}

PersonForm = connect(mapStateToProps, {updateURLLink})(PersonForm)

export default PersonForm;         