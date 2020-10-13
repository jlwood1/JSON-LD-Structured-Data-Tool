import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import getSchemaProperties from '../utils/getSchemaProperties';  
import getSubTypes from '../utils/getSubTypes'; 
import DropdownWidget from './DropdownWidget';
import {updateDropdown} from '../reducers/appReducer'
import Article from './ArticleForm'

let DynamicForm = (props) => {    
    let showTypeDropdown = true; 
    const [dropdownValue, setDropdownValue] = useState(null); 
    const [typeDropdownOptions, setOptionsDropdown] = useState(null); 
    let term = props.term


    if(!typeDropdownOptions) {
        showTypeDropdown = false; 
    }

    const onUpdate = (type, value) => {
        setDropdownValue(value)
        props.updateDropdown(type, value)
    }
    const getOptions = async (term) => {
        const response = await getSubTypes(term); 
        setOptionsDropdown(response)
    };

    useEffect(() => {
        if(term) {
            getOptions(term);
        }
        //reset drop down 
        setDropdownValue('Select Type...')
    }, [term])


    return(
        <div className = 'form-wrapper'> 
            <div className = 'form'>
                <span className = 'form-header'>
                    <h1 key = {props.term} className = 'text-large'>{props.term}</h1>
                </span>
                <form>
                    <DropdownWidget
                        options = {typeDropdownOptions}
                        showDropdown = {showTypeDropdown}
                        placeHolder = 'Select Type...'
                        dropdown = {'TypeOfTerm'}
                        onUpdate = {onUpdate}
                        dropdownValue = {dropdownValue}
                        label = {term + ' Type'}
                    />
                    <Article /> 
                </form>
            </div>
        </div> 
    )
}


const mapStateToProps = (state) => {
    return {
        typeDropdown: state.app.typeDropdown,
    }
  }
    
DynamicForm = connect(mapStateToProps, {updateDropdown})(DynamicForm)

export default DynamicForm;
  