import React, {useState} from 'react'

let OpenHoursSpecificationWidget = (props) => {
    console.log(props.openHours)
    return (
        <div className = 'open-hours-specification-wrapper'>
            {
                props.openHours.showDays ? 
                    <div className = 'open-hours'> 
                        <div className = 'right-aligned delete-button'  onClick = {() => {
                                props.onUpdate(props.id, '', '', 'Delete', props.form)
                            }}> 
                            <i className = 'delete-icon'> x </i>
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'monday' onChange = {() => {
                                    props.onUpdate(props.id, 'monday', '', 'Update', props.form, )
                                }}/>
                                <label className = 'form-label'> Monday </label>
                            </div>
                            {
                                props.openHours.monday ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'monday-open-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'mondayOpen', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'monday-close-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'mondayClose', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'tuesday' onChange = {(event) => {
                                    props.onUpdate(props.id, 'tuesday', '', 'Update', props.form) 
                                }}/>
                                <label className = 'form-label'> Tuesday </label>
                            </div>
                            {
                                props.openHours.tuesday ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'tuesday-open-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'tuesdayOpen', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'tuesday-close-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'tuesdayClose', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'wednesday' onChange = {(event) => {
                                    props.onUpdate(props.id, 'wednesday', '', 'Update', props.form) 
                                }}/>
                                <label className = 'form-label'> Wednesday </label>
                            </div>
                            {
                                props.openHours.wednesday ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'wednesday-open-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'wednesdayOpen', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'wednesday-close-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'wednesdayClose', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'thursday' onChange = {(event) => {
                                    props.onUpdate(props.id, 'thursday', event.target.value, 'Update', props.form)
                                }}/>
                                <label className = 'form-label'> Thursday </label>
                            </div>
                            {
                                props.openHours.thursday ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'thursday-open-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'thursdayOpen', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'thursday-close-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'thursdayClose', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'friday' onChange = {(event) => {
                                    props.onUpdate(props.id, 'friday', '', 'Update', props.form)
                                }}/>
                                <label className = 'form-label'> Friday </label>
                            </div>
                            {
                                props.openHours.friday ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'friday-open-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'fridayOpen', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'friday-close-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'fridayClose', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'saturday' onChange = {(event) => {
                                    props.onUpdate(props.id, 'saturday', '', 'Update', props.form)
                                }}/>
                                <label className = 'form-label'> Saturday </label>
                            </div>
                            {
                                props.openHours.saturday ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'saturday-open-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'saturdayOpen', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'saturday-close-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'saturdayClose', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                        </div> 
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'sunday' onChange = {(event) => {
                                    props.onUpdate(props.id, 'sunday', '', 'Update', props.form)
                                }}/>
                                <label className = 'form-label'> Sunday </label>
                            </div> 
                            {
                                props.openHours.sunday ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'sunday-open-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'sundayOpen', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'sunday-close-time' onChange = {(event) => {
                                                    props.onUpdate(props.id, 'sundayClose', event.target.value, 'Update', props.form)
                                                }}/>
                                            </div>
                                        </div> 
                                    </div>
                                : ''
                            }
                        </div>
                    </div>
                : ''
            }
            {
                !props.openHours.showDays ? 
                    <div className = 'add-button' onClick = {() => {
                            props.onUpdate(props.id, '', '', 'Add', props.form)
                        }}>
                        <h2 className = 'button-text'> <i className = 'add-icon'> + </i> Add Hours </h2>
                    </div>
                : ''
            }
        </div>
    )
}

export default OpenHoursSpecificationWidget; 