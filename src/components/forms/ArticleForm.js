import React from 'react';
import AddURLWidget from '../widgets/AddURLWidget'
import {updateDropdown, updateURLLink, onTextboxUpdate} from '../../reducers/formReducer'
import {connect} from 'react-redux';
import DropdownWidget from '../widgets/DropdownWidget';

let ArticleForm = (props) => {
    const form = 'ARTICLE_FORM'
    return (
        <div className = 'form-content-wrapper'>     
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Headline </label> 
                    <input className = 'input-text' type="text" id = "headline" onChange = {(event) => {
                        props.onTextboxUpdate('headline' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Article Description </label> 
                    <input className = 'input-text' type="text" id = "description" onChange = {(event) => {
                        props.onTextboxUpdate('description' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget  
                    type = 'Image'
                    id = 'articleImageLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.articleImageLinks}
                    form = 'ARTICLE_FORM'
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'author-type'> 
                    <DropdownWidget
                        options = {['Person', 'Organization']}
                        showDropdown = {true}
                        placeHolder = {'Select Author Type...'}
                        dropdownId = {'authorTypeDropdown'}
                        onUpdate = {props.updateDropdown}
                        dropdownValue = {props.authorType}
                        label = {'Author Type'}
                        form = 'ARTICLE_FORM'
                    />
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Author Name </label> 
                    <input className = 'input-text' type="text" id = "author-name" onChange = {(event) => {
                        props.onTextboxUpdate('author-name' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Name </label> 
                    <input className = 'input-text' type="text" id = "publisher-name" onChange = {(event) => {
                        props.onTextboxUpdate('publisher-name' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Logo URL </label> 
                    <input className = 'input-text' type="text" id = "publisher-logo-url" onChange = {(event) => {
                        props.onTextboxUpdate('publisher-logo-url' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Date Published </label> 
                        <input className = 'input-text' type="date" id = "datePublished" onChange = {(event) => {
                            props.onTextboxUpdate('datePublished' , event.target.value, form)
                        }}/>
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Date Modified </label> 
                        <input className = 'input-text' type="date" id = "dateModified" onChange = {(event) => {
                            props.onTextboxUpdate('dateModified' , event.target.value, form)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = (state) => {
    return {
        authorType: state.form.articleData.authorType,
        articleImageLinks: state.form.articleData.image
    }
}

ArticleForm = connect(mapStateToProps, {updateDropdown, updateURLLink, onTextboxUpdate})(ArticleForm)
export default ArticleForm; 
            