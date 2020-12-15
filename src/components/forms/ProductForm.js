import React from 'react'
import {connect} from 'react-redux';
import DropdownWidget from '../widgets/DropdownWidget';
import {updateDropdown, updateDynamicSection, onTextboxUpdate} from '../../reducers/formReducer';
import ReviewsSectionWidget from '../widgets/ReviewsSectionWidget'

let ProductForm = (props) => {
    const form = 'PRODUCT_FORM'
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
                    <label className = 'form-label'> Image URL </label> 
                    <input className = 'input-text' type="text" id = "image" onChange = {(event) => {
                        props.onTextboxUpdate('image' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Brand </label> 
                    <input className = 'input-text' type="text" id = "brand" onChange = {(event) => {
                        props.onTextboxUpdate('brand' , event.target.value, form)
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
                <div className = 'form-label-large'> Aggregate Rating</div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Rating Value </label> 
                    <input className = 'input-text' type="text" id = "ratingValue" onChange = {(event) => {
                        props.onTextboxUpdate('ratingValue', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Number of Ratings </label> 
                    <input className = 'input-text' type="text" id = "ratingCount" onChange = {(event) => {
                        props.onTextboxUpdate('ratingCount', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Highest Rating </label> 
                    <input className = 'input-text' type="text" id = "bestRating" onChange = {(event) => {
                        props.onTextboxUpdate('bestRating', event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Lowest Rating </label> 
                    <input className = 'input-text' type="text" id = "worstRating" onChange = {(event) => {
                        props.onTextboxUpdate('worstRating', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'> 
                <div className = 'form-label-large'> ID Properties </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> sku </label> 
                    <input className = 'input-text' type="text" id = "sku" onChange = {(event) => {
                        props.onTextboxUpdate('sku', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> gtin8 </label> 
                    <input className = 'input-text' type="text" id = "gtin8" onChange = {(event) => {
                        props.onTextboxUpdate('gtin8', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> gtin13 </label> 
                    <input className = 'input-text' type="text" id = "gtin13" onChange = {(event) => {
                        props.onTextboxUpdate('gtin13', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> gtin14 </label> 
                    <input className = 'input-text' type="text" id = "gtin14" onChange = {(event) => {
                        props.onTextboxUpdate('gtin14', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> mpn </label> 
                    <input className = 'input-text' type="text" id = "mpn" onChange = {(event) => {
                        props.onTextboxUpdate('mpn', event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <DropdownWidget
                    options = {['None', 'Aggregate Offer']}
                    showDropdown = {true}
                    placeHolder = {'Select Type..'}
                    dropdownId = {'offerDropdown'}
                    onUpdate = {props.updateDropdown}
                    dropdownValue = {props.offerDropdown}
                    label = {'Offer Type'}
                    form = 'PRODUCT_FORM'
                />
            </div>
            {/*add offer text boxes when selected*/}
            <div className = 'grid-item'>
                <ReviewsSectionWidget
                    reviewSections = {props.reviewSections}
                    type = 'productReviewSection'
                    updateSection = {props.updateDynamicSection}
                    form = 'PRODUCT_FORM'
                    onTextboxUpdate = {props.onTextboxUpdate}
                    textboxData = {props.productData}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        offerDropdown: state.form.productData.offerType, 
        reviewSections: state.form.productData.productReviewSection, 
        productData: state.form.productData
    }
} 

ProductForm = connect(mapStateToProps, {updateDropdown, updateDynamicSection, onTextboxUpdate})(ProductForm)
export default ProductForm; 