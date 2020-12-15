import React from 'react'
import AddURLWidget from '../widgets/AddURLWidget'
import {connect} from 'react-redux'
import {updateURLLink, onTextboxUpdate} from '../../reducers/formReducer'

let VideoForm = (props) => {
    const form = 'VIDEO_FORM'
    return (
        <div className = 'form-content-wrapper'> 
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Name </label> 
                    <input className = 'input-text' type="text" id = "name" onChange = {(event) => {
                        props.onTextboxUpdate('name' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Description </label> 
                    <input className = 'input-text' type="text" id = "description" onChange = {(event) => {
                        props.onTextboxUpdate('description' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Upload Date </label> 
                    <input className = 'input-text' type="text" id = "uploadDate" onChange = {(event) => {
                        props.onTextboxUpdate('uploadDate' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label-large'> Video Duration </label>
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Minutes </label> 
                        <input className = 'input-text' type="text" id = "durationMinutes" onChange = {(event) => {
                            props.onTextboxUpdate('durationMinutes' , event.target.value, form)
                        }}/>
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Seconds </label> 
                        <input className = 'input-text' type="text" id = "durationSeconds" onChange = {(event) => {
                            props.onTextboxUpdate('durationSeconds' , event.target.value, form)
                        }}/>
                    </div>
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label-large'> Thumbnail URL </label>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget
                    type = 'Thumbnail URL'
                    onURLUpdate = {props.updateURLLink}
                    id = 'videoThumbnailURLLinks'
                    links = {props.videoThumbnailURLLinks}
                    form = 'VIDEO_FORM'
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Content URL </label> 
                    <input className = 'input-text' type="text" id = "contentURL" onChange = {(event) => {
                        props.onTextboxUpdate('contentURL' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Embed URL </label> 
                    <input className = 'input-text' type="text" id = "embedURL" onChange = {(event) => {
                        props.onTextboxUpdate('embedURL' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Name </label> 
                    <input className = 'input-text' type="text" id = "publisherName" onChange = {(event) => {
                        props.onTextboxUpdate('publisherName' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Logo URL </label> 
                    <input className = 'input-text' type="text" id = "publisherLogoURL" onChange = {(event) => {
                        props.onTextboxUpdate('publisherLogoURL' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Logo Width </label> 
                    <input className = 'input-text' type="text" id = "publisherLogoWidth" onChange = {(event) => {
                        props.onTextboxUpdate('publisherLogoWidth' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Logo Height </label> 
                    <input className = 'input-text' type="text" id = "publisherLogoHeight" onChange = {(event) => {
                        props.onTextboxUpdate('publisherLogoHeight' , event.target.value, form)
                    }}/> 
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        videoThumbnailURLLinks: state.form.videoData.thumbnailUrl
    }
}

VideoForm = connect(mapStateToProps, {updateURLLink, onTextboxUpdate})(VideoForm)

export default VideoForm; 