import React from 'react'; 
import AddURLWidget from '../widgets/AddURLWidget'
import {updateURLLink} from '../../reducers/appReducer';
import {connect} from 'react-redux';
import OpenHoursSpecificationWidget from '../widgets/OpenHoursSpecificationWidget'


let LocalBusinessForm = (props) => {
    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Business Name </label> 
                    <input className = 'input-text' type="text" id = "name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget 
                    type = 'Image' 
                    id = 'localBusinessImageLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.localBusinessImageLinks} 
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Company Website (URL) </label> 
                    <input className = 'input-text' type="text" id = "url"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Phone Number </label> 
                    <input className = 'input-text' type="text" id = "telephone"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Street </label> 
                    <input className = 'input-text' type="text" id = "streetAddress"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> City </label> 
                    <input className = 'input-text' type="text" id = "addressLocality"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Zip Code </label> 
                    <input className = 'input-text' type="text" id = "postalCode"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Country Code </label> 
                    <input className = 'input-text' type="text" id = "addressCountry"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget 
                    type = 'Social Media Profile' 
                    id = 'localBusinessSocialProfileLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.localBusinessSocialProfiles} 
                />
            </div>
            <div className = 'grid-item'>
                <OpenHoursSpecificationWidget/>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        localBusinessImageLinks: state.app.localBusinessImageLinks,  
        localBusinessSocialProfiles: state.app.localBusinessSocialProfileLinks
    }
}

LocalBusinessForm = connect(mapStateToProps, {updateURLLink})(LocalBusinessForm) 
export default LocalBusinessForm