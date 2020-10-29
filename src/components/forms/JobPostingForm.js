import React, {useState} from 'react'
import DropdownWidget from '../widgets/DropdownWidget';
import {connect} from 'react-redux';
import {updateDropdown} from '../../reducers/widgetReducer'

let JobPosting = (props) => {
    const [isRemoteJob, updateRemoteJob] = useState(0)
    const [isSalary, updateSalary] = useState(null)

    return (
        <div className = 'form-content-wrapper'>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Job Title </label> 
                    <input className = 'input-text' type="text" id = "title"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Job Description </label> 
                    <input className = 'input-text' type="text" id = "description"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Employer </label> 
                    <input className = 'input-text' type="text" id = "hiringOrganization"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Industry </label> 
                    <input className = 'input-text' type="text" id = "industry"/> 
                </div>
            </div>
            <div className = 'grid-item'> 
                <DropdownWidget
                    options= {['full-time', 'part-time', 'contract', 'temporary', 'seasonal', 'internship']}
                    showDropdown= {true}
                    placeHolder = {'Select employment type'}
                    dropdown = {'employmentTypeDropdown'}
                    onUpdate = {props.updateDropdown}
                    dropdownValue = {props.employmentTypeDropdown}
                    label = {'Employment Type'}
                /> 
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Date Posted </label> 
                        <input className = 'input-text' type="date" id = "datePosted"/> 
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Valid Through </label> 
                        <input className = 'input-text' type="date" id = "validThrough"/> 
                    </div>
                </div>
            </div>
            <div className = 'grid-item'>
                <input type = 'checkbox' id = 'remoteJobCheckBox' onChange = {(event) => 
                {   let isRemote = isRemoteJob === 0 ? 1 : 0
                    updateRemoteJob(isRemote)}
                }/>
                <label className = 'remoteJobCheckBox'> Remote Job </label>
            </div>
            {
                isRemoteJob === 0 ? 
                    <div className = 'address-section'>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Street </label> 
                                <input className = 'input-text' type="text" id = "streetAddress"/> 
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> City </label> 
                                <input className = 'input-text' type="text" id = "addressLocality"/> 
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Zip Code </label> 
                                <input className = 'input-text' type="text" id = "postalCode"/> 
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Country Code </label> 
                                <input className = 'input-text' type="text" id = "addressCountry"/> 
                            </div>
                        </div>
                    </div>
                : ''
            }
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'>
                    <label className = 'form-label'> Salary (or min salary)</label> 
                    <input className = 'input-text' type="number" min = "0.01" max = "9999999999999" step = "0.01" id = "value" onChange = {(event) => {
                        updateSalary(event.target.value)
                    }}/> 
                </div>
            </div>
            {
                isSalary ?
                    <div className = 'currency-section'>
                        <div className = 'grid-item'>
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Max Salary </label> 
                                <input className = 'input-text' type="text" id = "addressCountry"/> 
                            </div>
                        </div>
                        <div className = 'grid-item'> 
                            <div className = 'text-box-wrapper'> 
                                <label className = 'form-label'> Currency Code </label> 
                                <input className = 'input-text' type="text" id = "currency"/> 
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <DropdownWidget 
                                options = {['Hour', 'Week', 'Month', 'Year']}
                                showDropdown = {true}
                                placeHolder = {'Select Payment Rate..'}
                                dropdown = {'paymentRateDropdown'}
                                onUpdate = {props.updateDropdown}
                                dropdownValue = {props.paymentRateDropdown}
                                label = {'Payment Rate'}
                            />
                        </div> 
                    </div>
                : ''
            }
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Responsibilities </label> 
                    <input className = 'input-text' type="text" id = "responsibilities"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Skills </label> 
                    <input className = 'input-text' type="text" id = "skills"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Qualifications </label> 
                    <input className = 'input-text' type="text" id = "qualifications"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Education Requirements </label> 
                    <input className = 'input-text' type="text" id = "educationRequirements"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Experience Requirements </label> 
                    <input className = 'input-text' type="text" id = "experienceRequirements"/> 
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employmentTypeDropdown: state.app.employmentTypeDropdown, 
        paymentRateDropdown: state.app.paymentRateDropdown
    }
}

JobPosting = connect(mapStateToProps, {updateDropdown})(JobPosting)
export default JobPosting; 