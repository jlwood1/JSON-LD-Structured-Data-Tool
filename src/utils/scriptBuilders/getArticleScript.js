import {convertToJSONLDScript} from './convertToJSONLDScript'
const getArticleScript = (articleData, type) => { 
    let articleObject = {}; 
    articleObject.context = 'https://schema.org/'
    articleObject.type = type ? type : ''
    articleObject.headline = articleData.headline ? articleData.headline : ''
    articleObject.description = articleData.description ? articleData.description : ''
    if(articleData.image.length > 0) {
        var articleImages = []
        for(let x = 0; x < articleData.image.length; x++) {
            articleImages.push(articleData.image[x].url)
        }
    }
    articleObject.image = articleImages ? articleImages : []
    articleObject.author = {
        '@type': articleData.authorType ? articleData.authorType : '', 
        name: articleData.authorName ? articleData.authorName : ''
    }
    articleObject.publisher = {
        '@type': 'Organization', 
        name: articleData.publisherName ? articleData.publisherName : '', 
        logo: {
            '@type': 'ImageObject', 
            url: articleData.publisherLogoURL ? articleData.publisherLogoURL : ''
        }
    } 
    articleObject.datePublished = articleData.datePublished ? articleData.datePublished : ''
    articleObject.dateModified = articleData.dateModified ? articleData.dateModified : ''
    let script = convertToJSONLDScript(articleObject)
    return script
}



export default getArticleScript;