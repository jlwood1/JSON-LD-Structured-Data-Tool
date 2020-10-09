import React, { useEffect, useState, useRef } from 'react';
import {connect} from 'react-redux';
import getSchemaProperties from '../utils/getSchemaProperties';  

let DynamicForm = (props) => {
    const term = props.dropdownValue; 
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
                <form> 
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
        dropdownValue: state.app.dropdownValue 
    }
}

DynamicForm = connect(mapStateToProps)(DynamicForm)
export default DynamicForm; 