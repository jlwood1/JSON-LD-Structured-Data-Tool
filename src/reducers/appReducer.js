
const initialStore = {
    termDropdown: {dropdown: 'Term', dropdownValue: null },
    typeDropdown: {dropdown: 'TypeOfTerm', dropdownValue: null},
    imageLinks: null
}
//reducer
export default function appReducer(store = initialStore, action) {
    const {type, payload} = action; 

    switch(type) {
        case UPDATE_DROPDOWN: {
            console.log('here')
            switch(payload.dropdown) {
                case store.termDropdown.dropdown: {
                    return { ...store, termDropdown: {dropdownType: payload.dropdown, dropdownValue: payload.dropdownValue}}
                }
                case store.typeDropdown.dropdown: {
                    return { ...store, typeDropdown: {dropdownType: payload.dropdown, dropdownValue: payload.dropdownValue}}
                }
                default: {
                    return {...store} 
                }
            }
        }
        case UPDATE_IMAGE_LINKS: {
            let imageLinks = store.imageLinks;
            switch(payload.action) {
                case "Add": {
                    imageLinks.push(payload.url) 
                    return {...store, imageLinks: imageLinks }
                }
                case "Delete": {
                    imageLinks.splice(payload.url, 1); 
                    return {...store, imageLinks }
                }
                default: {
                    return {...store, imageLinks: imageLinks}
                }
            }
        }
        default: {
            return {...store}
        }
    }
}

const UPDATE_DROPDOWN = "DROPDOWN_ON"; 
const UPDATE_IMAGE_LINKS = "UPDATE_IMAGE_LINKS"; 


export const updateDropdown = (dropdown, dropdownVal) => {

    return {
        type: UPDATE_DROPDOWN, 
        payload: {dropdown: dropdown, dropdownValue: dropdownVal} 
    }
}


export const updateImageLinks = (url, action) => 
{
    return {
        type: UPDATE_IMAGE_LINKS, 
        payload: {url: url, action: action} 
    }
}

