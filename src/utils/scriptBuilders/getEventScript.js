import {convertToJSONLDScript} from './convertToJSONLDScript'

const getEventScript = (eventData, type) => { 
    let eventObject = {}
    eventObject.context = 'https://schema.org/'
    eventObject.type = type ? type : ''
    eventObject.name = eventData.name ? eventData.name : '' 
    if(eventData.description) {
        eventObject.description = eventData.description
    }

    if(eventData.image.length > 0) {
        var eventImages = []
        for(let x = 0; x < eventData.image.length; x++) {
            eventImages.push(eventData.image[x].url)
        }
    }
    
    eventObject.image = eventImages ? eventImages : []
    eventObject.startDate = eventData.startDate ? eventData.startDate + (eventData.startTime ? 'T' + eventData.startTime : '') : ''
    eventObject.endDate = eventData.endDate ? eventData.endDate + (eventData.endTime ? 'T' + eventData.endTime : '') : ''
    eventObject.performer = {
        '@type': eventData.performerType ? eventData.performerType : '', 
        name: eventData.performerName ? eventData.performerName : ''
    } 
    eventObject.location = {
        '@type': 'place',
        name: eventData.venueName ? eventData.venueName : '', 
        address: {
            '@type': 'PostalAddress', 
            streetAddress: eventData.streetAddress ? eventData.streetAddress : '', 
            addressLocality: eventData.addressLocality ? eventData.addressLocality : '', 
            postalCode: eventData.zipCode ? eventData.zipCode : '', 
            addressCountry: eventData.addressCountry ? eventData.addressCountry : '', 
            addressRegion: eventData.regionCode ? eventData.regionCode : ''
        }
    }
    eventObject.currencyCode = eventData.currencyCode ? eventData.currencyCode : ''
    let script = convertToJSONLDScript(eventObject)
    return script 
}

export default getEventScript