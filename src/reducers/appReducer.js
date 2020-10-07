
const initialStore = {
    dropdownValue: undefined, 
}
//reducer
export default function appReducer(store = initialStore, action) {
    const {type, payload} = action; 
    switch(type) {
        case UPDATE_DROPDOWN: {
            return {...store, dropdownValue: payload}
        }
        default: {
            return {...store}
        }
    }
}

const UPDATE_DROPDOWN = "DROPDOWN_ON"; 

export const updateDropdown = (dropdownVal) => {
    return {
        type: UPDATE_DROPDOWN, 
        payload: dropdownVal 
    }

}

