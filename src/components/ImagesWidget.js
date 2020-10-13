import React from 'react'; 
import {updateImageLinks} from '../reducers/appReducer'; 
import {connect} from 'react-redux';


let ImagesWidget = (props) => {
    return (
        <div className = 'images-widget-wrapper'> 
            {
                props.imageLinks ? 
                    <ul className = 'image-list'>
                    {
                        props.imageLinks.map(link => (
                            <li  key = {link} className = 'image-link'>
                                <label className = 'form-label'> Image </label>
                                <input className = 'input-text' type="text"/> 
                            </li>
                        )) 
                    }
                    </ul>
                : 
                    ''
            }
            <div className = 'images-button' onClick = {() => {
                    props.updateImageLinks('', "Add")
                }}> 
                <h2 className = 'button-text'> <i className = 'add-icon' > + </i>  Add Image </h2> 
            </div>
        </div>  
    );
}

export default ImagesWidget; 