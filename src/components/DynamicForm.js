import React, { useEffect, useState, useRef } from 'react';
import {connect} from 'react-redux';
import getSchemaProperties from '../utils/getSchemaProperties';  

let DynamicForm = (props) => {
    let term = props.dropdownValue; 
    let schemaProperties = getSchemaProperties(term); 
    schemaProperties.then(function(result) {
        console.log(result)
    })
    return(
        <div className = 'form-wrapper'> 
            <div className = 'form'>
                <span className = 'form-header'>
                    <h1 className = 'text-large'>{term}</h1>
                </span>
            </div>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        dropdownValue: state.app.dropdownValue 
    }
}

DynamicForm = connect(mapStateToProps)(DynamicForm)
export default DynamicForm; 