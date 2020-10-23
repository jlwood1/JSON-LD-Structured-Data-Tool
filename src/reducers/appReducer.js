import {editURL} from './helpers/editURL'
import {editDynamicDropdown} from './helpers/editDynamicDropdowns'

const initialStore = {
    termDropdown: null,
    typeDropdown: null,
    authorDropdown: null,
    employmentTypeDropdown: null,
    paymentRateDropdown: null,
    contactTypeDropdowns: [], 
    contactSections: [], 
    articleImageLinks: [],
    eventImageLinks: [], 
    localBusinessImageLinks: [],
    localBusinessSocialProfileLinks: [], 
    organizationSocialProfileLinks: [],
    qaSections: null, 
}

//reducer
export default function appReducer(store = initialStore, action) {
    const {type, payload} = action; 

    switch(type) {
        case UPDATE_DROPDOWN: {
            switch(payload.dropdown) {
                case termDropdown: {
                    let termDropdown = {...store.termDropdown}
                    termDropdown = payload.dropdownValue;
                    let typeDropdown = {...store.typeDropdown}
                    typeDropdown = null 
                    return { ...store, termDropdown: termDropdown, typeDropdown: typeDropdown}
                }
                case typeDropdown: {
                    let typeDropdown = {...store.typeDropdown}
                    typeDropdown = payload.dropdownValue
                    return { ...store, typeDropdown: typeDropdown}
                }
                case authorDropdown: {
                    let authorDropdown = {...store.authorDropdown}
                    authorDropdown = payload.dropdownValue
                    return { ...store, authorDropdown: authorDropdown}
                }
                case employmentTypeDropdown: {
                    let employmentTypeDropdown = {...store.employmentTypeDropdown}
                    employmentTypeDropdown = payload.dropdownValue
                    return {...store, employmentTypeDropdown: employmentTypeDropdown}
                }
                case paymentRateDropdown: {
                    let paymentRateDropdown = {...store.paymentRateDropdown}
                    paymentRateDropdown = payload.dropdownValue 
                    return {...store, paymentRateDropdown: paymentRateDropdown}
                }
                default: {
                    return {...store} 
                }
            }
        }
        case UPDATE_DYNAMIC_DROPDOWN: {
            switch(payload.dropdown) {
                 case contactTypeDropdown: {
                    let dynamicDropdowns = store.contactTypeDropdowns && store.contactTypeDropdowns.length ? [...store.contactTypeDropdowns] : []          
                    dynamicDropdowns = editDynamicDropdown(dynamicDropdowns, payload)
                    return {...store, contactTypeDropdowns: dynamicDropdowns}
                }
            }
        }
        case UPDATE_DYNAMIC_SECTION: {
            switch(payload.type) {
                case contactSection: {
                    let contactTypeDropdowns = store.contactTypeDropdowns && store.contactTypeDropdowns.length? [...store.contactTypeDropdowns] : []
                    let dropdownPayload = {dropdown: 'contactTypeDropdown', dropdownValue: '', dropdownAction: 'Add', dropdownId: payload.sectionId}
                    contactTypeDropdowns = editDynamicDropdown(contactTypeDropdowns, dropdownPayload)
                    let contactSections = store.contactSections && store.contactSections.length ? [...store.contactSections] : []
                    
                }
            }
        }
        case UPDATE_URL_LINKS: {
            let links = []
            switch(payload.id) {
                case articleImageLinks: {
                    if(store.articleImageLinks && store.articleImageLinks.length > 0)
                        links = [...store.articleImageLinks]

                    links = editURL(links, payload)
                    return {...store, articleImageLinks: links}
                }
                case eventImageLinks: {
                    if(store.eventImageLinks && store.eventImageLinks.length > 0)
                        links = [...store.eventImageLinks]

                    links = editURL(links, payload)
                    return {...store, eventImageLinks: links}
                }
                case localBusinessImageLinks: {
                    if(store.localBusinessImageLinks && store.localBusinessImageLinks.length > 0)
                        links = [...store.localBusinessImageLinks]

                    links = editURL(links, payload)
                    return {...store, localBusinessImageLinks: links}
                }
                case localBusinessSocialProfileLinks: {
                    if(store.localBusinessSocialProfileLinks && store.localBusinessSocialProfileLinks.length > 0)
                        links = [...store.localBusinessSocialProfileLinks]

                    links = editURL(links, payload)
                    return {...store, localBusinessSocialProfileLinks: links}
                }
                case organizationSocialProfileLinks: {
                    if(store.organizationSocialProfileLinks && store.organizationSocialProfileLinks.length > 0)
                        links = [...store.organizationSocialProfileLinks]

                    links = editURL(links, payload)
                    return {...store, organizationSocialProfileLinks: links}
                }
            }
        }
        case UPDATE_QA_SECTIONS: {
            let qaSections = []; 
            if(store.qaSections) {
                qaSections = [...store.qaSections]
            }
            switch(payload.action) {
                case "UpdateQuestion": {
                    for(var i = 0; i < qaSections.length; i++) {
                        if(qaSections[i].id === payload.id) {
                            qaSections[i].question = payload.question 
                            break;
                        }
                    }
                    return {...store, qaSections: qaSections}
                }
                case "UpdateAnswer": {
                    for(var i = 0; i < qaSections.length; i++) {
                        if(qaSections[i].id === payload.id) {
                            qaSections[i].answer = payload.answer 
                            break;
                        }
                    }
                    return {...store, qaSections: qaSections}
                }
                case "Add": {
                    if(qaSections.length === 0) {
                        qaSections.push({id: 1, question: '', answer: ''})
                    } else {
                        let qaItem = {id: qaSections.length + 1, question: '', answer: ''}
                        qaSections.push(qaItem)
                    }
                    return {...store, qaSections: qaSections}
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
                    return {...store, qaSections: qaSections}
                }
            }
        }
        default: {
            return {...store}
        }
    }
}

//functions
const UPDATE_DROPDOWN = "DROPDOWN_ON"; 
const UPDATE_URL_LINKS = "UPDATE_URL_LINKS"; 
const UPDATE_QA_SECTIONS = "UPDATE_QA_SECTIONS"; 
const UPDATE_DYNAMIC_DROPDOWN = 'UPDATE_DYNAMIC_DROPDOWN';
const UPDATE_DYNAMIC_SECTION = 'UPDATE_DYNAMIC_SECTION';

//links
const articleImageLinks = 'articleImageLinks'
const eventImageLinks = 'eventImageLinks'
const localBusinessImageLinks = 'localBusinessImageLinks'
const localBusinessSocialProfileLinks = 'localBusinessSocialProfileLinks'
const organizationSocialProfileLinks = 'organizationSocialProfileLinks'

//dropdowns
const termDropdown = 'termDropdown'; 
const typeDropdown = 'typeDropdown'; 
const authorDropdown = 'authorDropdown'; 
const employmentTypeDropdown = 'employmentTypeDropdown'; 
const paymentRateDropdown = 'paymentRateDropdown'; 

//sections
const contactSection = 'contactSection'

//dynamic dropdown
const contactTypeDropdown = 'contactTypeDropdown'; 


export const updateQASections = (id, question, answer, action) => 
{
    return {
        type: UPDATE_QA_SECTIONS, 
        payload: {id: id, question: question, answer: answer, action: action}
    }
}   

export const updateDropdown = (dropdown, dropdownVal) => {

    return {
        type: UPDATE_DROPDOWN, 
        payload: {dropdown: dropdown, dropdownValue: dropdownVal} 
    }
}

export const updateDynamicDropdown = (dropdown, dropdownVal, dropdownId, dropdownAction) => {
    return {
        type: UPDATE_DYNAMIC_DROPDOWN, 
        payload: {dropdown: dropdown, dropdownValue: dropdownVal, dropdownId: dropdownId, dropdownAction: dropdownAction}
    }
}

export const updateURLLink = (id, linkId, url, action) => 
{
    return {
        type: UPDATE_URL_LINKS, 
        payload: {id: id, linkId: linkId, url: url, action: action} 
    }
}

export const updateDynamicSection = (sectionId, sectionType) => {
    return {
        type: UPDATE_DYNAMIC_SECTION,
        payload: {id: sectionId, type: sectionType}
    }
}