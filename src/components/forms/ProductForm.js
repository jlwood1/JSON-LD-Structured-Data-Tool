import React from 'react'
import {connect} from 'react-redux';
import DropdownWidget from '../widgets/DropdownWidget';
import {updateDropdown, updateDynamicSection} from '../../reducers/widgetReducer';
import ReviewsSectionWidget from '../widgets/ReviewsSectionWidget'

let ProductForm = (props) => {
    console.log(props.reviewSections)
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
                    <label className = 'form-label'> Image URL </label> 
                    <input className = 'input-text' type="text" id = "image"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Brand </label> 
                    <input className = 'input-text' type="text" id = "brand"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Description </label> 
                    <input className = 'input-text' type="text" id = "description"/> 
                </div>
            </div>
            <div className = 'grid-item'> 
                <div className = 'form-label-large'> Aggregate Rating</div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Rating Value </label> 
                    <input className = 'input-text' type="text" id = "ratingValue"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Number of Ratings </label> 
                    <input className = 'input-text' type="text" id = "ratingCount"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Highest Rating </label> 
                    <input className = 'input-text' type="text" id = "bestRating"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Lowest Rating </label> 
                    <input className = 'input-text' type="text" id = "worstRating"/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <DropdownWidget
                    options = {['None', 'Aggregate Offer']}
                    showDropdown = {true}
                    placeHolder = {'Select Type..'}
                    dropdown = {'offerDropdown'}
                    onUpdate = {props.updateDropdown}
                    dropdownValue = {props.offerDropdown}
                    label = {'Offer Type'}
                />
            </div>
            <div className = 'grid-item'>
                <ReviewsSectionWidget
                    reviewSections = {props.reviewSections}
                    type = 'productReviewSection'
                    updateSection = {props.updateDynamicSection}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        offerDropdown: state.app.offerDropdown, 
        reviewSections: state.app.productReviewSections
    }
} 

ProductForm = connect(mapStateToProps, {updateDropdown, updateDynamicSection})(ProductForm)
export default ProductForm; 