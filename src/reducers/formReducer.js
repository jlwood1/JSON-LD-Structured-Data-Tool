import {editURL} from './helpers/editURL'
import {editDynamicDropdown} from './helpers/editDynamicDropdowns'
import {editDynamicSection} from './helpers/editDynamicSection'
import {editScrollableCheckBoxes} from './helpers/editScrollableCheckBoxes';
import {updateOpenHours} from './helpers/editOpenHours'
import {editDynamicTextbox} from './helpers/editDynamicTextbox'

const initialStore = {
    articleData: {headline: null,  description: null, image: [], authorType: null, authorName: null, publisherName: null, publisherLogoURL: null, datePublished: null, dateModified: null}, 
    eventData: {name: null, description: null, image: [], startDate: null, startTime: null, endDate: null, endTime: null, performerType: null, performerName: null, venueName: null, streetAddress: null, addressLocality: null, postalCode: null, addressCountry: null, addressRegion: null, currencyCode: null}, 
    jobPostingData: {title: null, description: null, hiringOrganization: null, hiringOrganizationURL: null, industry: null, datePosted: null, validThrough: null, isRemote: false, streetAddress: null, addressLocality: null, postalCode: null, addressCountry: null, baseSalary: null, maxSalary: null, currencyCode: null, responsibilities: null, skills: null, qualifications: null, educationRequirements: null, experienceRequirements: null, employmentType: null, unitText: null },
    faqData: {qaSection: []}, 
    localBusinessData: {name: null, url: null, telephone: null, streetAddress: null, addressLocality: null, postalCode: null, addressCountry: null, image: [], sameAs: [], alwaysOpen: false, openHours: {showDays: false, monday: false, mondayOpen: null, mondayClose: null, tuesday: false, tuesdayOpen: null, tuesdayClose: null, wednesday: false, wednesdayOpen: null, wednesdayClose: null, thursday: false, thursdayOpen: null, thursdayClose: null, friday: false, fridayOpen: null, fridayClose: null, saturday: false, saturdayOpen: null, saturdayClose: null, sunday: false, sundayOpen: null, sundayClose: null}}, 
    organizationData: { name: null, alternateName: null, url: null, logo: null, contactType: [], contactName: [], contactTelephone: [], contactEmail: [], contactProductSupported: [], sameAs: [], contactSections: [], areaServed: [], availableLanguage: []}, 
    personData: {sameAs: [], name: null, url: null, image: null, jobTitle: null, worksFor: null}, 
    productData: {name: null, image: null, brand: null, description: null, ratingValue: null, ratingCount: null, bestRating: null, worstRating: null, unitText: null, sku: null, gtin8: null, gtin13: null, gtin14: null, mpn: null, offerType: null, productReviewSection: [], reviewName: [], reviewBody: [], reviewRating: [], reviewAuthorName: [], reviewPublisherName: [], reviewDate: [] }, 
    recipeData: { name: null, description: null, keywords: null, creator: null, recipeCuisine: null, recipeYield: null, cookTime: null, totalTime: null, servingSize: null, calories: null, fatContent: null, videoName: null, videoDescription: null, videoThumbnailUrl: null, contentURL: null, embedURL: null, datePublished: null, ratingValue: null, ratingCount: null, bestRating: null, worstRating: null, recipeCategory: null, reviewName: [], reviewBody: [], reviewRating: [], reviewAuthorName: [], reviewPublisherName: [], reviewDate: [], image: [],  recipeInstructions: [], recipeIngredient: [], recipeReviewSections: []}, 
    videoData: {name: null, description: null, uploadDate: null, durationMinutes: null, durationSeconds: null, contentURL: null, embedURL: null, publisherName: null, publisherLogoURL: null, publisherLogoWidth: null, publisherLogoHeight: null, thumbnailUrl: []}, 
    websiteData: {name: null, url: null, target: null}, 
    typeDropdown: null, 
    termDropdown: null 
}

export default function formReducer(store = initialStore, action) {
    const {type, payload} = action; 
    
    switch(type) {
        case UPDATE_TEXTBOX: {
            switch(payload.form) {
                case ARTICLE_FORM: {
                    switch(payload.id) {
                        case 'headline': {
                            let headline = store.articleData.headline ? [...store.articleData.headline] : ''
                            headline = payload.value
                            return {...store, articleData: {...store.articleData, headline: headline}}
                        }
                        case 'description': {
                            let description = store.articleData.description ? [...store.articleData.description] : ''
                            description = payload.value
                            return {...store, articleData: {...store.articleData, description: description}}
                        }
                        case 'author-name': {
                            let authorName = store.articleData.authorName ? [...store.articleData.authorName] : ''
                            authorName = payload.value
                            return {...store, articleData: {...store.articleData, authorName: authorName}}
                        }
                        case 'publisher-name': {
                            let publisherName = store.articleData.publisherName ? [...store.articleData.publisherName] : ''
                            publisherName = payload.value
                            return {...store, articleData: {...store.articleData, publisherName: publisherName}}
                        }
                        case 'publisher-logo-url': {
                            let publisherLogoURL = store.articleData.publisherLogoURL ? [...store.articleData.publisherLogoURL] : ''
                            publisherLogoURL = payload.value
                            return {...store, articleData: {...store.articleData, publisherLogoURL: publisherLogoURL}}
                        }
                        case 'datePublished': {
                            let datePublished = store.articleData.datePublished ? [...store.articleData.datePublished] : ''
                            datePublished = payload.value
                            return {...store, articleData: {...store.articleData, datePublished: datePublished}}
                        }
                        case 'dateModified': {
                            let dateModified = store.articleData.dateModified ? [...store.articleData.dateModified] : ''
                            dateModified = payload.value
                            return {...store, articleData: {...store.articleData, dateModified: dateModified}}
                        }
                    }
                }
                case EVENT_FORM: {
                    switch(payload.id) {
                        case 'name': {
                            let name = store.eventData.name ? [...store.eventData.name] : ''
                            name = payload.value
                            return {...store, eventData: {...store.eventData, name: name}}
                        }
                        case 'description': {
                            let description = store.eventData.description ? [...store.eventData.description] : ''
                            description = payload.value
                            return {...store, eventData: {...store.eventData, description: description}}
                        }
                        case 'startDate': {
                            let startDate = store.eventData.startDate ? [...store.eventData.startDate] : ''
                            startDate = payload.value
                            return {...store, eventData: {...store.eventData, startDate: startDate}}
                        } 
                        case 'startTime': {
                            let startTime = store.eventData.startTime ? [...store.eventData.startTime] : ''
                            startTime = payload.value
                            return {...store, eventData: {...store.eventData, startTime: startTime}}
                        }
                        case 'endDate': {
                            let endDate = store.eventData.endDate ? [...store.eventData.endDate] : ''
                            endDate = payload.value
                            return {...store, eventData: {...store.eventData, endDate: endDate}}
                        }
                        case 'endTime': {
                            let endTime = store.eventData.endTime ? [...store.eventData.endTime] : ''
                            endTime = payload.value
                            return {...store, eventData: {...store.eventData, endTime: endTime}}
                        }
                        case 'performerName': {
                            let performerName = store.eventData.performerName ? [...store.eventData.performerName] : ''
                            performerName = payload.value
                            return {...store, eventData: {...store.eventData, performerName: performerName}}
                        }
                        case 'venueName': {
                            let venueName = store.eventData.venueNasalaryme ? [...store.eventData.venueName] : ''
                            venueName = payload.value
                            return {...store, eventData: {...store.eventData, venueName: venueName}}
                        }
                        case 'addressCountry': {
                            let addressCountry = store.eventData.addressCountry ? [...store.eventData.addressCountry] : ''
                            addressCountry = payload.value
                            return {...store, eventData: {...store.eventData, addressCountry: addressCountry}}
                        }
                        case 'streetAddress': {
                            let streetAddress = store.eventData.streetAddress ? [...store.eventData.streetAddress] : ''
                            streetAddress = payload.value
                            return {...store, eventData: {...store.eventData, streetAddress: streetAddress}}
                        }
                        case 'zipCode': {
                            let zipCode = store.eventData.zipCode ? [...store.eventData.zipCode] : ''
                            zipCode = payload.value
                            return {...store, eventData: {...store.eventData, zipCode: zipCode}}
                        }
                        case 'countryCode': {
                            let countryCode = store.eventData.countryCode ? [...store.eventData.countryCode] : ''
                            countryCode = payload.value
                            return {...store, eventData: {...store.eventData, countryCode: countryCode}}
                        }
                        case 'regionCode': {
                            let regionCode = store.eventData.regionCode ? [...store.eventData.regionCode] : ''
                            regionCode = payload.value
                            return {...store, eventData: {...store.eventData, regionCode: regionCode}}
                        }
                        case 'currencyCode': {
                            let currencyCode = store.eventData.currencyCode ? [...store.eventData.currencyCode] : ''
                            currencyCode = payload.value
                            return {...store, eventData: {...store.eventData, currencyCode: currencyCode}}
                        }
                    }
                }
                case JOB_POSTING_FORM: {
                    switch(payload.id) {
                        case 'title': {
                            let title = store.jobPostingData.title ? [...store.jobPostingData.title] : ''
                            title = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, title: title}}
                        }
                        case 'description': {
                            let description = store.jobPostingData.description ? [...store.jobPostingData.description] : ''
                            description = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, description: description}}
                        }
                        case 'hiringOrganization': {
                            let hiringOrganization = store.jobPostingData.hiringOrganization ? [...store.jobPostingData.hiringOrganization] : ''
                            hiringOrganization = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, hiringOrganization: hiringOrganization}}
                        }
                        case 'hiringOrganizationURL': {
                            let hiringOrganizationURL = store.jobPostingData.hiringOrganizationURL ? [...store.jobPostingData.hiringOrganizationURL] : ''
                            hiringOrganizationURL = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, hiringOrganizationURL: hiringOrganizationURL}}
                        }
                        case 'industry': {
                            let industry = store.jobPostingData.industry ? [...store.jobPostingData.industry] : ''
                            industry = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, industry: industry}}
                        }
                        case 'datePosted': {
                            let datePosted = store.jobPostingData.datePosted ? [...store.jobPostingData.datePosted] : ''
                            datePosted = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, datePosted: datePosted}}
                        }
                        case 'validThrough': {
                            let validThrough = store.jobPostingData.validThrough ? [...store.jobPostingData.validThrough] : ''
                            validThrough = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, validThrough: validThrough}}
                        }
                        case 'isRemote': {
                            let isRemote = {...store.jobPostingData.isRemote}
                            isRemote = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, isRemote: isRemote}}
                        }
                        case 'streetAddress': {
                            let streetAddress = store.jobPostingData.streetAddress ? [...store.jobPostingData.streetAddress] : ''
                            streetAddress = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, streetAddress: streetAddress}}
                        }
                        case 'addressLocality': {
                            let addressLocality = store.jobPostingData.addressLocality ? [...store.jobPostingData.addressLocality] : ''
                            addressLocality = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, addressLocality: addressLocality}}
                        }
                        case 'postalCode': {
                            let postalCode = store.jobPostingData.postalCode ? [...store.jobPostingData.postalCode] : ''
                            postalCode = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, postalCode: postalCode}}
                        }
                        case 'addressCountry': {
                            let addressCountry = store.jobPostingData.addressCountry ? [...store.jobPostingData.addressCountry] : ''
                            addressCountry = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, addressCountry: addressCountry}}
                        }
                        case 'baseSalary': {
                            let baseSalary = store.jobPostingData.baseSalary ? [...store.jobPostingData.baseSalary] : ''
                            baseSalary = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, baseSalary: baseSalary}}
                        }
                        case 'maxSalary': {
                            let maxSalary = store.jobPostingData.maxSalary ? [...store.jobPostingData.maxSalary] : ''
                            maxSalary = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, maxSalary: maxSalary}}
                        }
                        case 'currencyCode': {
                            let currencyCode = store.jobPostingData.currencyCode ? [...store.jobPostingData.currencyCode] : ''
                            currencyCode = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, currencyCode: currencyCode}}
                        }
                        case 'responsibilities': {
                            let responsibilities = store.jobPostingData.responsibilities ? [...store.jobPostingData.responsibilities] : ''
                            responsibilities = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, responsibilities: responsibilities}}
                        }
                        case 'skills': {
                            let skills = store.jobPostingData.skills ? [...store.jobPostingData.skills] : ''
                            skills = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, skills: skills}}
                        }
                        case 'qualifications': {
                            let qualifications = store.jobPostingData.qualifications ? [...store.jobPostingData.qualifications] : ''
                            qualifications = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, qualifications: qualifications}}
                        }
                        case 'educationRequirements': {
                            let educationRequirements = store.jobPostingData.educationRequirements ? [...store.jobPostingData.educationRequirements] : ''
                            educationRequirements = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, educationRequirements: educationRequirements}}
                        }
                        case 'experienceRequirements': {
                            let experienceRequirements = store.jobPostingData.experienceRequirements ? [...store.jobPostingData.experienceRequirements] : ''
                            experienceRequirements = payload.value
                            return {...store, jobPostingData: {...store.jobPostingData, experienceRequirements: experienceRequirements}}
                        }
                    }
                }
                case LOCAL_BUSINESS_FORM: {
                    switch(payload.id) {
                        case 'name': {
                            let name = store.localBusinessData.name ? [...store.localBusinessData.name] : ''
                            name = payload.value
                            return {...store, localBusinessData: {...store.localBusinessData, name: name}}
                        } 
                        case 'url': {
                            let url = store.localBusinessData.url ? [...store.localBusinessData.url] : ''
                            url = payload.value
                            return {...store, localBusinessData: {...store.localBusinessData, url: url}}
                        }
                        case 'telephone': {
                            let telephone = store.localBusinessData.telephone ? [...store.localBusinessData.telephone] : ''
                            telephone = payload.value
                            return {...store, localBusinessData: {...store.localBusinessData, telephone: telephone}}
                        }
                        case 'streetAddress': {
                            let streetAddress = store.localBusinessData.streetAddress ? [...store.localBusinessData.streetAddress] : ''
                            streetAddress = payload.value
                            return {...store, localBusinessData: {...store.localBusinessData, streetAddress: streetAddress}}
                        }
                        case 'addressLocality': {
                            let addressLocality = store.localBusinessData.addressLocality ? [...store.localBusinessData.addressLocality] : ''
                            addressLocality = payload.value
                            return {...store, localBusinessData: {...store.localBusinessData, addressLocality: addressLocality}}
                        }
                        case 'postalCode': {
                            let postalCode = store.localBusinessData.postalCode ? [...store.localBusinessData.postalCode] : ''
                            postalCode = payload.value
                            return {...store, localBusinessData: {...store.localBusinessData, postalCode: postalCode}}
                        }
                        case 'addressCountry': {
                            let addressCountry = store.localBusinessData.addressCountry ? [...store.localBusinessData.addressCountry] : ''
                            addressCountry = payload.value
                            return {...store, localBusinessData: {...store.localBusinessData, addressCountry: addressCountry}}
                        }
                        case 'alwaysOpen': {
                            let openHours = {...store.localBusinessData.openHours}

                            if(payload.value) {
                                openHours.monday = true 
                                openHours.mondayOpen = '00:00'
                                openHours.mondayClose = '23:59'
                                openHours.tuesday = true 
                                openHours.tuesdayOpen = '00:00'
                                openHours.tuesdayClose = '23:59'
                                openHours.wednesday = true 
                                openHours.wednesdayOpen = '00:00'
                                openHours.wednesdayClose = '23:59'
                                openHours.thursday = true 
                                openHours.thursdayOpen = '00:00'
                                openHours.thursdayClose = '23:59'
                                openHours.friday = true 
                                openHours.fridayOpen = '00:00'
                                openHours.fridayClose = '23:59'
                                openHours.saturday = true 
                                openHours.saturdayOpen = '00:00'
                                openHours.saturdayClose = '23:59'
                                openHours.sunday = true 
                                openHours.sundayOpen = '00:00'
                                openHours.sundayClose = '23:59'
                            } else {
                                let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
                                let setNull = openHours => setAll(openHours, null)
                                setNull(openHours)
                            }

                            return {...store, localBusinessData: {...store.localBusinessData, openHours: openHours}}
                        } 
                    }
                }
                case ORGANIZATION_FORM: {
                    switch(payload.id) {
                        case 'name': {
                            let name = store.organizationData.name ? [...store.organizationData.name] : ''
                            name = payload.value
                            return {...store, organizationData: {...store.organizationData, name: name}}
                        }
                        case 'alternateName': {
                            let alternateName = store.organizationData.alternateName ? [...store.organizationData.alternateName] : ''
                            alternateName = payload.value
                            return {...store, organizationData: {...store.organizationData, alternateName: alternateName}}
                        }
                        case 'url': {
                            let url = store.organizationData.url ? [...store.organizationData.url] : ''
                            url = payload.value
                            return {...store, organizationData: {...store.organizationData, url: url}}
                        }
                        case 'logo': {
                            let logo = store.organizationData.logo ? [...store.organizationData.logo] : ''
                            logo = payload.value
                            return {...store, organizationData: {...store.organizationData, logo: logo}}
                        }
                        case 'contactName': {
                            let contactName = store.organizationData.contactName ? [...store.organizationData.contactName] : ''
                            contactName = editDynamicTextbox(contactName, payload)
                            return {...store, organizationData: {...store.organizationData, contactName: contactName}}
                        }
                        case 'contactEmail': {
                            let contactEmail = store.organizationData.contactEmail ? [...store.organizationData.contactEmail] : ''
                            contactEmail = editDynamicTextbox(contactEmail, payload)
                            return {...store, organizationData: {...store.organizationData, contactEmail: contactEmail}}
                        }
                        case 'contactTelephone': {
                            let contactTelephone = store.organizationData.contactTelephone ? [...store.organizationData.contactTelephone] : ''
                            contactTelephone = editDynamicTextbox(contactTelephone, payload)
                            return {...store, organizationData: {...store.organizationData, contactTelephone: contactTelephone}}
                        }
                        case 'contactProductSupported': {
                            let contactProductSupported = store.organizationData.contactProductSupported ? [...store.organizationData.contactProductSupported] : ''
                            contactProductSupported = editDynamicTextbox(contactProductSupported, payload)
                            return {...store, organizationData: {...store.organizationData, contactProductSupported: contactProductSupported}}
                        }
                    }
                }
                case PERSON_FORM: {
                    switch(payload.id) {
                        case 'name': {
                            let name = store.personData.name ? [...store.personData.name] : '' 
                            name = payload.value
                            return {...store, personData: {...store.personData, name: name}}
                        }
                        case 'url': {
                            let url = store.personData.url ? [...store.personData.url] : '' 
                            url = payload.value
                            return {...store, personData: {...store.personData, url: url}}
                        }
                        case 'image': {
                            let image = store.personData.image ? [...store.personData.image] : '' 
                            image = payload.value
                            return {...store, personData: {...store.personData, image: image}}
                        }
                        case 'jobTitle': {
                            let jobTitle = store.personData.jobTitle ? [...store.personData.jobTitle] : '' 
                            jobTitle = payload.value
                            return {...store, personData: {...store.personData, jobTitle: jobTitle}}
                        }
                        case 'worksFor': {
                            let worksFor = store.personData.worksFor ? [...store.personData.worksFor] : '' 
                            worksFor = payload.value
                            return {...store, personData: {...store.personData, worksFor: worksFor}}
                        }
                    }
                }
                case PRODUCT_FORM: {
                    switch(payload.id) {
                        case 'name': {
                            let name = store.productData.name ? [...store.productData.name] : ''
                            name = payload.value 
                            return {...store, productData: {...store.productData, name: name}}
                        }
                        case 'image': {
                            let image = store.productData.image ? [...store.productData.image] : ''
                            image = payload.value 
                            return {...store, productData: {...store.productData, image: image}}
                        }
                        case 'brand': {
                            let brand = store.productData.brand ? [...store.productData.brand] : ''
                            brand = payload.value 
                            return {...store, productData: {...store.productData, brand: brand}}
                        }
                        case 'description': {
                            let description = store.productData.description ? [...store.productData.description] : ''
                            description = payload.value 
                            return {...store, productData: {...store.productData, description: description}}
                        }
                        case 'ratingValue': {
                            let ratingValue = store.productData.ratingValue ? [...store.productData.ratingValue] : ''
                            ratingValue = payload.value 
                            return {...store, productData: {...store.productData, ratingValue: ratingValue}}
                        }
                        case 'ratingCount': {
                            let ratingCount = store.productData.ratingCount ? [...store.productData.ratingCount] : ''
                            ratingCount = payload.value 
                            return {...store, productData: {...store.productData, ratingCount: ratingCount}}
                        }
                        case 'bestRating': {
                            let bestRating = store.productData.bestRating ? [...store.productData.bestRating] : ''
                            bestRating = payload.value 
                            return {...store, productData: {...store.productData, bestRating: bestRating}}
                        }
                        case 'worstRating': {
                            let worstRating = store.productData.worstRating ? [...store.productData.worstRating] : ''
                            worstRating = payload.value 
                            return {...store, productData: {...store.productData, worstRating: worstRating}}
                        }
                        case 'sku': {
                            let sku = store.productData.sku ? [...store.productData.sku] : ''
                            sku = payload.value
                            return {...store, productData: {...store.productData, sku: sku}}
                        }
                        case 'gtin8': {
                            let gtin8 = store.productData.gtin8 ? [...store.productData.gtin8] : '' 
                            gtin8 = payload.value 
                            return {...store, productData: {...store.productData, gtin8: gtin8}}
                        }
                        case 'gtin13': {
                            let gtin13 = store.productData.gtin13 ? [...store.productData.gtin13] : '' 
                            gtin13 = payload.value 
                            return {...store, productData: {...store.productData, gtin13: gtin13}}
                        } 
                        case 'gtin14': {
                            let gtin14 = store.productData.gtin14 ? [...store.productData.gtin14] : '' 
                            gtin14 = payload.value
                            return {...store, productData: {...store.productData, gtin14: gtin14}}
                        }
                        case 'reviewName': {
                            let reviewName = store.productData.reviewName ? [...store.productData.reviewName] : ''
                            reviewName = editDynamicTextbox(reviewName, payload)
                            return {...store, productData: {...store.productData, reviewName: reviewName}}
                        }
                        case 'reviewBody': {
                            let reviewBody = store.productData.reviewBody ? [...store.productData.reviewBody] : ''
                            reviewBody = editDynamicTextbox(reviewBody, payload)
                            return {...store, productData: {...store.productData, reviewBody: reviewBody}}
                        }
                        case 'reviewRating': {
                            let reviewRating = store.productData.reviewRating ? [...store.productData.reviewRating] : ''
                            reviewRating = editDynamicTextbox(reviewRating, payload)
                            return {...store, productData: {...store.productData, reviewRating: reviewRating}}
                        }
                        case 'reviewAuthorName': {
                            let reviewAuthorName = store.productData.reviewAuthorName ? [...store.productData.reviewAuthorName] : ''
                            reviewAuthorName = editDynamicTextbox(reviewAuthorName, payload)
                            return {...store, productData: {...store.productData, reviewAuthorName: reviewAuthorName}}
                        }
                        case 'reviewPublisherName': {
                            let reviewPublisherName = store.productData.reviewPublisherName ? [...store.productData.reviewPublisherName] : ''
                            reviewPublisherName = editDynamicTextbox(reviewPublisherName, payload)
                            return {...store, productData: {...store.productData, reviewPublisherName: reviewPublisherName}}
                        }
                        case 'reviewDate': {
                            let reviewDate = store.productData.reviewDate ? [...store.productData.reviewDate] : ''
                            reviewDate = editDynamicTextbox(reviewDate, payload)
                            return {...store, productData: {...store.productData, reviewDate: reviewDate}}
                        }
                    }
                }
                case RECIPE_FORM: {
                    switch(payload.id) {
                        case 'name': {
                            let name = store.recipeData.name ? [...store.recipeData.name] : ''
                            name = payload.value 
                            return {...store, recipeData: {...store.recipeData, name: name}}
                        }
                        case 'description': {
                            let description = store.recipeData.description ? [...store.recipeData.description] : ''
                            description = payload.value 
                            return {...store, recipeData: {...store.recipeData, description: description}}
                        }
                        case 'keywords': {
                            let keywords = store.recipeData.keywords ? [...store.recipeData.keywords] : ''
                            keywords = payload.value 
                            return {...store, recipeData: {...store.recipeData, keywords: keywords}}
                        }
                        case 'creator': {
                            let creator = store.recipeData.creator ? [...store.recipeData.creator] : ''
                            creator = payload.value 
                            return {...store, recipeData: {...store.recipeData, creator: creator}}
                        }
                        case 'recipeCuisine': {
                            let recipeCuisine = store.recipeData.recipeCuisine ? [...store.recipeData.recipeCuisine] : ''
                            recipeCuisine = payload.value 
                            return {...store, recipeData: {...store.recipeData, recipeCuisine: recipeCuisine}}
                        }
                        case 'recipeYield': {
                            let recipeYield = store.recipeData.recipeYield ? [...store.recipeData.recipeYield] : ''
                            recipeYield = payload.value 
                            return {...store, recipeData: {...store.recipeData, recipeYield: recipeYield}}
                        }
                        case 'cookTime': {
                            let cookTime = store.recipeData.cookTime ? [...store.recipeData.cookTime] : ''
                            cookTime = payload.value 
                            return {...store, recipeData: {...store.recipeData, cookTime: cookTime}}
                        }
                        case 'totalTime': {
                            let totalTime = store.recipeData.totalTime ? [...store.recipeData.totalTime] : ''
                            totalTime = payload.value 
                            return {...store, recipeData: {...store.recipeData, totalTime: totalTime}}
                        }
                        case 'servingSize': {
                            let servingSize = store.recipeData.servingSize ? [...store.recipeData.servingSize] : ''
                            servingSize = payload.value 
                            return {...store, recipeData: {...store.recipeData, servingSize: servingSize}}
                        }
                        case 'calories': {
                            let calories = store.recipeData.calories ? [...store.recipeData.calories] : ''
                            calories = payload.value 
                            return {...store, recipeData: {...store.recipeData, calories: calories}}
                        }
                        case 'fatContent': {
                            let fatContent = store.recipeData.fatContent ? [...store.recipeData.fatContent] : ''
                            fatContent = payload.value 
                            return {...store, recipeData: {...store.recipeData, fatContent: fatContent}}
                        }
                        case 'videoName': {
                            let videoName = store.recipeData.videoName ? [...store.recipeData.videoName] : ''
                            videoName = payload.value 
                            return {...store, recipeData: {...store.recipeData, videoName: videoName}} 
                        }
                        case 'videoDescription': {
                            let videoDescription = store.recipeData.videoDescription ? [...store.recipeData.videoDescription] : ''
                            videoDescription = payload.value 
                            return {...store, recipeData: {...store.recipeData, videoDescription: videoDescription}}
                        }
                        case 'videoThumbnailUrl': {
                            let videoThumbnailUrl = store.recipeData.videoThumbnailUrl ? [...store.recipeData.videoThumbnailUrl] : ''
                            videoThumbnailUrl = payload.value 
                            return {...store, recipeData: {...store.recipeData, videoThumbnailUrl: videoThumbnailUrl}}
                        }
                        case 'datePublished': {
                            let datePublished = store.recipeData.datePublished ? [...store.recipeData.datePublished] : '' 
                            datePublished = payload.value 
                            return {...store, recipeData: {...store.recipeData, datePublished: datePublished}}
                        }
                        case 'contentURL': {
                            let contentURL = store.recipeData.contentURL ? [...store.recipeData.contentURL] : ''
                            contentURL = payload.value 
                            console.log(contentURL)
                            return {...store, recipeData: {...store.recipeData, contentURL: contentURL}}
                        }
                        case 'embedURL': {
                            let embedURL = store.recipeData.embedURL ? [...store.recipeData.embedURL] : ''
                            embedURL = payload.value 
                            return {...store, recipeData: {...store.recipeData, embedURL: embedURL}}
                        }
                        case 'datePublished': {
                            let datePublished = store.recipeData.datePublished ? [...store.recipeData.datePublished] : ''
                            datePublished = payload.value 
                            return {...store, recipeData: {...store.recipeData, datePublished: datePublished}}
                        }
                        case 'ratingValue': {
                            let ratingValue = store.recipeData.ratingValue ? [...store.recipeData.ratingValue] : ''
                            ratingValue = payload.value 
                            return {...store, recipeData: {...store.recipeData, ratingValue: ratingValue}}
                        }
                        case 'ratingCount': {
                            let ratingCount = store.recipeData.ratingCount ? [...store.recipeData.ratingCount] : ''
                            ratingCount = payload.value 
                            return {...store, recipeData: {...store.recipeData, ratingCount: ratingCount}}
                        }
                        case 'bestRating': {
                            let bestRating = store.recipeData.bestRating ? [...store.recipeData.bestRating] : ''
                            bestRating = payload.value 
                            return {...store, recipeData: {...store.recipeData, bestRating: bestRating}}
                        }
                        case 'worstRating': {
                            let worstRating = store.recipeData.worstRating ? [...store.recipeData.worstRating] : ''
                            worstRating = payload.value 
                            return {...store, recipeData: {...store.recipeData, worstRating: worstRating}}
                        }
                        case 'reviewName': {
                            let reviewName = store.recipeData.reviewName ? [...store.recipeData.reviewName] : ''
                            reviewName = editDynamicTextbox(reviewName, payload)
                            console.log(reviewName)
                            return {...store, recipeData: {...store.recipeData, reviewName: reviewName}}
                        }
                        case 'reviewBody': {
                            let reviewBody = store.recipeData.reviewBody ? [...store.recipeData.reviewBody] : ''
                            reviewBody = editDynamicTextbox(reviewBody, payload)
                            return {...store, recipeData: {...store.recipeData, reviewBody: reviewBody}}
                        }
                        case 'reviewRating': {
                            let reviewRating = store.recipeData.reviewRating ? [...store.recipeData.reviewRating] : ''
                            reviewRating = editDynamicTextbox(reviewRating, payload)
                            return {...store, recipeData: {...store.recipeData, reviewRating: reviewRating}}
                        }
                        case 'reviewAuthorName': {
                            let reviewAuthorName = store.recipeData.reviewAuthorName ? [...store.recipeData.reviewAuthorName] : ''
                            reviewAuthorName = editDynamicTextbox(reviewAuthorName, payload)
                            return {...store, recipeData: {...store.recipeData, reviewAuthorName: reviewAuthorName}}
                        }
                        case 'reviewPublisherName': {
                            let reviewPublisherName = store.recipeData.reviewPublisherName ? [...store.recipeData.reviewPublisherName] : ''
                            reviewPublisherName = editDynamicTextbox(reviewPublisherName, payload)
                            return {...store, recipeData: {...store.recipeData, reviewPublisherName: reviewPublisherName}}
                        }
                        case 'reviewDate': {
                            let reviewDate = store.recipeData.reviewDate ? [...store.recipeData.reviewDate] : ''
                            reviewDate = editDynamicTextbox(reviewDate, payload)
                            return {...store, recipeData: {...store.recipeData, reviewDate: reviewDate}}
                        }
                    }
                }
                case VIDEO_FORM: {
                    switch(payload.id) {
                        case 'name': {
                            let name = store.videoData.name ? [...store.videoData.name] : ''
                            name = payload.value 
                            return {...store, videoData: {...store.videoData, name: name}}
                        }
                        case 'description': {
                            let description = store.videoData.description ? [...store.videoData.description] : ''
                            description = payload.value 
                            return {...store, videoData: {...store.videoData, description: description}}
                        }
                        case 'uploadDate': {
                            let uploadDate = store.videoData.uploadDate ? [...store.videoData.uploadDate] : ''
                            uploadDate = payload.value 
                            return {...store, videoData: {...store.videoData, uploadDate: uploadDate}}
                        }
                        case 'durationMinutes': {
                            let durationMinutes = store.videoData.durationMinutes ? [...store.videoData.durationMinutes] : ''
                            durationMinutes = payload.value 
                            return {...store, videoData: {...store.videoData, durationMinutes: durationMinutes}}
                        }
                        case 'durationSeconds': {
                            let durationSeconds = store.videoData.durationSeconds ? [...store.videoData.durationSeconds] : ''
                            durationSeconds = payload.value 
                            return {...store, videoData: {...store.videoData, durationSeconds: durationSeconds}}
                        }
                        case 'contentURL': {
                            let contentURL = store.videoData.contentURL ? [...store.videoData.contentURL] : ''
                            contentURL = payload.value 
                            return {...store, videoData: {...store.videoData, contentURL: contentURL}}
                        }
                        case 'embedURL': {
                            let embedURL = store.videoData.embedURL ? [...store.videoData.embedURL] : ''
                            embedURL = payload.value 
                            return {...store, videoData: {...store.videoData, embedURL: embedURL}}
                        }
                        case 'publisherName': {
                            let publisherName = store.videoData.publisherName ? [...store.videoData.publisherName] : ''
                            publisherName = payload.value 
                            return {...store, videoData: {...store.videoData, publisherName: publisherName}}
                        }
                        case 'publisherLogoURL': {
                            let publisherLogoURL = store.videoData.publisherLogoURL ? [...store.videoData.publisherLogoURL] : ''
                            publisherLogoURL = payload.value 
                            return {...store, videoData: {...store.videoData, publisherLogoURL: publisherLogoURL}}
                        }
                        case 'publisherLogoWidth': {
                            let publisherLogoWidth = store.videoData.publisherLogoWidth ? [...store.videoData.publisherLogoWidth] : ''
                            publisherLogoWidth = payload.value 
                            return {...store, videoData: {...store.videoData, publisherLogoWidth: publisherLogoWidth}}
                        }
                        case 'publisherLogoHeight': {
                            let publisherLogoHeight = store.videoData.publisherLogoHeight ? [...store.videoData.publisherLogoHeight] : ''
                            publisherLogoHeight = payload.value 
                            return {...store, videoData: {...store.videoData, publisherLogoHeight: publisherLogoHeight}}
                        }
                    }
                }
                case WEBSITE_FORM: {
                    switch(payload.id) {
                        case 'name': {
                            let name = store.websiteData.name ? [...store.websiteData.name] : ''
                            name = payload.value 
                            return {...store, websiteData: {...store.websiteData, name: name}}
                        }
                        case 'url': {
                            let url = store.websiteData.url ? [...store.websiteData.url] : ''
                            url = payload.value 
                            return {...store, websiteData: {...store.websiteData, url: url}}
                        }
                        case 'target': {
                            let target = store.websiteData.target ? [...store.websiteData.target] : ''
                            target = payload.value 
                            return {...store, websiteData: {...store.websiteData, target: target}}
                        }
                    }
                }
            }
        }
        case UPDATE_DROPDOWN: {
            switch(payload.form) {
                case APP: {
                    switch(payload.id) {
                        case termDropdown: {
                            console.log(payload.value)
                            let termDropdown = {...store.termDropdown}
                            termDropdown = payload.value 
                            let typeDropdown = {...store.typeDropdown}
                            typeDropdown = null 
                            return {...store, termDropdown: termDropdown, typeDropdown: typeDropdown}
                        }
                    }
                }
                case DYNAMIC_FORM: {
                    switch(payload.id) {
                        case typeDropdown: {
                            let typeDropdown = {...store.typeDropdown}
                            typeDropdown = payload.value
                            return { ...store, typeDropdown: typeDropdown}
                        }
                    }
                }
                case ARTICLE_FORM: {
                    switch(payload.id) {
                        case authorTypeDropdown: {
                            let authorTypeDropdown = {...store.articleData.authorType}
                            authorTypeDropdown = payload.value
                            return { ...store, articleData: { ...store.articleData, authorType: authorTypeDropdown }}
                        }
                    }
                }
                case EVENT_FORM: {
                    switch(payload.id) {
                        case performerTypeDropdown: {
                            let performerTypeDropdown = {...store.eventData.performerType}
                            performerTypeDropdown = payload.value 
                            return {...store, eventData: {...store.eventData, performerType: performerTypeDropdown}}
                        }
                    }
                }
                case JOB_POSTING_FORM: {
                    switch(payload.id) {
                        case employmentTypeDropdown: {
                            let employmentType = {...store.jobPostingData.employmentType}
                            employmentType = payload.value; 
                            return { ...store, jobPostingData: { ...store.jobPostingData, employmentType: employmentType}}
                        }
                        case paymentRateDropdown: {
                            let paymentRate = {...store.jobPostingData.paymentRate}
                            paymentRate = payload.value 
                            return { ...store, jobPostingData: { ...store.jobPostingData, unitText: paymentRate}}
                        }
                    }
                }
                case PRODUCT_FORM: {
                    switch(payload.id) {
                        case offerDropdown: {
                            let offerType = {...store.productData.offerType}
                            offerType = payload.value
                            return { ...store, productData: { ...store.productData, offerType: offerType }}
                        }
                    }
                }
                case ORGANIZATION_FORM: {
                    switch(payload.id) {
                        case contactTypeDropdown: {
                            let contactTypes = [...store.organizationData.contactType]
                            contactTypes = editDynamicDropdown(contactTypes, payload)
                            console.log(contactTypes)
                            return { ...store, organizationData: { ...store.organizationData, contactType: contactTypes }}
                        }
                    }
                }
                case RECIPE_FORM: {
                    switch(payload.id) {
                        case recipeCategoryDropdown: {
                            console.log(payload.value)
                            let recipeCategory = {...store.recipeData.recipeCategory}
                            recipeCategory = payload.value
                            return { ...store, recipeData: { ...store.recipeData, recipeCategory: recipeCategory}}
                        }
                    }
                }
                default: {
                    return {...store}
                }
            } 
        }
        case UPDATE_URL_LINKS: {
            switch(payload.form) {
                case ARTICLE_FORM: {
                    switch(payload.id) {
                        case articleImageLinks: {
                            let articleImages = store.articleData.image.length ? [...store.articleData.image] : []
                            
                            articleImages = editURL(articleImages, payload)
                            return {...store, articleData: {...store.articleData, image: articleImages}}
                        }
                    }
                }
                case EVENT_FORM: {
                    switch(payload.id) {
                        case eventImageLinks: {
                            let eventImages = store.eventData.image.length ? [...store.eventData.image] : []
        
                            eventImages = editURL(eventImages, payload)
                            return {...store, eventData: {...store.eventData, image: eventImages}}
                        }
                    }
                }
                case LOCAL_BUSINESS_FORM: {
                    switch(payload.id) {
                        case localBusinessImageLinks: {
                            let localBusinessImages = store.localBusinessData.image.length ?  [...store.localBusinessData.image] : []

                            localBusinessImages = editURL(localBusinessImages, payload)
                            return {...store, localBusinessData: {...store.localBusinessData, image: localBusinessImages}}
                            
                        }
                        case localBusinessSocialProfileLinks: {
                            let localBusinessSocialProfiles = store.localBusinessData.sameAs.length ? [...store.localBusinessData.sameAs] : []

                            localBusinessSocialProfiles = editURL(localBusinessSocialProfiles, payload)
                            return {...store, localBusinessData: {...store.localBusinessData, sameAs: localBusinessSocialProfiles}}
                        }
                    }
                }
                case ORGANIZATION_FORM: {
                    switch(payload.id) {
                        case organizationSocialProfileLinks: {
                            let organizationSocialProfiles = store.organizationData.sameAs.length ? [...store.organizationData.sameAs] : []
                            
                            organizationSocialProfiles = editURL(organizationSocialProfiles, payload)
                            return {...store, organizationData: {...store.organizationData, sameAs: organizationSocialProfiles}}
                        }
                    }
                }
                case PERSON_FORM: {
                    switch(payload.id) {
                        case personSocialProfileLinks: {
                            let personSocialProfiles = store.personData.sameAs.length ? [...store.personData.sameAs] : []
                            
                            personSocialProfiles = editURL(personSocialProfiles, payload)
                            return {...store, personData: {...store.personData, sameAs: personSocialProfiles}}
                        }
                    }
                }
                case RECIPE_FORM: {
                    switch(payload.id) {
                        case recipeImageLinks: {
                            let recipeImageLinks = store.recipeData.image.length ? [...store.recipeData.image] : []

                            recipeImageLinks = editURL(recipeImageLinks, payload)
                            return {...store, recipeData: {...store.recipeData, image: recipeImageLinks}}
                        }
                        case recipeSteps: {
                            let recipeSteps = store.recipeData.recipeInstructions.length ? [...store.recipeData.recipeInstructions] : []

                            recipeSteps = editURL(recipeSteps, payload)
                            return {...store, recipeData: {...store.recipeData, recipeInstructions: recipeSteps}}
                        }
                        case recipeIngredients: {
                            let recipeIngredients = store.recipeData.recipeIngredient.length ? [...store.recipeData.recipeIngredient] : []

                            recipeIngredients = editURL(recipeIngredients, payload)
                            return {...store, recipeData: {...store.recipeData, recipeIngredient: recipeIngredients}}
                        }

                    }
                }
                case VIDEO_FORM: {
                    switch(payload.id) {
                        case videoThumbnailURLLinks: {
                            let videoThumbnailURLs = store.videoData.thumbnailUrl.length ? [...store.videoData.thumbnailUrl] : []
                            videoThumbnailURLs = editURL(videoThumbnailURLs, payload)
                            console.log(videoThumbnailURLs)
                            return {...store, videoData: {...store.videoData, thumbnailUrl: videoThumbnailURLs}}
                        }
                    }
                }
            }
        }
        case UPDATE_DYNAMIC_SECTION: {
            switch(payload.form) {
                case ORGANIZATION_FORM: {
                    switch(payload.type) {
                        case contactSection: {
                            //edit the drop down
                            let contactTypeDropdowns = store.organizationData.contactType.length ? [...store.organizationData.contactType] : []
                            let dropdownPayload = {dropdown: 'contactTypeDropdown', dropdownValue: '', dropdownAction: payload.action, dropdownId: payload.id}
                            contactTypeDropdowns = editDynamicDropdown(contactTypeDropdowns, dropdownPayload)
                            //edit the check boxes
                            let languageCheckBoxes = store.organizationData.availableLanguage.length ? [...store.organizationData.availableLanguage] : []
                            let checkBoxesPayload = { action: payload.action, id: payload.id }
                            languageCheckBoxes = editScrollableCheckBoxes(languageCheckBoxes, checkBoxesPayload)
                            let areasCheckBoxes = store.organizationData.areaServed.length ? [...store.organizationData.areaServed] : []
                            areasCheckBoxes = editScrollableCheckBoxes(areasCheckBoxes, checkBoxesPayload)
                            //edit the textboxes
                            let contactName = store.organizationData.contactName ? [...store.organizationData.contactName] : ''
                            let textboxPayload = { action: payload.action, sectionId: payload.id }
                            contactName = editDynamicTextbox(contactName, textboxPayload)
                            console.log(contactName)
                            let contactTelephone = store.organizationData.contactTelephone ? [...store.organizationData.contactTelephone] : ''
                            contactTelephone = editDynamicTextbox(contactTelephone, textboxPayload)
                            let contactEmail = store.organizationData.contactEmail ? [...store.organizationData.contactEmail] : ''
                            contactEmail = editDynamicTextbox(contactEmail, textboxPayload)
                            let contactProductSupported = store.organizationData.contactProductSupported ? [...store.organizationData.contactProductSupported] : ''
                            contactProductSupported = editDynamicTextbox(contactProductSupported, textboxPayload)

                            //edit the section
                            let contactSections = store.organizationData.contactSections.length ? [...store.organizationData.contactSections] : []
                            contactSections = editDynamicSection(contactSections, payload)

                            return {...store, organizationData: {...store.organizationData, contactSections: contactSections, contactType: contactTypeDropdowns, contactName: contactName, contactTelephone: contactTelephone, contactEmail: contactEmail, contactProductSupported: contactProductSupported, areaServed: areasCheckBoxes, availableLanguage: languageCheckBoxes}}
                        }
                    }
                }
                case PRODUCT_FORM: {
                    switch(payload.type) {
                        case productReviewSection: {
                            //update section
                            let productReviewSections = store.productData.productReviewSection.length ? [...store.productData.productReviewSection] : []
                            productReviewSections = editDynamicSection(productReviewSections, payload)
                            //update textboxes
                            let textboxPayload = {action: payload.action, sectionId: payload.id}
                            let reviewName = store.productData.reviewName ? [...store.productData.reviewName] : []
                            reviewName = editDynamicTextbox(reviewName, textboxPayload)
                            let reviewBody = store.productData.reviewBody ? [...store.productData.reviewBody] : []
                            reviewBody = editDynamicTextbox(reviewBody, textboxPayload)
                            let reviewRating = store.productData.reviewRating ? [...store.productData.reviewRating] : []
                            reviewRating = editDynamicTextbox(reviewRating, textboxPayload)
                            let reviewAuthorName = store.productData.reviewAuthorName ? [...store.productData.reviewAuthorName] : []
                            reviewAuthorName = editDynamicTextbox(reviewAuthorName, textboxPayload)
                            let reviewPublisherName = store.productData.reviewPublisherName ? [...store.productData.reviewPublisherName] : []
                            reviewPublisherName = editDynamicTextbox(reviewPublisherName, textboxPayload)
                            let reviewDate = store.productData.reviewDate ? [...store.productData.reviewDate] : []
                            reviewDate = editDynamicTextbox(reviewDate, textboxPayload)
                            return {...store, productData: {...store.productData, productReviewSection: productReviewSections, reviewName: reviewName, reviewBody: reviewBody, reviewRating: reviewRating, reviewAuthorName: reviewAuthorName, reviewPublisherName: reviewPublisherName, reviewDate: reviewDate}}
                        }
                    }
                }
                case RECIPE_FORM: {
                    switch(payload.type) {
                        case recipeReviewSection: {
                            let recipeReviewSections = store.recipeData.recipeReviewSections.length ? [...store.recipeData.recipeReviewSections] : []
                            recipeReviewSections = editDynamicSection(recipeReviewSections, payload)
                            //update textboxes
                            let textboxPayload = {action: payload.action, sectionId: payload.id}
                            let reviewName = store.recipeData.reviewName ? [...store.recipeData.reviewName] : []
                            reviewName = editDynamicTextbox(reviewName, textboxPayload)
                            let reviewBody = store.recipeData.reviewBody ? [...store.recipeData.reviewBody] : []
                            reviewBody = editDynamicTextbox(reviewBody, textboxPayload)
                            let reviewRating = store.recipeData.reviewRating ? [...store.recipeData.reviewRating] : []
                            reviewRating = editDynamicTextbox(reviewRating, textboxPayload)
                            let reviewAuthorName = store.recipeData.reviewAuthorName ? [...store.recipeData.reviewAuthorName] : []
                            reviewAuthorName = editDynamicTextbox(reviewAuthorName, textboxPayload)
                            let reviewPublisherName = store.recipeData.reviewPublisherName ? [...store.recipeData.reviewPublisherName] : []
                            reviewPublisherName = editDynamicTextbox(reviewPublisherName, textboxPayload)
                            let reviewDate = store.recipeData.reviewDate ? [...store.recipeData.reviewDate] : []
                            reviewDate = editDynamicTextbox(reviewDate, textboxPayload)
                            console.log('im here')
                            return {...store, recipeData: {...store.recipeData, recipeReviewSections: recipeReviewSections, reviewName: reviewName, reviewBody: reviewBody, reviewRating: reviewRating, reviewAuthorName: reviewAuthorName, reviewPublisherName: reviewPublisherName, reviewDate: reviewDate}}
                        }
                    }
                }    
            }
        }
        case UPDATE_SCROLLABLE_CHECK_BOXES: {
            switch(payload.form) {
                case ORGANIZATION_FORM: {
                    switch(payload.type) {
                        case languagesScrollableCheckBoxes: {
                            let languageCheckBoxes = store.organizationData.availableLanguage ? [...store.organizationData.availableLanguage] : []
                            languageCheckBoxes = editScrollableCheckBoxes(languageCheckBoxes, payload)

                            return {...store, organizationData: {...store.organizationData, availableLanguage: languageCheckBoxes}}
                        }
                        case areasScrollableCheckBoxes: {
                            let areaCheckBoxes = store.organizationData.areaServed ? [...store.organizationData.areaServed] : []
                            areaCheckBoxes = editScrollableCheckBoxes(areaCheckBoxes, payload)

                            return {...store, organizationData: {...store.organizationData, areaServed: areaCheckBoxes}}
                        }
                    }
                }
            }
        }
        case UPDATE_QA_SECTIONS: {
            let qaSections = store.faqData.qaSection.length ? [...store.faqData.qaSection] : []; 

            switch(payload.action) {
                case "UpdateQuestion": {
                    for(var i = 0; i < qaSections.length; i++) {
                        if(qaSections[i].id === payload.id) {
                            qaSections[i].question = payload.question 
                            break;
                        }
                    }
                    return {...store, faqData: {...store.faqData, qaSection: qaSections}}
                }
                case "UpdateAnswer": {
                    for(var i = 0; i < qaSections.length; i++) {
                        if(qaSections[i].id === payload.id) {
                            qaSections[i].answer = payload.answer 
                            break;
                        }
                    }
                    return {...store, faqData: {...store.faqData, qaSection: qaSections}}
                }
                case "Add": {
                    if(qaSections.length === 0) {
                        qaSections.push({id: 1, question: '', answer: ''})
                    } else {
                        let qaItem = {id: qaSections.length + 1, question: '', answer: ''}
                        qaSections.push(qaItem)
                    }
                    return {...store, faqData: {...store.faqData, qaSection: qaSections}}
                }
                case "Delete": {
                    for(var i = 0 ; i < qaSections.length; i++) {
                        if(qaSections[i].id === payload.id) {
                            qaSections.splice(i, 1); 
                            break; 
                        }
                    }
                    for(var i = 0; i < qaSections.length; i++) {
                        qaSections[i].id = i + 1; 
                    }
                    return {...store, faqData: {...store.faqData, qaSection: qaSections}}
                }
            }            
        }
        case UPDATE_OPEN_HOURS: {
            switch(payload.form) {
                case LOCAL_BUSINESS_FORM: {
                    switch(payload.openHoursId) {
                        case localBusinessOpenHours: {
                            let openHours = {...store.localBusinessData.openHours} 
                            openHours = updateOpenHours(openHours, payload)     

                            return {...store, localBusinessData: {...store.localBusinessData, openHours: openHours}}
                        }
                    }
                }
            }
        }
        default: {
            return {...store}; 
        }
    }
}

//function constants
const UPDATE_TEXTBOX = 'UPDATE_TEXTBOX'
const UPDATE_DROPDOWN = "UPDATE_DROPDOWN"
const UPDATE_URL_LINKS = "UPDATE_URL_LINKS" 
const UPDATE_DYNAMIC_SECTION = 'UPDATE_DYNAMIC_SECTION'
const UPDATE_SCROLLABLE_CHECK_BOXES = 'UPDATE_SCROLLABLE_CHECK_BOXES'
const UPDATE_QA_SECTIONS = "UPDATE_QA_SECTIONS" 
const UPDATE_OPEN_HOURS = "UPDATE_OPEN_HOURS"


//Form Constants
const ARTICLE_FORM = 'ARTICLE_FORM'
const APP = 'APP'
const DYNAMIC_FORM = 'DYNAMIC_FORM'
const EVENT_FORM = 'EVENT_FORM'
const JOB_POSTING_FORM = 'JOB_POSTING_FORM'
const LOCAL_BUSINESS_FORM = 'LOCAL_BUSINESS_FORM'
const ORGANIZATION_FORM = 'ORGANIZATION_FORM'
const PERSON_FORM = 'PERSON_FORM'
const PRODUCT_FORM  = 'PRODUCT_FORM'
const RECIPE_FORM = 'RECIPE_FORM'
const VIDEO_FORM = 'VIDEO_FORM'
const WEBSITE_FORM = 'WEBSITE_FORM'

//dropdowns
const termDropdown = 'termDropdown' 
const typeDropdown = 'typeDropdown' 
const authorTypeDropdown = 'authorTypeDropdown'
const employmentTypeDropdown = 'employmentTypeDropdown' 
const paymentRateDropdown = 'paymentRateDropdown'
const offerDropdown = 'offerDropdown'
const recipeCategoryDropdown = 'recipeCategoryDropdown'
const performerTypeDropdown = 'performerTypeDropdown'

//links
const articleImageLinks = 'articleImageLinks'
const eventImageLinks = 'eventImageLinks'
const localBusinessImageLinks = 'localBusinessImageLinks'
const localBusinessSocialProfileLinks = 'localBusinessSocialProfileLinks'
const organizationSocialProfileLinks = 'organizationSocialProfileLinks'
const personSocialProfileLinks = 'personSocialProfileLinks'
const recipeImageLinks = 'recipeImageLinks'
const recipeSteps = 'recipeSteps'
const recipeIngredients = 'recipeIngredients'
const videoThumbnailURLLinks = 'videoThumbnailURLLinks'

//open hour specifications 
const localBusinessOpenHours = 'localBusinessOpenHours'

//sections
const contactSection = 'contactSection'
const productReviewSection = 'productReviewSection'
const recipeReviewSection = 'recipeReviewSection'

//dynamic dropdown
const contactTypeDropdown = 'contactTypeDropdown'; 

//scrollable check boxes
const languagesScrollableCheckBoxes = 'languagesScrollableCheckBoxes'
const areasScrollableCheckBoxes = 'areasScrollableCheckBoxes'



//update functions 
export const onTextboxUpdate = (id, value, form, sectionId = null, action = null) => {
    return {
        type: UPDATE_TEXTBOX, 
        payload: {id: id, value: value, form: form, sectionId: sectionId, action: action} 
    }
}

export const onOpenHoursUpdate = (openHoursId, textboxId, value, action, form) => {
    return {
        type: UPDATE_OPEN_HOURS, 
        payload: {openHoursId: openHoursId, textboxId: textboxId, value: value, action: action, form: form}
    }
}


export const updateDropdown = (dropdownId, dropdownVal, form, dropdownAction = '', sectionId = '') => {
    return {
        type: UPDATE_DROPDOWN, 
        payload: {id: dropdownId, value: dropdownVal, form: form, dropdownAction: dropdownAction, sectionId: sectionId}
    }
}

export const updateURLLink = (id, linkId, form, url, action) => 
{
    return {
        type: UPDATE_URL_LINKS, 
        payload: {id: id, linkId: linkId, form: form, url: url, action: action} 
    }
}

export const updateDynamicSection = (sectionId, sectionType, form, sectionAction) => {
    return {
        type: UPDATE_DYNAMIC_SECTION,
        payload: {id: sectionId, type: sectionType, form: form, action: sectionAction}
    }
}

export const updateScrollableCheckBoxes = (scrollableCheckBoxesType, scrollableCheckBoxesId, form, checkBoxCode, scrollableCheckBoxesAction) => {
    return {
        type: UPDATE_SCROLLABLE_CHECK_BOXES, 
        payload: { type: scrollableCheckBoxesType, id: scrollableCheckBoxesId, form: form, action: scrollableCheckBoxesAction, code: checkBoxCode }
    }
}

export const updateQASections = (id, question, answer, action) => 
{
    return {
        type: UPDATE_QA_SECTIONS, 
        payload: {id: id, question: question, answer: answer, action: action}
    }
}  

