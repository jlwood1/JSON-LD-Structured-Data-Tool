import React, {useState} from 'react'

let OpenHoursSpecificationWidget = (props) => {
    const [showDays, onAddHours] = useState(false)
    const [mondayChecked, onMondayChecked] = useState(false)
    const [tuesdayChecked, onTuesdayChecked] = useState(false)
    const [wednesdayChecked, onWednesdayChecked] = useState(false)
    const [thursdayChecked, onThursdayChecked] = useState(false)
    const [fridayChecked, onFridayChecked] = useState(false)
    const [saturdayChecked, onSaturdayChecked] = useState(false)
    const [sundayChecked, onSundayChecked] = useState(false)
    
    return (
        <div className = 'open-hours-specification-wrapper'>
            {
                showDays ? 
                    <div className = 'open-hours'> 
                        <div className = 'right-aligned delete-button'  onClick = {() => {
                                let isShowingDays = showDays ? false : true; 
                                onMondayChecked(false)
                                onTuesdayChecked(false)
                                onWednesdayChecked(false)
                                onThursdayChecked(false)
                                onFridayChecked(false)
                                onSaturdayChecked(false)
                                onSundayChecked(false)

                                onAddHours(isShowingDays)
                            }}> 
                            <i className = 'delete-icon'> x </i>
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'monday' onChange = {() => {
                                    let isMondayChecked = mondayChecked ? false : true 
                                    onMondayChecked(isMondayChecked)
                                }}/>
                                <label className = 'form-label'> Monday </label>
                            </div>
                            {
                                mondayChecked ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'> 
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'monday-open-time'/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'monday-close-time'/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'tuesday' onChange = {() => {
                                    let isTuesdayChecked = tuesdayChecked ? false : true 
                                    onTuesdayChecked(isTuesdayChecked)
                                }}/>
                                <label className = 'form-label'> Tuesday </label>
                            </div>
                            {
                                tuesdayChecked ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'tuesday-open-time'/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'tuesday-close-time'/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'wednesday' onChange = {() => {
                                    let isWednesdayChecked = wednesdayChecked ? false : true 
                                    onWednesdayChecked(isWednesdayChecked)
                                }}/>
                                <label className = 'form-label'> Wednesday </label>
                            </div>
                            {
                                wednesdayChecked ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'wednesday-open-time'/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'wednesday-close-time'/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'thursday' onChange = {() => {
                                    let isThursdayChecked = thursdayChecked ? false : true 
                                    onThursdayChecked(isThursdayChecked)
                                }}/>
                                <label className = 'form-label'> Thursday </label>
                            </div>
                            {
                                thursdayChecked ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'thursday-open-time'/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'thursday-close-time'/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'friday' onChange = {() => {
                                    let isFridayChecked = fridayChecked ? false : true; 
                                    onFridayChecked(isFridayChecked)
                                }}/>
                                <label className = 'form-label'> Friday </label>
                            </div>
                            {
                                fridayChecked ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'friday-open-time'/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'friday-close-time'/>
                                            </div>
                                        </div>
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'saturday' onChange = {() => {
                                    let isSaturdayChecked = saturdayChecked ? false : true 
                                    onSaturdayChecked(isSaturdayChecked)
                                }}/>
                                <label className = 'form-label'> Saturday </label>
                            </div>
                            {
                                saturdayChecked ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'saturday-open-time'/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'saturday-close-time'/>
                                            </div>
                                        </div> 
                                    </div>
                                : ''
                            }
                        </div>
                        <div className = 'grid-item'>
                            <div className = 'inline'>
                                <input className = 'day-checkbox' type = 'checkBox' id = 'sunday' onChange = {() => {
                                    let isSundayChecked = sundayChecked ? false : true
                                    onSundayChecked(isSundayChecked)
                                }}/>
                                <label className = 'form-label'> Sunday </label>
                            </div> 
                            {
                                sundayChecked ? 
                                    <div className = 'day-hours'>
                                        <div className = 'inline'>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Opens </label>
                                                <input className = 'input-text' type = "time" id = 'sunday-open-time'/>
                                            </div>
                                            <div className = 'text-box-wrapper'>
                                                <label className = 'form-label'> Closes </label>
                                                <input className = 'input-text' type = "time" id = 'sunday-close-time'/>
                                            </div>
                                        </div> 
                                    </div>
                                : ''
                            }
                        </div>
                    </div>
                : ''
            }
            <div className = 'add-button' onClick = {() => {
                    onAddHours(true)
                }}>
                <h2 className = 'button-text'> <i className = 'add-icon'> + </i> Add Hours </h2>
            </div>
        </div>
    )
}

export default OpenHoursSpecificationWidget; 