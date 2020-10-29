import React from 'react'
import {connect} from 'react-redux'
import {updateURLLink, updateDynamicSection} from '../../reducers/widgetReducer'
import AddURLWidget from '../widgets/AddURLWidget'
import ReviewsSectionWidget from '../widgets/ReviewsSectionWidget'

let RecipeForm = (props) => {
    return (
        <div className = 'form-content-wrapper'> 
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Name </label>
                    <input className = 'input-text' type = 'text' id = 'name'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Description </label>
                    <input className = 'input-text' type = 'text' id = 'description'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Keywords </label>
                    <input className = 'input-text' type = 'text' id = 'keywords'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Creator </label>
                    <input className = 'input-text' type = 'text' id = 'creator'/>
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
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Cuisine </label>
                    <input className = 'input-text' type = 'text' id = 'recipeCuisine'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Servings </label>
                    <input className = 'input-text' type = 'text' id = 'recipeYield'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Preparation (min) </label>
                    <input className = 'input-text' type = 'text' id = 'cookTime'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Cooking (min) </label>
                    <input className = 'input-text' type = 'text' id = 'totalTime'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Serving Size </label>
                    <input className = 'input-text' type = 'text' id = 'servingSize'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Calories </label>
                    <input className = 'input-text' type = 'text' id = 'calories'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Fat (grams) </label>
                    <input className = 'input-text' type = 'text' id = 'fatContent'/>
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
                />
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Video Content URL </label>
                    <input className = 'input-text' type = 'text' id = 'contentURL'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Video Embeded URL </label>
                    <input className = 'input-text' type = 'text' id = 'contentURL'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Date Published </label>
                    <input className = 'input-text' type = 'date' id = 'embedURL'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <label className = 'form-label-large'> Aggregate Rating </label>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Aggregate Rating Value </label>
                    <input className = 'input-text' type = 'date' id = 'ratingValue'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Number of Ratings </label>
                    <input className = 'input-text' type = 'date' id = 'ratingCount'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Best Rating </label>
                    <input className = 'input-text' type = 'date' id = 'bestRating'/>
                </div>
            </div>
            <div className = 'grid-item'>
                <div className = 'text-box-wrapper'> 
                    <label className = 'form-label'> Worst Rating </label>
                    <input className = 'input-text' type = 'date' id = 'worstRating'/>
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
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipeImageLink: state.app.recipeImageLinks, 
        recipeSteps: state.app.recipeSteps, 
        recipeIngredients: state.app.recipeIngredients, 
        recipeCategoryDropdown: state.app.recipeCategoryDropdown,
        recipeReviewSections: state.app.recipeReviewSections
    }
}

RecipeForm = connect(mapStateToProps, {updateURLLink, updateDynamicSection})(RecipeForm)

export default RecipeForm