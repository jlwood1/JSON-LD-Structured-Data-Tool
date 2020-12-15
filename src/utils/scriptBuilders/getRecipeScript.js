import {convertToJSONLDScript} from './convertToJSONLDScript'

const getRecipeScript = (recipeData, type) => {
    let recipeObject = {} 
    recipeObject.context = 'https://schema.org/'
    recipeObject.type = 'Recipe'
    recipeObject.name = recipeData.name ? recipeData.name : '' 
    recipeObject.description = recipeData.description ? recipeData.description : '' 
    recipeObject.keywords = recipeData.keywords ? recipeData.keywords : '' 
    recipeObject.author = {
        '@type': 'Person', 
        name: recipeData.creator ? recipeData.creator : ''  
    }
    recipeObject.image = [] 
    if(recipeData.image.length > 0) {
        for(let x = 0; x < recipeData.image.length; x++) {
            recipeObject.image.push(recipeData.image[x].url)
        }
    }
    recipeObject.recipeCategory = recipeData.recipeCategory ? recipeData.recipeCategory : '' 
    recipeObject.recipeCuisine = recipeData.recipeCuisine ? recipeData.recipeCuisine : ''
    recipeObject.recipeYield = recipeData.recipeYield ? recipeData.recipeYield : '' 
    recipeObject.prepTime = recipeData.cookTime ? recipeData.cookTime : ''
    recipeObject.cookTime = recipeData.totalTime ? recipeData.totalTime : ''
    recipeObject.nutrition = {
        '@type': 'NutritionalInformatin', 
        calories: recipeData.calories ? recipeData.calories + ' cal' : '', 
        servingSize: recipeData.servingSize ? recipeData.servingSize : '', 
        fatContent: recipeData.fatContent ? recipeData.fatContent : ''
    }
    recipeObject.recipeInstructions = [] 
    if(recipeData.recipeInstructions) {
        for(var x = 0; x < recipeData.recipeInstructions.length; x++) {
            recipeObject.recipeInstructions.push({
                '@type': 'HowToStep', 
                text: recipeData.recipeInstructions[x].url 
            })
        }
    }
    recipeObject.recipeIngredient = [] 
    if(recipeData.recipeIngredient) {
        for(var x = 0; x < recipeData.recipeIngredient.length; x++) {
            recipeObject.recipeIngredient.push(recipeData.recipeIngredient[x].url)
        }
    }
    recipeObject.video = {
        '@type': 'VideoObject', 
        name: recipeData.videoName ? recipeData.videoName : '', 
        description: recipeData.videoDescription ? recipeData.videoDescription : '', 
        thumbnailUrl: recipeData.videoThumbnailUrl ? recipeData.videoThumbnailUrl : '', 
        contentUrl: recipeData.contentURL ? recipeData.contentURL : '', 
        embedUrl: recipeData.embedURL ? recipeData.embedURL : '', 
        uploadDate: recipeData.datePublished ? recipeData.datePublished: '' 
    }
    recipeObject.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: recipeData.ratingValue ? recipeData.ratingValue : '', 
        ratingCount: recipeData.ratingCount ? recipeData.ratingCount : '', 
        bestRating: recipeData.bestRating ? recipeData.bestRating : '', 
        worstRating: recipeData.worstRating ? recipeData.worstRating : ''
    }
    recipeObject.reviews = [] 
    if(recipeData.recipeReviewSections) {
        for(var x = 0; x < recipeData.recipeReviewSections.length; x++) {
            recipeObject.reviews.push({
                '@type': 'Review', 
                name: recipeData.reviewName[x].value ? recipeData.reviewName[x].value : '', 
                reviewBody: recipeData.reviewBody[x].value ? recipeData.reviewBody[x].value : '',
                reviewRating: {
                    '@type': 'Organization', 
                    ratingValue: recipeData.reviewRating[x].value ? recipeData.reviewRating[x].value : ''
                },   
                author: {
                    '@type': 'Person', 
                    name: recipeData.reviewAuthorName[x].value ? recipeData.reviewAuthorName[x].value : '' 
                },              
                publisher: {
                    '@type': 'Person', 
                    name: recipeData.reviewPublisherName[x].value ? recipeData.reviewPublisherName[x].value : '' 
                }, 
                datePublished: recipeData.reviewDate[x].value ? recipeData.reviewDate[x].value : ''
            })
        }
    }
    let script = convertToJSONLDScript(recipeObject) 
    return script
}

export default getRecipeScript 