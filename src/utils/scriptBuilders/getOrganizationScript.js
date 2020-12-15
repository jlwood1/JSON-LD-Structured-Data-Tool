import {convertToJSONLDScript} from './convertToJSONLDScript'

const getOrganizationScript = (organizationData, type) => {
    let organizationObject = {}
    organizationObject.context = 'https://schema.org/'
    organizationObject.type = type ? type : ''
    organizationObject.name = organizationData.name ? organizationData.name : '' 
    organizationObject.alternateName = organizationData.alternateName ? organizationData.alternateName : ''
    organizationObject.url = organizationData.url ? organizationData.url : '' 
    organizationObject.logo = organizationData.logo ? organizationData.logo : '' 
    if(organizationData.sameAs.length > 0) {
        var organizationSocialProfiles = [] 
        for(let x = 0; x < organizationData.sameAs.length; x++) {
            organizationSocialProfiles.push(organizationData.sameAs[x].url)
        }
    }

    organizationObject.sameAs = organizationSocialProfiles ? organizationSocialProfiles : [] 

    organizationObject.contactPoint = []
    if(organizationData.contactSections) {
        for(var x = 0; x < organizationData.contactSections.length; x++) {
            organizationObject.contactPoint.push({
                '@type': 'ContactPoint', 
                contactType: organizationData.contactType[x] ? organizationData.contactType[x].value : '', 
                name: organizationData.contactName[x] ? organizationData.contactName[x].value : ' ',
                telephone: organizationData.contactTelephone[x] ? organizationData.contactTelephone[x].value : '', 
                email: organizationData.contactEmail[x] ? organizationData.contactEmail[x].value : '', 
                contactProductSupported: organizationData.contactProductSupported[x] ? organizationData.contactProductSupported[x].value : '', 
                availableLanguage: organizationData.availableLanguage[x] ? organizationData.availableLanguage[x] : '',
                areaServed: organizationData.areaServed[x] ? organizationData.areaServed[x] : '' 
            })
            if(!organizationObject.contactPoint[x].email)
                delete organizationObject.contactPoint[x].email

            if(!organizationObject.contactPoint[x].contactProductSupported)
                delete organizationObject.contactPoint[x].contactProductSupported

            if(!organizationObject.contactPoint[x].areaServed.length)
                delete organizationObject.contactPoint[x].areaServed

            if(!organizationObject.contactPoint[x].availableLanguage.length)
                delete organizationObject.contactPoint[x].availableLanguage
        }
    }

    let script = convertToJSONLDScript(organizationObject)
    return script 
}

export default getOrganizationScript 