import {convertToJSONLDScript} from './convertToJSONLDScript'

let getWebsiteScript = (websiteData) => {
    let websiteObject = {}
    websiteObject.context = 'https://schema.org/' 
    websiteObject.type = 'Website'
    websiteObject.name = websiteData.name ? websiteData.name : '' 
    websiteObject.url = websiteData.url ? websiteData.url : '' 
    websiteObject.potentialAction = {
        '@type': 'SearchAction', 
        target: websiteData.target ? websiteData.target : '',
        'query-input': 'required name=search_term_string'
    }
    let script = convertToJSONLDScript(websiteObject)
    return script
}

export default getWebsiteScript