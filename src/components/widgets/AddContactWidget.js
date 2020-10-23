import React, {useState} from 'react'
import DropdownWidget from './DropdownWidget'
import {updateDynamicDropdown, updateDynamicSection} from '../../reducers/appReducer'
import {connect} from 'react-redux'

let ContactWidget = (props) => {
    return (
        <div className = 'contact-widget-wrapper'>
            <div className = 'contact-widget'> 
                <ul className = 'dropdowns-list'>
                    {
                        props.contactTypeDropdown ? 
                            props.contactTypeDropdown.map(contactDropdown => (    
                                <li className = 'dropdowns-list-item' key = {contactDropdown.dropdownId}>
                                    <DropdownWidget 
                                        options={['None', 'Customer Service', 'Technical Support', 'Billing Support', 'Bill Payment', 'Sales', 'Reservations', 'Credit card support', 'Emergency', 'Baggage tracking', 'Roadside Assistance', 'Package Tracking']}
                                        showDropdown = {true}
                                        placeHolder = {'Select Type...'}
                                        dropdown = {'contactTypeDropdown'}
                                        onUpdate = {props.updateDynamicDropdown}
                                        dropdownValue = {props.dropdownValue}
                                        label = {'Contact Type'}
                                        isDynamicDropdown = {true}
                                        dropdownId = {contactDropdown.dropdownId}
                                    />
                                    </li>
                                )
                            )
                        : ''
                    }
                </ul>
            </div>
            <div className = 'add-button' onClick = {() => {
                props.updateDynamicDropdown('contactTypeDropdown', '', '', 'Add')
            }}> <h2 className = 'button-text'> <i className = 'add-icon'> + </i> Add Contact </h2> </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        contactTypeDropdown: state.app.contactTypeDropdowns
    }
}

ContactWidget = connect(mapStateToProps, {updateDynamicDropdown, updateDynamicSection})(ContactWidget) 

export default ContactWidget; 