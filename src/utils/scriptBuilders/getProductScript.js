import {convertToJSONLDScript} from './convertToJSONLDScript'

const getProductScript = (productData, type) => {
    let productObject = {} 
    productObject.context = 'https://schema.org/'
    productObject.type = type ? type : ''
    productObject.name = productData.name ? productData.name : '' 
    productObject.image = productData.image ? productData.image : '' 
    productObject.brand = productData.brand ? productData.brand : '' 
    productObject.description = productData.description ? productData.description : '' 
    productObject.ratingValue = productData.ratingValue ? productData.ratingValue : ''
    productObject.ratingCount = productData.ratingCount ? productData.ratingCount : '' 
    productObject.bestRating = productData.bestRating ? productData.bestRating : '' 
    productObject.worstRating = productData.worstRating ? productData.worstRating : ''
    productObject.sku = productData.sku ? productData.sku : '' 
    productObject.gtin8 = productData.gtin8 ? productData.gtin8 : '' 
    productObject.gtin13 = productData.gtin13 ? productData.gtin13 : '' 
    productObject.gtin14 = productData.gtin14 ? productData.gtin14 : ''
    productObject.reviews = []
    if(productData.productReviewSection) {
        for(var x = 0; x < productData.productReviewSection.length; x++) {
            productObject.reviews.push({
                name: productData.reviewName[x].value ? productData.reviewName[x].value : '', 
                reviewBody: productData.reviewBody[x].value ? productData.reviewBody[x].value : '', 
                reviewRating: {
                    '@type': 'Rating', 
                    ratingValue: productData.reviewRating[x].value ? productData.reviewRating[x].value : ''
                },  
                author: {
                    '@type': 'Person', 
                    name: productData.reviewAuthorName[x].value ? productData.reviewAuthorName[x].value : '' 
                }, 
                publisher: {
                    '@type': 'Person', 
                    name: productData.reviewPublisherName[x].value ? productData.reviewPublisherName[x].value : ''
                }, 
                datePublished: productData.reviewDate[x].value ? productData.reviewDate[x].value : '' 
            })
        }
    }
    let script = convertToJSONLDScript(productObject)
    return script 
}

export default getProductScript