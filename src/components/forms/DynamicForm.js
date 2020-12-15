import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import getSubTypes from '../../utils/getSubTypes'; 
import DropdownWidget from '../widgets/DropdownWidget';
import {updateDropdown} from '../../reducers/formReducer'
import ArticleForm from './ArticleForm'
import EventForm from './EventForm'
import ScriptContainer from '../ScriptContainer';
import FAQWidget from '../widgets/FAQWidget';
import JobPostingForm from './JobPostingForm'
import LocalBusinessForm from './LocalBusinessForm'
import OrganizationForm from './OrganizationForm'
import PersonForm from './PersonForm'
import ProductForm from './ProductForm'
import RecipeForm from './RecipeForm'
import VideoForm from './VideoForm'
import WebsiteForm from './WebsiteForm';

let DynamicForm = (props) => {    
    let showTypeDropdown = true; 
    const [typeDropdownOptions, setOptionsDropdown] = useState(null); 
    let term = props.term
    if(!typeDropdownOptions || typeDropdownOptions.length === 0) {
        showTypeDropdown = false; 
    }
    const getOptions = async (term) => {
        const response = await getSubTypes(term.replace(/\s+/g, '')); 
        setOptionsDropdown(response)
    };

    useEffect(() => {
        if(term) {
            getOptions(term);
        }
    }, [term])

    return(
        <div className = 'form-wrapper'> 
            <div className = 'form'>
                <span className = 'form-header'>
                    <h1 key = {props.term} className = 'text-large'>{props.term}</h1>
                </span>
                <form autoComplete = "off">
                    <DropdownWidget
                        options = {typeDropdownOptions}
                        showDropdown = {showTypeDropdown}
                        placeHolder = 'Select Type...'
                        dropdownId = {'typeDropdown'}
                        onUpdate = {props.updateDropdown}
                        dropdownValue = {props.typeDropdown}
                        label = {term + ' Type'}
                        form = 'DYNAMIC_FORM'
                    />
                    {
                        props.term === "Article" ? <ArticleForm/> : props.term === 'Event' ? <EventForm/> : props.term === 'FAQ Page' ? <FAQWidget/> : props.term === 'Job Posting' ? <JobPostingForm/> : props.term === 'Local Business' ? <LocalBusinessForm/> : props.term === 'Organization' ? <OrganizationForm/> : props.term === 'Person' ? <PersonForm/> : props.term === 'Product' ? <ProductForm/> : props.term === 'Recipe' ? <RecipeForm/> : props.term === 'Video' ? <VideoForm/> : props.term === 'Website' ? <WebsiteForm/> : null
                    }
                </form>
            </div>
            <ScriptContainer 

            />
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        typeDropdown: state.form.typeDropdown,
    }
  }
    
DynamicForm = connect(mapStateToProps, {updateDropdown})(DynamicForm)

export default DynamicForm;
  