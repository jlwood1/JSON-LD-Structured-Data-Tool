import React from 'react'
 
let ReviewsSectionWidget = (props) => {
    console.log(props.reviewSections)
    return (
        <div className = 'reviews-widget-wrapper'>
            {
                props.reviewSections.length ? 
                    <div className = 'review-section'>
                        {
                            props.reviewSections.map(reviewSection => (
                                <div className = 'section-grid' key = {reviewSection.sectionId} > 
                                    <div className = 'relative-position'> 
                                        <label className = 'section-label'> Review {reviewSection.sectionId + 1}</label>
                                        <div className = 'delete-button' onClick = {() => props.updateSection(reviewSection.sectionId, props.type, props.form, 'Delete')}> <i className = 'delete-icon'> x </i> </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Name </label> 
                                            <input key = {reviewSection.sectionId} value = {props.textboxData.reviewName[reviewSection.sectionId].value ? props.textboxData.reviewName[reviewSection.sectionId].value : ''} className = 'input-text' type="text" id = "reviewName" onChange = {(event) => {
                                                props.onTextboxUpdate('reviewName', event.target.value, props.form, reviewSection.sectionId, 'Update')
                                            }}/>
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Body </label> 
                                            <input key = {reviewSection.sectionId} value = {props.textboxData.reviewBody[reviewSection.sectionId].value ? props.textboxData.reviewBody[reviewSection.sectionId].value : ''} className = 'input-text' type="text" id = "reviewBody" onChange = {(event) => {
                                                props.onTextboxUpdate('reviewBody', event.target.value, props.form, reviewSection.sectionId, 'Update')
                                            }}/> 
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Rating </label> 
                                            <input key = {reviewSection.sectionId} value = {props.textboxData.reviewRating[reviewSection.sectionId].value ? props.textboxData.reviewRating[reviewSection.sectionId].value : ''} className = 'input-text' type="text" id = "reviewRating" onChange = {(event) => {
                                                props.onTextboxUpdate('reviewRating', event.target.value, props.form, reviewSection.sectionId, 'Update')
                                            }}/>
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Author </label> 
                                            <input key = {reviewSection.sectionId} value = {props.textboxData.reviewAuthorName[reviewSection.sectionId].value ? props.textboxData.reviewAuthorName[reviewSection.sectionId].value : ''} className = 'input-text' type="text" id = "reviewAuthorName" onChange = {(event) => {
                                                props.onTextboxUpdate('reviewAuthorName', event.target.value, props.form, reviewSection.sectionId, 'Update')
                                            }}/>
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Publisher </label> 
                                            <input key = {reviewSection.sectionId} value = {props.textboxData.reviewPublisherName[reviewSection.sectionId].value ? props.textboxData.reviewPublisherName[reviewSection.sectionId].value : ''} className = 'input-text' type="text" id = "reviewPublisherName" onChange = {(event) => {
                                                props.onTextboxUpdate('reviewPublisherName', event.target.value, props.form, reviewSection.sectionId, 'Update')
                                            }}/> 
                                        </div>
                                    </div> 
                                    <div className = 'grid-item'> 
                                        <div className = 'text-box-wrapper'> 
                                            <label className = 'form-label'> Date </label> 
                                            <input key = {reviewSection.sectionId} value = {props.textboxData.reviewDate[reviewSection.sectionId].value ? props.textboxData.reviewDate[reviewSection.sectionId].value : ''} className = 'input-text' type="date" id = "reviewDate" onChange = {(event) => {
                                                props.onTextboxUpdate('reviewDate', event.target.value, props.form, reviewSection.sectionId, 'Update')
                                            }}/> 
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
                    props.updateSection(sectionId, props.type, props.form, 'Add')
                }}> <h2 className = 'button-text'> <i className = 'add-icon'> + </i> Add Review </h2> </div>
        </div>
    )
}

export default ReviewsSectionWidget 
