import React, {useState} from 'react'
import DropdownWidget from '../widgets/DropdownWidget';
import {connect} from 'react-redux';
import {updateDropdown, onTextboxUpdate} from '../../reducers/formReducer'

let JobPosting = (props) => {
    const form = 'JOB_POSTING_FORM'
    console.log(props.salary)

    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Job Title </label> 
                    <input className = 'input-text' type="text" id = "title" onChange = {(event) => {
                        props.onTextboxUpdate('title' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Job Description </label> 
                    <input className = 'input-text' type="text" id = "description" onChange = {(event) => {
                        props.onTextboxUpdate('description' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Company </label> 
                    <input className = 'input-text' type="text" id = "hiringOrganization" onChange = {(event) => {
                        props.onTextboxUpdate('hiringOrganization' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Company URL </label> 
                    <input className = 'input-text' type="text" id = "hiringOrganizationURL" onChange = {(event) => {
                        props.onTextboxUpdate('hiringOrganizationURL', event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Industry </label> 
                    <input className = 'input-text' type="text" id = "industry" onChange = {(event) => {
                        props.onTextboxUpdate('industry' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'> 
                <DropdownWidget
                    options= {['full-time', 'part-time', 'contract', 'temporary', 'seasonal', 'internship']}
                    showDropdown= {true}
                    placeHolder = {'Select employment type'}
                    dropdownId = {'employmentTypeDropdown'}
                    onUpdate = {props.updateDropdown}
                    dropdownValue = {props.employmentTypeDropdown}
                    label = {'Employment Type'}
                    form = 'JOB_POSTING_FORM'
                /> 
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Date Posted </label> 
                        <input className = 'input-text' type="date" id = "datePosted" onChange = {(event) => {
                        props.onTextboxUpdate('datePosted' , event.target.value, form)
                    }}/>
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Valid Through </label> 
                        <input className = 'input-text' type="date" id = "validThrough" onChange = {(event) => {
                        props.onTextboxUpdate('validThrough' , event.target.value, form)
                    }}/>
                    </div>
                </div>
            </div>
            <div className = 'grid-item'>
                <input type = 'checkbox' id = 'remoteJobCheckBox' onChange = {(event) => 
                {   
                    let isRemote = props.isRemoteJob ? false : true
                    props.onTextboxUpdate('isRemote', isRemote, form)
                }
                }/>
                <label className = 'checkbox-label'> Remote Job </label>
            </div>
            {
                !props.isRemoteJob ? 
                    <div className = 'address-section'>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Street </label> 
                                <input className = 'input-text' type="text" id = "streetAddress" onChange = {(event) => {
                                    props.onTextboxUpdate('streetAddress' , event.target.value, form)
                                }}/>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> City </label> 
                                <input className = 'input-text' type="text" id = "addressLocality" onChange = {(event) => {
                                    props.onTextboxUpdate('addressLocality' , event.target.value, form)
                                }}/> 
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Zip Code </label> 
                                <input className = 'input-text' type="text" id = "postalCode" onChange = {(event) => {
                                    props.onTextboxUpdate('postalCode' , event.target.value, form)
                                }}/>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Country Code </label> 
                                <input className = 'input-text' type="text" id = "addressCountry" onChange = {(event) => {
                                    props.onTextboxUpdate('addressCountry' , event.target.value, form)
                                }}/>
                            </div>
                        </div>
                    </div>
                : ''
            }
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Salary (or min salary)</label> 
                    <input className = 'input-text' type="number" min = "0.01" max = "9999999999999" step = "0.01" id = "baseSalary" onChange = {(event) => {
                        props.onTextboxUpdate('baseSalary', event.target.value, form)
                    }}/> 
                </div>
            </div>
            {
                props.salary ?
                    <div className = 'currency-section'>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Max Salary </label> 
                                <input className = 'input-text' type="text" id = "maxSalary" onChange = {(event) => {
                                    props.onTextboxUpdate('maxSalary' , event.target.value, form)
                                }}/>
                            </div>
                        </div>
                        <div className = 'grid-item'> 
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Currency Code </label> 
                                <input className = 'input-text' type="text" id = "currencyCode" onChange = {(event) => {
                                    props.onTextboxUpdate('currencyCode' , event.target.value, form)
                                }}/>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <DropdownWidget 
                                options = {['Hour', 'Week', 'Month', 'Year']}
                                showDropdown = {true}
                                placeHolder = {'Select Payment Rate..'}
                                dropdownId = {'paymentRateDropdown'}
                                onUpdate = {props.updateDropdown}
                                dropdownValue = {props.paymentRateDropdown}
                                label = {'Payment Rate'}
                                form = 'JOB_POSTING_FORM'
                            />
                        </div> 
                    </div>
                : ''
            }
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Responsibilities </label> 
                    <input className = 'input-text' type="text" id = "responsibilities" onChange = {(event) => {
                        props.onTextboxUpdate('responsibilities' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Skills </label> 
                    <input className = 'input-text' type="text" id = "skills" onChange = {(event) => {
                        props.onTextboxUpdate('skills' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Qualifications </label> 
                    <input className = 'input-text' type="text" id = "qualifications" onChange = {(event) => {
                        props.onTextboxUpdate('qualifications' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Education Requirements </label> 
                    <input className = 'input-text' type="text" id = "educationRequirements" onChange = {(event) => {
                        props.onTextboxUpdate('educationRequirements' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Experience Requirements </label> 
                    <input className = 'input-text' type="text" id = "experienceRequirements" onChange = {(event) => {
                        props.onTextboxUpdate('experienceRequirements' , event.target.value, form)
                    }}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employmentTypeDropdown: state.form.jobPostingData.employmentType, 
        paymentRateDropdown: state.form.jobPostingData.unitText, 
        isRemoteJob: state.form.jobPostingData.isRemote, 
        salary: state.form.jobPostingData.baseSalary
    }
}

JobPosting = connect(mapStateToProps, {updateDropdown, onTextboxUpdate})(JobPosting)
export default JobPosting; 