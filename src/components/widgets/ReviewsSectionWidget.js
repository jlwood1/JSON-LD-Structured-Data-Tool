import React from 'react'
 
let ReviewsSectionWidget = (props) => {
    return (
        <div className = 'reviews-widget-wrapper'>
            {
                props.reviewSections.length ? 
                    <div className = 'review-section'>
                        <label className = 'form-label-large'> Reviews </label>
                        {
                            props.reviewSections.map(reviewSection => (
                                <div className = 'section-grid' key = {reviewSection.sectionId} > 
                                    <div className = 'relative-position'> 
                                        <label className = 'section-label'> Review {reviewSection.sectionId + 1}</label>
                                        <div className = 'delete-button' onClick = {() => props.updateSection(reviewSection.sectionId, props.type, 'Delete')}> <i className = 'delete-icon'> x </i> </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Name </label> 
                                            <input key = {reviewSection.sectionId} className = 'input-text' type="text" id = "name"/> 
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Body </label> 
                                            <input key = {reviewSection.sectionId} className = 'input-text' type="text" id = "ratingBody"/> 
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Rating </label> 
                                            <input key = {reviewSection.sectionId} className = 'input-text' type="text" id = "rating"/> 
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Author </label> 
                                            <input key = {reviewSection.sectionId} className = 'input-text' type="text" id = "authorname"/> 
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Publisher </label> 
                                            <input key = {reviewSection.sectionId} className = 'input-text' type="text" id = "publishername"/> 
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Date </label> 
                                            <input key = {reviewSection.sectionId} className = 'input-text' type="date" id = "date"/> 
                                        </div>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>
                : ''
            }
            <div className = 'add-button' onClick = {() => {
                    let sectionId = props.reviewSections.length ? props.reviewSections.length : 0
                    props.updateSection(sectionId, props.type, 'Add')
                }}> <h2 className = 'button-text'> <i className = 'add-icon'> + </i> Add Review </h2> </div>
        </div>
    )
}

export default ReviewsSectionWidget 
