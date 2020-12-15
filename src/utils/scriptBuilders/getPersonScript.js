import {convertToJSONLDScript} from './convertToJSONLDScript'

const getPersonScript = (personData, type) => {
    let personObject = {}
    personObject.context = 'https://schema.org/'
    personObject.type = type ? type : '' 
    personObject.name = personData.name ? personData.name : '' 
    personObject.url = personData.url ? personData.url : '' 
    personObject.image = personData.image ? personData.image : '' 
    personObject.jobTitle = personData.jobTitle ? personData.jobTitle : '' 
    personObject.worksFor = {
        '@type': 'Organization', 
        name: personData.worksFor 
    }
    if(personData.sameAs.length > 0) {
        var personSocialProfiles = [] 
        for(let x = 0; x < personData.sameAs.length; x++) {
            personSocialProfiles.push(personData.sameAs[x].url)
        }
    }
    personObject.sameAs = personSocialProfiles ? personSocialProfiles : [] 

    let script = convertToJSONLDScript(personObject)
    return script
}

export default getPersonScript