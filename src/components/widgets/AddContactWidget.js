import React from 'react'
import DropdownWidget from './DropdownWidget'
import {updateDynamicSection} from '../../reducers/formReducer'
import {updateScrollableCheckBoxes, updateDropdown, onTextboxUpdate} from '../../reducers/formReducer'
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
                                            <div className = 'delete-button' onClick = {() => {props.updateDynamicSection(contactSection.sectionId, 'contactSection', props.form, 'Delete')}}> <i className = 'delete-icon'> x </i>  </div> 
                                        </div>
                                        <div className = 'grid-item'>
                                            <DropdownWidget key = {contactSection.sectionId}
                                                options={['None', 'Customer Service', 'Technical Support', 'Billing Support', 'Bill Payment', 'Sales', 'Reservations', 'Credit card support', 'Emergency', 'Baggage tracking', 'Roadside Assistance', 'Package Tracking']}
                                                showDropdown = {true}
                                                placeHolder = {'Select Type...'}
                                                dropdownId = {'contactTypeDropdown'}
                                                onUpdate = {props.updateDropdown}
                                                dropdownValue = {props.contactTypeDropdown[contactSection.sectionId].value}
                                                label = {'Contact Type'}
                                                isMultiple = {true}
                                                sectionId = {contactSection.sectionId}
                                                form = {props.form}
                                            />
                                        </div>
                                        <div className = 'grid-item'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Contact Name </label> 
                                                <input className = 'input-text' value = {props.textboxData.contactName[contactSection.sectionId].value ? props.textboxData.contactName[contactSection.sectionId].value : ''} type="text" id = "contactName" onChange = {(event) => {
                                                    props.onTextboxUpdate('contactName', event.target.value, props.form, contactSection.sectionId, 'Update')
                                                }}/> 
                                            </div>
                                        </div>
                                        <div className = 'grid-item'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Telephone </label> 
                                                <input className = 'input-text' value = {props.textboxData.contactTelephone[contactSection.sectionId].value ? props.textboxData.contactTelephone[contactSection.sectionId].value : ''} type="text" id = "contactTelephone" onChange = {(event) => {
                                                    props.onTextboxUpdate('contactTelephone', event.target.value, props.form, contactSection.sectionId, 'Update')
                                                }}/> 
                                            </div>
                                        </div>
                                        <div className = 'grid-item'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Email </label> 
                                                <input className = 'input-text' value = {props.textboxData.contactEmail[contactSection.sectionId].value ? props.textboxData.contactEmail[contactSection.sectionId].value : ''} type="text" id = "contactEmail" onChange = {(event) => {
                                                    props.onTextboxUpdate('contactEmail', event.target.value, props.form, contactSection.sectionId, 'Update')
                                                }}/> 
                                            </div>
                                        </div>
                                        <div className = 'grid-item'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Product Supported </label> 
                                                <input className = 'input-text' type="text" value = {props.textboxData.contactProductSupported[contactSection.sectionId].value ? props.textboxData.contactProductSupported[contactSection.sectionId].value : ''} id = "contactProductSupported" onChange = {(event) => {
                                                    props.onTextboxUpdate('contactProductSupported', event.target.value, props.form, contactSection.sectionId, 'Update')
                                                }}/> 
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
                                                form = {props.form}
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
                                                form = {props.form}
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
                props.updateDynamicSection(sectionId, 'contactSection', props.form, 'Add')
            }}> <h2 className = 'button-text'> <i className = 'add-icon'> + </i> Add Contact </h2> </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        contactTypeDropdown: state.form.organizationData.contactType,
        contactSections: state.form.organizationData.contactSections, 
        languagesScrollableCheckBoxes: state.form.organizationData.availableLanguage, 
        areasScrollableCheckBoxes: state.form.organizationData.areaServed, 
        contactName: state.form.organizationData.contactName, 
        contactTelephone: state.form.organizationData.contactTelephone, 
        contactEmail: state.form.organizationData.contactEmail, 
        contactProduct: state.form.organizationData.contactProduct
    }
}

ContactWidget = connect(mapStateToProps, {updateDropdown, updateDynamicSection, updateScrollableCheckBoxes, onTextboxUpdate})(ContactWidget) 

export default ContactWidget; 