import React from 'react'

let ScrollableCheckBoxesBox = (props) => {
    return (
        <div className = 'scrollable-check-boxes-wrapper'>
            <div className = 'inline'> 
                <label className = 'form-label'> {props.label} </label>
            </div>
            <div className = 'line-break'></div>
            <div className = 'scrollable-check-boxes'>
                <ul className = 'scrollable-options-list'>
                    {
                        props.options ? 
                            props.options.map(item => (
                                <li className = 'list-check-boxes' key = {item.code}>
                                    <div className = 'inline'>
                                        <label className = 'form-label'> {item.text}</label>
                                        <input value = {item.code} type = 'checkbox' onChange = {(event) =>{
                                            props.onUpdate(props.type, props.id, item.code, 'Update')
                                        }} checked = { props.data.includes(item.code) ? true : false}/>
                                    </div>
                                </li>
                            ))
                        : ''
                    }
                </ul>
            </div>
        </div>
    )
}

export default ScrollableCheckBoxesBox; 