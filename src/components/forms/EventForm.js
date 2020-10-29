import React from 'react'; 
import AddURLWidget from '../widgets/AddURLWidget'
import {connect} from 'react-redux';
import {updateURLLink} from '../../reducers/widgetReducer';


let EventForm = (props) => {
    
    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Event Name </label> 
                    <input className = 'input-text' type="text" id = "name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'description'> 
                    <label className = 'form-label'> Event Description </label> 
                    <input className = 'input-text' type="text" id = "headline"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget  
                    type = 'Image'
                    id = 'eventImageLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.eventImageLinks}
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Start Date </label> 
                        <input className = 'input-text' type="date" id = "start-date"/> 
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Start Time </label> 
                        <input className = 'input-text' type="time" id = "start-time"/> 
                    </div>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> End Date </label> 
                        <input className = 'input-text' type="date" id = "start-date"/> 
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> End Time </label> 
                        <input className = 'input-text' type="time" id = "start-time"/> 
                    </div>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Venue Name </label> 
                    <input className = 'input-text' type="text" id = "venue"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Street Address </label> 
                    <input className = 'input-text' type="text" id = "street-address"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Zip Code </label> 
                    <input className = 'input-text' type="text" id = "zip-code"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Country Code </label> 
                    <input className = 'input-text' type="text" id = "country-code"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Region Code </label> 
                    <input className = 'input-text' type="text" id = "region-code"/> 
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        eventImageLinks: state.app.eventImageLinks
    }
}

EventForm = connect(mapStateToProps, {updateURLLink})(EventForm)
export default EventForm; 