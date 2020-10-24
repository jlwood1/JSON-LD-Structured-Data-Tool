import {editURL} from './helpers/editURL'
import {editDynamicDropdown} from './helpers/editDynamicDropdowns'
import {editDynamicSection} from './helpers/editDynamicSection'
import { editScrollableCheckBoxes } from './helpers/editScrollableCheckBoxes';

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
    languagesScrollableCheckBoxes: [],
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
                case contactTypeDropdown: {
                    let contactTypeDropdown = store.contactTypeDropdowns && store.contactTypeDropdowns.length ? [...store.contactTypeDropdowns] : []          
                    contactTypeDropdown = editDynamicDropdown(contactTypeDropdown, payload)
                    return { ...store, contactTypeDropdowns: contactTypeDropdown }
                }
                default: {
                    return {...store} 
                }
            }
        }
        case UPDATE_DYNAMIC_SECTION: {
            switch(payload.type) {
                case contactSection: {
                    if(payload.action === 'Add') {
                        let contactTypeDropdowns = store.contactTypeDropdowns && store.contactTypeDropdowns.length? [...store.contactTypeDropdowns] : []
                        let dropdownPayload = {dropdown: 'contactTypeDropdown', dropdownValue: '', dropdownAction: 'Add', dropdownId: payload.sectionId}
                        contactTypeDropdowns = editDynamicDropdown(contactTypeDropdowns, dropdownPayload)
                        let contactSections = store.contactSections && store.contactSections.length ? [...store.contactSections] : []
                        contactSections = editDynamicSection(contactSections, payload)
                        let languageCheckBoxes = store.languageScrollableCheckBox && store.languagesScrollableCheckBox.length ? [...store.languagesScrollableCheckBoxes] : []
                        let languageCheckBoxesPayload = { action: 'Add', id: payload.id }
                        languageCheckBoxes = editScrollableCheckBoxes(languageCheckBoxes, languageCheckBoxesPayload)
                        console.log(languageCheckBoxes)
                        return {...store, contactSections: contactSections, contactTypeDropdowns: contactTypeDropdowns, languagesScrollableCheckBoxes: languageCheckBoxes}
                    }
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
        case UPDATE_SCROLLABLE_CHECK_BOXES: {
            switch(payload.type) {
                case languagesScrollableCheckBox: {
                    let scrollableCheckBox = store.languagesScrollableCheckBoxes.length ? [...store.languagesScrollableCheckBoxes] : []
                    scrollableCheckBox = editScrollableCheckBoxes(scrollableCheckBox, payload)
                    console.log(scrollableCheckBox)
                    return {...store, languagesScrollableCheckBoxes: scrollableCheckBox}
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
const UPDATE_DYNAMIC_SECTION = 'UPDATE_DYNAMIC_SECTION';
const UPDATE_SCROLLABLE_CHECK_BOXES = 'UPDATE_SCROLLABLE_CHECK_BOXES'

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

//scrollable check boxes
const languagesScrollableCheckBox = 'languagesScrollableCheckBox'


export const updateQASections = (id, question, answer, action) => 
{
    return {
        type: UPDATE_QA_SECTIONS, 
        payload: {id: id, question: question, answer: answer, action: action}
    }
}   

export const updateDropdown = (dropdown, dropdownVal, dropdownId, dropdownAction) => {

    return {
        type: UPDATE_DROPDOWN, 
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

export const updateDynamicSection = (sectionId, sectionType, sectionAction) => {
    return {
        type: UPDATE_DYNAMIC_SECTION,
        payload: {id: sectionId, type: sectionType, action: sectionAction}
    }
}

export const updateScrollableCheckBoxes = (scrollableCheckBoxesType, scrollableCheckBoxesId, checkBoxCode, scrollableCheckBoxesAction) => {
    return {
        type: UPDATE_SCROLLABLE_CHECK_BOXES, 
        payload: { type: scrollableCheckBoxesType, id: scrollableCheckBoxesId, action: scrollableCheckBoxesAction, code: checkBoxCode }
    }
}

