import React from 'react'
import AddURLWidget from '../widgets/AddURLWidget'
import {updateURLLink, onTextboxUpdate} from '../../reducers/formReducer'
import {connect} from 'react-redux';
import AddContactWidget from '../widgets/AddContactWidget'


let OrganizationForm = (props) => {
    const form = 'ORGANIZATION_FORM'
    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Name </label> 
                    <input className = 'input-text' type="text" id = "name" onChange = {(event) => {
                        props.onTextboxUpdate('name', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Alternate Name </label> 
                    <input className = 'input-text' type="text" id = "alternateName" onChange = {(event) => {
                        props.onTextboxUpdate('alternateName', event.target.value, form)
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
                    <label className = 'form-label'> Logo URL </label> 
                    <input className = 'input-text' type="text" id = "logo" onChange = {(event) => {
                        props.onTextboxUpdate('logo' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label'> Social Profile(s) </label>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget
                    type = 'Profile'
                    id = 'organizationSocialProfileLinks'
                    onURLUpdate = {props.updateURLLink} 
                    links = {props.organizationSocialProfileLinks}
                    form = 'ORGANIZATION_FORM'
                />
            </div>
            <div className = 'grid-item'>
                <AddContactWidget
                    form = 'ORGANIZATION_FORM'
                    textboxData = {props.organizationData}
                />
            </div>

        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        organizationSocialProfileLinks: state.form.organizationData.sameAs, 
        organizationData: state.form.organizationData
    }
}

OrganizationForm = connect(mapStateToProps, {updateURLLink, onTextboxUpdate})(OrganizationForm)

export default OrganizationForm; 