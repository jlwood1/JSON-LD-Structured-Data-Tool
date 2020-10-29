import React from 'react'
import AddURLWidget from '../widgets/AddURLWidget'
import {updateURLLink} from '../../reducers/widgetReducer'
import {connect} from 'react-redux';
import AddContactWidget from '../widgets/AddContactWidget'


let OrganizationForm = (props) => {
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
                    <label className = 'form-label'> Alternate Name </label> 
                    <input className = 'input-text' type="text" id = "alternateName"/> 
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
                    <label className = 'form-label'> Logo URL </label> 
                    <input className = 'input-text' type="text" id = "logo"/> 
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
                />
            </div>
            <div className = 'grid-item'>
                <AddContactWidget/>
            </div>

        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        organizationSocialProfileLinks: state.app.organizationSocialProfileLinks 
    }
}

OrganizationForm = connect(mapStateToProps, {updateURLLink})(OrganizationForm)

export default OrganizationForm; 