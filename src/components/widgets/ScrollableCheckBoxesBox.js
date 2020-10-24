import React from 'react'

let ScrollableCheckBoxesBox = (props) => {
    return (
        <div className = 'scrollable-check-boxes-wrapper'>
            <label className = 'form-label'> Areas </label>
            <div className = 'line-break'></div>
            <div className = 'scrollable-check-boxes'>
                <ul className = 'scrollable-options-list'>
                    {
                        props.options ? 
                            props.options.map(item => (
                                <li className = 'check-box' key = {item.code}>
                                    <div className = 'inline'>
                                        <label className = 'form-label'> {item.language}</label>
                                        <input value = {item.code} type = 'checkbox' onChange = {(event) =>{
                                            console.log('im here')
                                            props.onUpdate(props.type, item.code, 'Update')
                                        }}/>
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