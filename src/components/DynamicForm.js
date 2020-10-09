import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import getSchemaProperties from '../utils/getSchemaProperties';  
import getSubTypes from '../utils/getSubTypes'; 
import DropdownWidget from './DropdownWidget';
import {updateDropdown} from '../reducers/appReducer'

let DynamicForm = (props) => {    
    let showTypeDropdown = false; 
    const [dropdownValue, setDropdownValue] = useState(null); 
    const [dropdownOptions, setDropdownOptions] = useState(null)
    
    const onUpdate = (type, value) => {
        setDropdownValue(value)
        props.updateDropdown(type, value)
    }
    return(
        <div className = 'form-wrapper'> 
            <div className = 'form'>
                <span className = 'form-header'>
                    <h1 className = 'text-large'>{props.term}</h1>
                </span>
                <form> 
                    <DropdownWidget
                     options = {dropdownOptions}
                     showDropdown = {showTypeDropdown}
                     placeHolder = 'Select Type...'
                     dropdown = {'TypeOfTerm'}
                     onUpdate = {onUpdate}
                     dropdownValue = {dropdownValue}
                    />
                    {/* <label className = 'input-text-label'> Name </label>
                    <input 
                        className = 'input-text'
                        type = 'input'
                        name = 'text' 
                    /> */}
                </form>
            </div>
        </div> 
    )
}


const mapStateToProps = (state) => {
    return {
        typeDropdown: state.app.typeDropdown,
        termDropdown: state.app.termDropdown
    }
  }
    
DynamicForm = connect(mapStateToProps, {updateDropdown})(DynamicForm)

export default DynamicForm;
  