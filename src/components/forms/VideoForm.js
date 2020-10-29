import React from 'react'
import AddURLWidget from '../widgets/AddURLWidget'
import {connect} from 'react-redux'
import {updateURLLink} from '../../reducers/widgetReducer'

let VideoForm = (props) => {
    return (
        <div className = 'form-content-wrapper'> 
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Name </label> 
                    <input className = 'input-text' type="text" id = "name"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Description </label> 
                    <input className = 'input-text' type="text" id = "description"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Upload Date </label> 
                    <input className = 'input-text' type="text" id = "uploadDate"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label-large'> Video Duration </label>
            </div>
            <div className = 'grid-item'>
                <div className = 'inline'>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Minutes </label> 
                        <input className = 'input-text' type="text" id = "duration"/> 
                    </div>
                    <div className = 'text-box-wrapper'> 
                        <label className = 'form-label'> Seconds </label> 
                        <input className = 'input-text' type="text" id = "duration"/> 
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
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Content URL </label> 
                    <input className = 'input-text' type="text" id = "contentUrl"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Embed URL </label> 
                    <input className = 'input-text' type="text" id = "embedUrl"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Name </label> 
                    <input className = 'input-text' type="text" id = "publisherName"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Logo URL </label> 
                    <input className = 'input-text' type="text" id = "publisherLogoUrl"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Logo Width </label> 
                    <input className = 'input-text' type="text" id = "publisherLogoWidth"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Publisher Logo Height </label> 
                    <input className = 'input-text' type="text" id = "publisherLogoHeight"/> 
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        videoThumbnailURLLinks: state.app.videoThumbnailURLLinks
    }
}

VideoForm = connect(mapStateToProps, {updateURLLink})(VideoForm)

export default VideoForm; 