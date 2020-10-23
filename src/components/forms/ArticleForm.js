import React from 'react';
import AddURLWidget from '../widgets/AddURLWidget'
import {updateDropdown, updateURLLink} from '../../reducers/appReducer';
import {connect} from 'react-redux';
import DropdownWidget from '../widgets/DropdownWidget';

let ArticleForm = (props) => {
    return (
        <div className = 'form-content-wrapper'>     
            <div className = 'grid-item'>
                <div className = 'headline'> 
                    <label className = 'form-label'> Headline </label> 
                    <input className = 'input-text' type="text" id = "headline"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'description'> 
                    <label className = 'form-label'> Article Description </label> 
                    <input className = 'input-text' type="text" id = "headline"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget  
                    type = 'Image'
                    id = 'articleImageLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.articleImageLinks}
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'author-type'> 
                    <DropdownWidget
                        options = {['Person', 'Organization']}
                        showDropdown = {true}
                        placeHolder = {'Select Author Type...'}
                        dropdown = {'authorDropdown'}
                        onUpdate = {props.updateDropdown}
                        dropdownValue = {props.authorDropdown}
                        label = {'Author Type'}
                    />
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Author Name </label> 
                    <input className = 'input-text' type="text" id = "author-name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Name </label> 
                    <input className = 'input-text' type="text" id = "publisher-name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Logo URL </label> 
                    <input className = 'input-text' type="text" id = "publisher-logo-url"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Date Published </label> 
                        <input className = 'input-text' type="date" id = "date-published"/> 
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Date Modified </label> 
                        <input className = 'input-text' type="date" id = "date-modified"/> 
                    </div>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = (state) => {
    return {
        authorDropdown: state.app.authorDropdown,
        articleImageLinks: state.app.articleImageLinks
    }
}

ArticleForm = connect(mapStateToProps, {updateDropdown, updateURLLink})(ArticleForm)
export default ArticleForm; 
            