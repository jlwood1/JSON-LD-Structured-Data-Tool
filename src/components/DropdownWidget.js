import React, { useEffect, useState, useRef } from 'react';
import dropdownicon  from '../assets/images/dropdown-icon.svg'; 

let DropdownWidget = (props) => {
    const node = useRef(); 
    const [open, setOpen] = useState(false);
    const handleClick = e => {
        if(!node.current)
            return; 
        if(node.current.contains(e.target)) {
            //inside click
            return;
        }
        //outside click 
        setOpen(false)
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        };
    }, []);
    let dropdownValue = props.dropdownValue ? props.dropdownValue : props.placeHolder; 
    return (
        props.showDropdown ?
            open ? 
                <div ref = {node} className = 'dropdown-wrapper' onClick = {() => {
                    setOpen(!open)
                }}> 
                    <label className = 'dropdown-label'> {props.label} </label>
                    <div className = 'dropdown' >
                        <div className = 'dropdown-text'> {dropdownValue} </div>
                        <span className = 'dropdown-icon'><img className = 'icon-small' src= {dropdownicon}/> </span> 
                    </div>
                    <div className = 'dropdown-content'>
                        <ul className = 'dropdown-list'>
                            {
                                props.options.map(opt => (
                                    <li key = {opt} className = 'dropdown-list-item' onClick = {() => {
                                        props.onUpdate(props.dropdown, opt)
                                    }}> {opt} </li>
                                ))
                                
                            }
                        </ul>
                    </div>
                </div> 
            :
                <div ref = {node} className = 'dropdown-wrapper' onClick = {() => {
                    setOpen(!open)
                }}> 
                    <label className = 'dropdown-label'> {props.label} </label>
                    <div className = 'dropdown'>
                        <div className = 'dropdown-text'> {dropdownValue} </div>
                        <span className = 'dropdown-icon'> <img className = 'icon-small' src= {dropdownicon}/></span> 
                    </div>
                </div>
        :
            ''
        )
    
};



export default DropdownWidget; 