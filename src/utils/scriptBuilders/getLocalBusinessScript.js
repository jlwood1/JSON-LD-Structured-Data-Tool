import {convertToJSONLDScript} from './convertToJSONLDScript'
const getLocalBusinessScript = (localBusinessData, type) => {
    let localBusinessObject = {} 
    localBusinessObject.context = 'https://schema.org/'
    localBusinessObject.type = type ? type : '' 
    localBusinessObject.name = localBusinessData.name ? localBusinessData.name : '' 
    if(localBusinessData.image.length > 0) {
        var localBusinessImages = []
        for(let x = 0; x < localBusinessData.image.length; x++) {
            localBusinessImages.push(localBusinessData.image[x].url)
        }
    }
    localBusinessObject.image = localBusinessImages ? localBusinessImages : []
    localBusinessObject.url = localBusinessData.url ? localBusinessData.url : ''
    localBusinessObject.telephone = localBusinessData.telephone ? localBusinessData.telephone : '' 
    localBusinessObject.address = {
        '@type': 'PostalAddress', 
        streetAddress: localBusinessData.streetAddress ? localBusinessData.streetAddress : '',
        addressLocality: localBusinessData.addressLocality ? localBusinessData.addressLocality : '',
        postalCode: localBusinessData.postalCode ? localBusinessData.postalCode : '', 
        addressCountry: localBusinessData.addressCountry ? localBusinessData.addressCountry : ''
    }
    if(localBusinessData.sameAs.length > 0) {
        var localBusinessSocialProfiles = []
        for(let x = 0; x < localBusinessData.sameAs.length; x++) {
            localBusinessSocialProfiles.push(localBusinessData.sameAs[x].url)
        }
    }
    localBusinessObject.sameAs = localBusinessSocialProfiles ? localBusinessSocialProfiles : []
    let openHoursDataSet = []

    if(localBusinessData.openHours.monday) {
        openHoursDataSet.push({
            id: 'monday', 
            opens: localBusinessData.openHours.mondayOpen ? localBusinessData.openHours.mondayOpen : '', 
            closes: localBusinessData.openHours.mondayClose ? localBusinessData.openHours.mondayClose : ''})
    }
    if(localBusinessData.openHours.tuesday) {
        openHoursDataSet.push({
            id: 'tuesday', 
            opens: localBusinessData.openHours.tuesdayOpen ? localBusinessData.openHours.tuesdayOpen : '', 
            closes: localBusinessData.openHours.tuesdayClose ? localBusinessData.openHours.tuesdayClose : ''})
    }
    if(localBusinessData.openHours.wednesday) {
        openHoursDataSet.push({
            id: 'wednesday', 
            opens: localBusinessData.openHours.wednesdayOpen ? localBusinessData.openHours.wednesdayOpen : '', 
            closes: localBusinessData.openHours.wednesdayClose ? localBusinessData.openHours.wednesdayClose : ''})
    }
    if(localBusinessData.openHours.thursday){
        openHoursDataSet.push({
            id: 'thursday', 
            opens: localBusinessData.openHours.thursdayOpen ? localBusinessData.openHours.thursdayOpen : '', 
            closes: localBusinessData.openHours.thursdayClose ? localBusinessData.openHours.thursdayClose : ''}) 
    }
    if(localBusinessData.openHours.friday) {
        openHoursDataSet.push({
            id: 'friday', 
            opens: localBusinessData.openHours.fridayOpen ? localBusinessData.openHours.fridayOpen : '', 
            closes: localBusinessData.openHours.fridayClose ? localBusinessData.openHours.fridayClose : ''})
    }
    if(localBusinessData.openHours.saturday) {
        openHoursDataSet.push({
            id: 'saturday', 
            opens: localBusinessData.openHours.saturdayOpen ? localBusinessData.openHours.saturdayOpen : '', 
            closes: localBusinessData.openHours.saturdayClose ? localBusinessData.openHours.saturdayClose : ''})
    }
    if(localBusinessData.openHours.sunday) {
        openHoursDataSet.push({
            id: 'sunday', 
            opens: localBusinessData.openHours.sundayOpen ? localBusinessData.openHours.sundayOpen : '', 
            closes: localBusinessData.openHours.sundayClose ? localBusinessData.openHours.sundayClose : ''})
    }
    localBusinessObject.openingHoursSpecification = getOpenHours(openHoursDataSet)
    
    let script = convertToJSONLDScript(localBusinessObject)
    return script
}

const getOpenHours = (openHoursDataSet) => {
    var openHoursSpec = []
    for(var i = 0; i < openHoursDataSet.length; i++) {
        let day = openHoursDataSet[i].id 
        let opens = openHoursDataSet[i].opens 
        let closes = openHoursDataSet[i].closes
        if(!openHoursSpec.length) {
            openHoursSpec.push({
                '@type': 'OpeningHoursSpecification', 
                dayOfWeek: [day], 
                opens: opens, 
                closes: closes
            })
        } else {
            for(var x = 0; x < openHoursSpec.length; x++) {
                if(opens === openHoursSpec[x].opens && closes === openHoursSpec[x].closes) {
                    openHoursSpec[x].dayOfWeek.push(day)
                    break 
                } 
                if(x === openHoursSpec.length - 1) {
                    openHoursSpec.push({
                        '@type': 'OpeningHoursSpecification', 
                        dayOfWeek: [day], 
                        opens: opens, 
                        closes: closes
                    })
                    break
                }
            }
        }
    }
    return openHoursSpec;
}


export default getLocalBusinessScript