import React from 'react'; 


let AddURLWidget = (props) => {
    return (
        <div className = 'images-widget-wrapper'> 
            {
                props.links && props.links.length > 0 ? 
                    <ul className = 'image-list'>
                    {
                            props.links.map(link => (
                                <li key = {link.id} className = 'image-link'>
                                    <label className = 'form-label'> {props.type} {link.id} URL </label>
                                    <input className = 'input-text' type="text" value ={link.url} onChange = {(event) => {props.onURLUpdate(props.id, link.id, props.form, event.target.value, 'Update', props.form)}}/> 
                                    <div className = 'delete-button' onClick = {() => {props.onURLUpdate(props.id, link.id, props.form, '', 'Delete')}}> <i className = 'delete-icon'> x </i>  </div> 
                                </li>
                            )) 
                    }
                    </ul>
                : 
                    ''
            }
            <div className = 'add-button' onClick = {() => {
                props.onURLUpdate(props.id, '', props.form, '', "Add")
            }}> 
                <h2 className = 'button-text'> <i className = 'add-icon'> + </i> Add {props.type} </h2> 
            </div>
        </div>  
    );

}
export default AddURLWidget; 