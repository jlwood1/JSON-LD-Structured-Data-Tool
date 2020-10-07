const initialStore = {
    app: null
}
//reducer
export default function reducer(store = initialStore, action) {
    const {type, value} = action; 
    switch(type) {
        default: {
            return {...store}
        }
    }
}

const UPDATE_DROPDOWN = "DROPDOWN_ON"; 

export const updateDropdown = (dropdownState) => {
    return {
        Type: UPDATE_DROPDOWN, 
        Payload: dropdownState
    }

}

//action declarations 


//action functions 

