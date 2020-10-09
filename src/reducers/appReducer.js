
const initialStore = {
    termDropdown: {dropdown: 'Term', dropdownValue: null },
    typeDropdown: {dropdown: 'TypeOfTerm', dropdownValue: null}
}
//reducer
export default function appReducer(store = initialStore, action) {
    const {type, payload} = action; 
    console.log(payload)
    switch(type) {
        case UPDATE_DROPDOWN: {
            switch(payload.dropdown) {
                case store.termDropdown.dropdown: {
                    return { ...store, termDropdown: {dropdownType: payload.dropdown, dropdownValue: payload.dropdownValue}}
                }
                case store.typeDropdown.dropdown: {
                    return { ...store, typeDropdown: {dropdownType: payload.dropdown, dropdownValue: payload.dropdownValue}}
                }
            }
        }
        default: {
            return {...store}
        }
    }
}

const UPDATE_DROPDOWN = "DROPDOWN_ON"; 

export const updateDropdown = (dropdown, dropdownVal) => {

    return {
        type: UPDATE_DROPDOWN, 
        payload: {dropdown: dropdown, dropdownValue: dropdownVal} 
    }
}

