import React from 'react'
import DropdownWidget from './DropdownWidget'
import {updateDropdown, updateDynamicSection, updateScrollableCheckBoxes} from '../../reducers/appReducer'
import {connect} from 'react-redux'
import ScrollableCheckBoxesBox from './ScrollableCheckBoxesBox'
import {languages} from '../../utils/staticdata/languages'

let ContactWidget = (props) => {
    return (
        <div className = 'contact-widget-wrapper'>
            <div className = 'contact-widget'> 
                {
                    props.contactSections.length ? 
                        <div className = 'contact-section'>
                            <label className = 'form-label-large'> Contacts </label>
                            {   
                                props.contactSections.map(contactSections => (    
                                    <div className = 'contact-section-grid' key = {contactSections.sectionId}>
                                        <label className = 'section-label'> Contact {contactSections.sectionId + 1}</label>
                                        <div className = 'grid-item'>
                                            <DropdownWidget key = {contactSections.sectionId}
                                                options={['None', 'Customer Service', 'Technical Support', 'Billing Support', 'Bill Payment', 'Sales', 'Reservations', 'Credit card support', 'Emergency', 'Baggage tracking', 'Roadside Assistance', 'Package Tracking']}
                                                showDropdown = {true}
                                                placeHolder = {'Select Type...'}
                                                dropdown = {'contactTypeDropdown'}
                                                onUpdate = {props.updateDropdown}
                                                dropdownValue = {props.contactTypeDropdown[contactSections.sectionId].dropdownValue}
                                                label = {'Contact Type'}
                                                isMultiple = {true}
                                                dropdownId = {contactSections.sectionId}
                                            />
                                        </div>
                                        <div className = 'grid-item'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Contact Name </label> 
                                                <input className = 'input-text' type="text" id = "name"/> 
                                            </div>
                                        </div>
                                        <div className = 'grid-item'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Telephone </label> 
                                                <input className = 'input-text' type="text" id = "telephone"/> 
                                            </div>
                                        </div>
                                        <div className = 'grid-item'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Email </label> 
                                                <input className = 'input-text' type="text" id = "email"/> 
                                            </div>
                                        </div>
                                        <div className = 'grid-item'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Product Supported </label> 
                                                <input className = 'input-text' type="text" id = "productSupported"/> 
                                            </div>
                                        </div>
                                        <div className = 'grid-item'> 
                                            <ScrollableCheckBoxesBox
                                                options = {languages}  
                                                onUpdate = {props.updateScrollableCheckBoxes}
                                                type = 'languagesScrollableCheckBox'
                                            />
                                        </div>
                                    </div>
                                    )
                                )
                            }
                        </div>
                     : ''
                }
            </div>
            <div className = 'add-button' onClick = {() => {
                let sectionId = props.contactSections.length ? props.contactSections.length : 0
                props.updateDynamicSection(sectionId, 'contactSection', 'Add')
            }}> <h2 className = 'button-text'> <i className = 'add-icon'> + </i> Add Contact </h2> </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        contactTypeDropdown: state.app.contactTypeDropdowns,
        contactSections: state.app.contactSections, 
        languagesScrollableCheckBoxes: state.app.languagesScrollableCheckBoxes
    }
}

ContactWidget = connect(mapStateToProps, {updateDropdown, updateDynamicSection, updateScrollableCheckBoxes})(ContactWidget) 

export default ContactWidget; 