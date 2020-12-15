
export const updateOpenHours = (openHours, payload) => {
    switch(payload.action) {
        case 'Update': {
            switch(payload.textboxId) {
                case 'monday': {
                    openHours.monday = openHours.monday ? false : true
                    openHours.mondayOpen = null 
                    openHours.mondayClose = null

                    return openHours 
                }
                case 'mondayOpen': {
                    openHours.mondayOpen = payload.value
                    return openHours
                } 
                case 'mondayClose': {
                    openHours.mondayClose = payload.value
                    return openHours
                }
                case 'tuesday': {
                    openHours.tuesday = openHours.tuesday ? false : true
                    openHours.tuesdayOpen = null 
                    openHours.tuesdayClose = null

                    return openHours 
                }
                case 'tuesdayOpen': {
                    openHours.tuesdayOpen = payload.value
                    return openHours
                }
                case 'tuesdayClose': {
                    openHours.tuesdayClose = payload.value
                    return openHours
                }
                case 'wednesday': {
                    openHours.wednesday = openHours.wednesday ? false : true
                    openHours.wednesdayOpen = null 
                    openHours.wednesdayClose = null
                    return openHours 
                }
                case 'wednesdayOpen': {
                    openHours.wednesdayOpen = payload.value
                    return openHours
                }
                case 'wednesdayclose': {
                    openHours.wednesdayclose = payload.value
                    return openHours
                }
                case 'thursday': {
                    openHours.thursday = openHours.thursday ? false : true
                    openHours.thursdayOpen = null 
                    openHours.thursdayClose = null
                    return openHours 
                }
                case 'thursdayOpen': {
                    openHours.thursdayOpen = payload.value
                    return openHours
                }
                case 'thursdayClose': {
                    openHours.thursdayClose = payload.value
                    return openHours
                }
                case 'friday': {
                    openHours.friday = openHours.friday ? false : true
                    openHours.fridayOpen = null 
                    openHours.fridayClose = null
                    return openHours 
                }
                case 'fridayOpen': {
                    openHours.fridayOpen = payload.value
                    return openHours
                }
                case 'fridayClose': {
                    openHours.fridayClose = payload.value
                    return openHours
                }
                case 'saturday': {
                    openHours.saturday = openHours.saturday ? false : true
                    openHours.saturdayOpen = null 
                    openHours.saturdayClose = null
                    return openHours
                }
                case 'saturdayOpen': {
                    openHours.saturdayOpen = payload.value
                    return openHours
                }
                case 'saturdayClose': {
                    openHours.saturdayClose = payload.value
                    return openHours
                }
                case 'sunday': {
                    openHours.sunday = openHours.sunday ? false  : true 
                    openHours.sundayOpen = null 
                    openHours.sundayClose = null
                    return openHours
                }
                case 'sundayOpen': {
                    openHours.sundayOpen = payload.value
                    return openHours
                }
                case 'sundayClose': {
                    openHours.sundayClose = payload.value
                    return openHours
                }
            }
        }
        case 'Add': {
            openHours.showDays = true 
            return openHours 
        }
        case 'Delete': {
            openHours.showDays = false
            let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
            let setNull = openHours => setAll(openHours, null)
            setNull(openHours)

            return openHours
        }
    }
}

