import React from 'react'; 
import {connect} from 'react-redux'
import getArticleScript from '../utils/scriptBuilders/getArticleScript'
import formatScript from '../utils/formatScript'
import getEventScript from '../utils/scriptBuilders/getEventScript';
import getFAQScript from '../utils/scriptBuilders/getFAQScript';
import getJobPostingScript from '../utils/scriptBuilders/getJobPostingScript';
import getLocalBusinessScript from '../utils/scriptBuilders/getLocalBusinessScript';
import getOrganizationScript from '../utils/scriptBuilders/getOrganizationScript';
import getPersonScript from '../utils/scriptBuilders/getPersonScript';
import getProductScript from '../utils/scriptBuilders/getProductScript' 
import getRecipeScript from '../utils/scriptBuilders/getRecipeScript';
import getVideoScript from '../utils/scriptBuilders/getVideoScript';
import getWebsiteScript from '../utils/scriptBuilders/getWebsiteScript';
let ScriptContainer = (props) => {
    switch(props.currentTerm) {
        case 'Article': {
            var script = getArticleScript(props.articleData, props.currentType)
            break; 
        }
        case 'Event': {
            var script = getEventScript(props.eventData, props.currentType)
            break
        }
        case 'FAQ Page': {
            var script = getFAQScript(props.faqData)
            break
        }
        case 'Job Posting': {
            var script = getJobPostingScript(props.jobPostingData)
            break
        }
        case 'Local Business': {
            var script = getLocalBusinessScript(props.localBusinessData, props.currentType)
            break 
        }
        case 'Organization': {
            var script = getOrganizationScript(props.organizationData, props.currentType)
            break 
        }
        case 'Person': {
            var script = getPersonScript(props.personData, props.currentType)
            break
        }
        case 'Product': {
            var script = getProductScript(props.productData, props.currentType)
            break 
        }
        case 'Recipe': {
            var script = getRecipeScript(props.recipeData, props.currentType)
            break
        }
        case 'Video': {
            var script = getVideoScript(props.videoData, props.currentType)
            break
        }
        case 'Website': {
            var script = getWebsiteScript(props.websiteData)
        }
    }
    let formattedScript = formatScript(script)
    let scriptheader = formattedScript ? '<script type="application/ld+json">' + '\n' : ''
    return (
        <div className = 'script-container-wrapper'> 
            <pre className = 'json-ld-script'>
                {scriptheader}
                {formattedScript}
            </pre>                
            
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        articleData: state.form.articleData,
        eventData: state.form.eventData,
        faqData: state.form.faqData,  
        jobPostingData: state.form.jobPostingData, 
        localBusinessData: state.form.localBusinessData,
        organizationData: state.form.organizationData, 
        personData: state.form.personData, 
        productData: state.form.productData, 
        recipeData: state.form.recipeData, 
        videoData: state.form.videoData, 
        websiteData: state.form.websiteData, 
        currentTerm: state.form.termDropdown,
        currentType: state.form.typeDropdown
    }
}

ScriptContainer = connect(mapStateToProps)(ScriptContainer)

export default ScriptContainer; 