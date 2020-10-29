import React from 'react'
import DropdownWidget from './DropdownWidget'
import {updateDropdown, updateDynamicSection, updateScrollableCheckBoxes} from '../../reducers/widgetReducer'
import {connect} from 'react-redux'
import ScrollableCheckBoxesBox from './ScrollableCheckBoxesBox'
import {languages} from '../../utils/staticdata/languages'
import {areas} from '../../utils/staticdata/areas'

let ContactWidget = (props) => {
    return (
        <div className = 'contact-widget-wrapper'>
            <div className = 'contact-widget'> 
                {
                    props.contactSections.length ? 
                        <div className = 'contact-section'>
                            <label className = 'form-label-large'> Contacts </label>
                            {   
                                props.contactSections.map(contactSection => (    
                                    <div className = 'section-grid' key = {contactSection.sectionId}>
                                        <div className = 'relative-position'>
                                            <label className = 'section-label'> Contact {contactSection.sectionId + 1}</label>
                                            <div className = 'delete-button' onClick = {() => {props.updateDynamicSection(contactSection.sectionId, 'contactSection', 'Delete')}}> <i className = 'delete-icon'> x </i>  </div> 
                                        </div>
                                        <div className = 'grid-item'>
                                            <DropdownWidget key = {contactSection.sectionId}
                                                options={['None', 'Customer Service', 'Technical Support', 'Billing Support', 'Bill Payment', 'Sales', 'Reservations', 'Credit card support', 'Emergency', 'Baggage tracking', 'Roadside Assistance', 'Package Tracking']}
                                                showDropdown = {true}
                                                placeHolder = {'Select Type...'}
                                                dropdown = {'contactTypeDropdown'}
                                                onUpdate = {props.updateDropdown}
                                                dropdownValue = {props.contactTypeDropdown[contactSection.sectionId].dropdownValue}
                                                label = {'Contact Type'}
                                                isMultiple = {true}
                                                dropdownId = {contactSection.sectionId}
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
                                                type = 'languagesScrollableCheckBoxes'
                                                label = 'Languages'
                                                id = {contactSection.sectionId}
                                                data = {props.languagesScrollableCheckBoxes[contactSection.sectionId]}
                                            />
                                        </div>
                                        <div className = 'grid-item'> 
                                            <ScrollableCheckBoxesBox
                                                options = {areas}  
                                                onUpdate = {props.updateScrollableCheckBoxes}
                                                type = 'areasScrollableCheckBoxes'
                                                label = 'Areas'
                                                id = {contactSection.sectionId}
                                                data = {props.areasScrollableCheckBoxes[contactSection.sectionId]}
                                            />
                                        </div>
                                        <div className = 'line-break'></div>

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
        languagesScrollableCheckBoxes: state.app.languagesScrollableCheckBoxes, 
        areasScrollableCheckBoxes: state.app.areasScrollableCheckBoxes
    }
}

ContactWidget = connect(mapStateToProps, {updateDropdown, updateDynamicSection, updateScrollableCheckBoxes})(ContactWidget) 

export default ContactWidget; 