import React from 'react'
import {connect} from 'react-redux'
import {updateURLLink, updateDropdown, updateDynamicSection, onTextboxUpdate} from '../../reducers/formReducer'
import AddURLWidget from '../widgets/AddURLWidget'
import ReviewsSectionWidget from '../widgets/ReviewsSectionWidget'
import DropdownWidget from '../widgets/DropdownWidget'

let RecipeForm = (props) => {
    const form = 'RECIPE_FORM'
    return (
        <div className = 'form-content-wrapper'> 
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Name </label>
                    <input className = 'input-text' type = 'text' id = 'name' onChange = {(event) => {
                        props.onTextboxUpdate('name' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Description </label>
                    <input className = 'input-text' type = 'text' id = 'description' onChange = {(event) => {
                        props.onTextboxUpdate('description' , event.target.value, form)
                    }}/> 
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Keywords </label>
                    <input className = 'input-text' type = 'text' id = 'keywords' onChange = {(event) => {
                        props.onTextboxUpdate('keywords' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Creator </label>
                    <input className = 'input-text' type = 'text' id = 'creator' onChange = {(event) => {
                        props.onTextboxUpdate('creator' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label-large'> Images </label>
            </div>
            <div className = 'grid-item'> 
                <AddURLWidget
                    type = 'Image'
                    id = 'recipeImageLinks'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.recipeImageLinks}
                    form = 'RECIPE_FORM'
                />
            </div>
            <div className = 'grid-item'> 
                <DropdownWidget 
                    options = {['None', 'Appetizer', 'Entree', 'Desert']}
                    showDropdown = {true}
                    placeHolder = {'Select Type...'}
                    dropdownId = {'recipeCategoryDropdown'}
                    onUpdate = {props.updateDropdown}
                    dropdownValue = {props.recipeCategoryDropdown}
                    label = {'Recipe Category'}
                    form = 'RECIPE_FORM'
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Cuisine </label>
                    <input className = 'input-text' type = 'text' id = 'recipeCuisine' onChange = {(event) => {
                        props.onTextboxUpdate('recipeCuisine' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Servings </label>
                    <input className = 'input-text' type = 'text' id = 'recipeYield' onChange = {(event) => {
                        props.onTextboxUpdate('recipeYield' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Preparation (min) </label>
                    <input className = 'input-text' type = 'text' id = 'cookTime' onChange = {(event) => {
                        props.onTextboxUpdate('cookTime' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Cooking (min) </label>
                    <input className = 'input-text' type = 'text' id = 'totalTime' onChange = {(event) => {
                        props.onTextboxUpdate('totalTime' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Serving Size </label>
                    <input className = 'input-text' type = 'text' id = 'servingSize' onChange = {(event) => {
                        props.onTextboxUpdate('servingSize' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Calories </label>
                    <input className = 'input-text' type = 'text' id = 'calories' onChange = {(event) => {
                        props.onTextboxUpdate('calories' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Fat (grams) </label>
                    <input className = 'input-text' type = 'text' id = 'fatContent' onChange = {(event) => {
                        props.onTextboxUpdate('fatContent' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label-large'> Steps </label>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget 
                    type = 'Step'
                    id = 'recipeSteps'
                    onURLUpdate = {props.updateURLLink}
                    links = {props.recipeSteps}
                    form = 'RECIPE_FORM'
                />
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label-large'> Ingredients </label>
            </div>
            <div className = 'grid-item'>
                <AddURLWidget 
                    type = 'Ingredient'
                    id = 'recipeIngredients'
                    onURLUpdate = {props.updateURLLink} 
                    links = {props.recipeIngredients}
                    form = 'RECIPE_FORM'
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Video Name </label>
                    <input className = 'input-text' type = 'text' id = 'videoName' onChange = {(event) => {
                        props.onTextboxUpdate('videoName' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Video Description </label>
                    <input className = 'input-text' type = 'text' id = 'videoDescription' onChange = {(event) => {
                        props.onTextboxUpdate('videoDescription' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Video Thumbnail URL </label>
                    <input className = 'input-text' type = 'text' id = 'videoThumbnailUrl' onChange = {(event) => {
                        props.onTextboxUpdate('videoThumbnailUrl' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Video Content URL </label>
                    <input className = 'input-text' type = 'text' id = 'contentURL' onChange = {(event) => {
                        props.onTextboxUpdate('contentURL' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Video Embeded URL </label>
                    <input className = 'input-text' type = 'text' id = 'embedURL' onChange = {(event) => {
                        props.onTextboxUpdate('embedURL' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Date Published </label>
                    <input className = 'input-text' type = 'date' id = 'datePublished' onChange = {(event) => {
                        props.onTextboxUpdate('datePublished' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label-large'> Aggregate Rating </label>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Aggregate Rating Value </label>
                    <input className = 'input-text' type = 'text' id = 'ratingValue' onChange = {(event) => {
                        props.onTextboxUpdate('ratingValue' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Number of Ratings </label>
                    <input className = 'input-text' type = 'text' id = 'ratingCount' onChange = {(event) => {
                        props.onTextboxUpdate('ratingCount' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Best Rating </label>
                    <input className = 'input-text' type = 'text' id = 'bestRating' onChange = {(event) => {
                        props.onTextboxUpdate('bestRating' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Worst Rating </label>
                    <input className = 'input-text' type = 'text' id = 'worstRating' onChange = {(event) => {
                        props.onTextboxUpdate('worstRating' , event.target.value, form)
                    }}/>
                </div>
            </div>
            <div className = 'grid-item'> 
                <label className = 'form-label-large'> Reviews </label>
            </div>
            <div className = 'grid-item'>
                <ReviewsSectionWidget 
                    reviewSections = {props.recipeReviewSections}
                    updateSection = {props.updateDynamicSection}
                    type = 'recipeReviewSection'
                    form = 'RECIPE_FORM'
                    onTextboxUpdate = {props.onTextboxUpdate}
                    textboxData = {props.recipeData}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipeImageLinks: state.form.recipeData.image, 
        recipeSteps: state.form.recipeData.recipeInstructions, 
        recipeIngredients: state.form.recipeData.recipeIngredient, 
        recipeCategoryDropdown: state.form.recipeData.recipeCategory,
        recipeReviewSections: state.form.recipeData.recipeReviewSections,
        recipeData: state.form.recipeData
    }
}

RecipeForm = connect(mapStateToProps, {updateURLLink, updateDynamicSection, updateDropdown, onTextboxUpdate})(RecipeForm)

export default RecipeForm