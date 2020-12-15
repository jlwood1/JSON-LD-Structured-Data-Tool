import React from 'react'; 
import AddURLWidget from '../widgets/AddURLWidget'
import {connect} from 'react-redux';
import {updateURLLink, onTextboxUpdate, updateDropdown} from '../../reducers/formReducer';
import DropdownWidget from '../widgets/DropdownWidget'


let EventForm = (props) => {
    const form = 'EVENT_FORM'
    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Event Name </label> 
                    <input className = 'input-text' type="text" id = "name" onChange = {(event) => {
                        props.onTextboxUpdate('name', event.target.value, form) 
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Event Description </label> 
                    <input className = 'input-text' type="text" id = "description" onChange = {(event) => {
                        props.onTextboxUpdate('description', event.target.value, form) 
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget  
                    type = 'Image'
                    id = 'eventImageLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.eventImageLinks}
                    form = 'EVENT_FORM' 
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Start Date </label> 
                        <input className = 'input-text' type="date" id = "startDate" onChange = {(event) => {
                            props.onTextboxUpdate('startDate', event.target.value, form) 
                        }}/> 
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Start Time </label> 
                        <input className = 'input-text' type="time" id = "start-time" onChange = {(event) => {
                            props.onTextboxUpdate('startTime', event.target.value, form) 
                        }}/> 
                    </div>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> End Date </label> 
                        <input className = 'input-text' type="date" id = "endDate" onChange = {(event) => {
                            props.onTextboxUpdate('endDate', event.target.value, form) 
                        }}/> 
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> End Time </label> 
                        <input className = 'input-text' type="time" id = "endTime" onChange = {(event) => {
                            props.onTextboxUpdate('endTime', event.target.value, form) 
                        }}/> 
                    </div>
                </div>
            </div>
            <div className = 'grid-item'>
                <DropdownWidget
                    options = {['Person', 'Performing Group', 'Music Group', 'Dance Group', 'Theater Group']}
                    showDropdown = {true}
                    placeHolder = 'Select Performer...'
                    dropdownId = {'performerTypeDropdown'}
                    onUpdate = {props.updateDropdown}
                    dropdownValue = {props.performerType}
                    label = {'Performer Type'}
                    form = 'EVENT_FORM'
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Performer Name </label> 
                    <input className = 'input-text' type="text" id = "performer-name" onChange = {(event) => {
                        props.onTextboxUpdate('performerName', event.target.value, form) 
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Venue Name </label> 
                    <input className = 'input-text' type="text" id = "venue" onChange = {(event) => {
                        props.onTextboxUpdate('venueName', event.target.value, form) 
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Street Address </label> 
                    <input className = 'input-text' type="text" id = "street-address" onChange = {(event) => {
                        props.onTextboxUpdate('streetAddress', event.target.value, form) 
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Zip Code </label> 
                    <input className = 'input-text' type="text" id = "zip-code" onChange = {(event) => {
                        props.onTextboxUpdate('zipCode', event.target.value, form) 
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Country Code </label> 
                    <input className = 'input-text' type="text" id = "country-code" onChange = {(event) => {
                        props.onTextboxUpdate('addressCountry', event.target.value, form) 
                    }}/> 
                </div> 
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Region Code </label> 
                    <input className = 'input-text' type="text" id = "region-code" onChange = {(event) => {
                        props.onTextboxUpdate('regionCode', event.target.value, form) 
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Currency Code </label> 
                    <input className = 'input-text' type="text" id = "currency-code" onChange = {(event) => {
                        props.onTextboxUpdate('currencyCode', event.target.value, form) 
                    }}/> 
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        eventImageLinks: state.form.eventData.image, 
        performerType: state.form.eventData.performerType
    }
}

EventForm = connect(mapStateToProps, {updateURLLink, onTextboxUpdate, updateDropdown})(EventForm)
export default EventForm; 