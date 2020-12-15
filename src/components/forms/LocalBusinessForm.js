import React, {useState} from 'react'; 
import AddURLWidget from '../widgets/AddURLWidget'
import {updateURLLink, onTextboxUpdate, onOpenHoursUpdate} from '../../reducers/formReducer';
import {connect} from 'react-redux';
import OpenHoursSpecificationWidget from '../widgets/OpenHoursSpecificationWidget'


let LocalBusinessForm = (props) => {

    const [isAlwaysOpen, updateAlwaysOpen] = useState(false)

    const form = 'LOCAL_BUSINESS_FORM'
    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Business Name </label> 
                    <input className = 'input-text' type="text" id = "name" onChange = {(event) => {
                        props.onTextboxUpdate('name' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget 
                    type = 'Image' 
                    id = 'localBusinessImageLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.localBusinessImageLinks} 
                    form = 'LOCAL_BUSINESS_FORM'
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Company Website (URL) </label> 
                    <input className = 'input-text' type="text" id = "url" onChange = {(event) => {
                        props.onTextboxUpdate('url' , event.target.value, form)
                    }}/>  
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Phone Number </label> 
                    <input className = 'input-text' type="text" id = "telephone" onChange = {(event) => {
                        props.onTextboxUpdate('telephone' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Street </label> 
                    <input className = 'input-text' type="text" id = "streetAddress" onChange = {(event) => {
                        props.onTextboxUpdate('streetAddress' , event.target.value, form)
                    }}/>  
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> City </label> 
                    <input className = 'input-text' type="text" id = "addressLocality" onChange = {(event) => {
                        props.onTextboxUpdate('addressLocality' , event.target.value, form)
                    }}/>  
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Zip Code </label> 
                    <input className = 'input-text' type="text" id = "postalCode" onChange = {(event) => {
                        props.onTextboxUpdate('postalCode' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Country Code </label> 
                    <input className = 'input-text' type="text" id = "addressCountry" onChange = {(event) => {
                        props.onTextboxUpdate('addressCountry' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget 
                    type = 'Social Media Profile' 
                    id = 'localBusinessSocialProfileLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.localBusinessSocialProfiles} 
                    form = 'LOCAL_BUSINESS_FORM'
                />
            </div>
            <div className = 'grid-item'> 
                <input type = 'checkbox' id = 'alwaysOpen' onChange = {(event) => 
                {   
                    let alwaysOpen = isAlwaysOpen ? false : true
                    updateAlwaysOpen(alwaysOpen)
                    props.onTextboxUpdate('alwaysOpen', alwaysOpen, form, '', 'Update')
                }
                }/>
                <label className = 'checkbox-label'> Open 24/7 </label>
            </div>
            {
                !isAlwaysOpen ? 
                    <div className = 'grid-item'>
                        <OpenHoursSpecificationWidget
                            form = {form}
                            onUpdate = {props.onOpenHoursUpdate}
                            id = 'localBusinessOpenHours' 
                            openHours = {props.openHours}
                        />
                    </div>
                : ''
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        localBusinessImageLinks: state.form.localBusinessData.image,  
        localBusinessSocialProfiles: state.form.localBusinessData.sameAs, 
        openHours: state.form.localBusinessData.openHours
    }
}

LocalBusinessForm = connect(mapStateToProps, {updateURLLink, onTextboxUpdate, onOpenHoursUpdate})(LocalBusinessForm) 
export default LocalBusinessForm