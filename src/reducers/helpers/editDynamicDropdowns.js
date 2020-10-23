
export const editDynamicDropdown = (dropdowns, payload) => {
    switch(payload.dropdownAction) {
        case "Update": {
            if(dropdowns[payload.id])
                dropdowns[payload.id] = payload.dropdownValue; 
        }
        case "Add": {
            let dropdownItem = {dropdown: payload.dropdown, dropdownValue: payload.dropdownValue }
            let newDropdownId = dropdowns.length ?  dropdowns.length : 0; 
            if(payload.dropdownId)
                newDropdownId = payload.dropdownId
            dropdownItem.dropdownId = newDropdownId
            dropdowns.push(dropdownItem)
        }
        case "Delete": {
        }
    }
    return dropdowns; 
} 

