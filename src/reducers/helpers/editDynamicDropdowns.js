
export const editDynamicDropdown = (dropdowns, payload) => {
    switch(payload.dropdownAction) {
        case "Update": {
            for(var i = 0; i < dropdowns.length; i++) {
                if(dropdowns[i].dropdownId === payload.dropdownId) {
                    dropdowns[i].dropdownValue = payload.dropdownValue
                }
            }
            return [...dropdowns]
        }
        case "Add": {
            let dropdownItem = {dropdown: payload.dropdown, dropdownValue: payload.dropdownValue }
            let newDropdownId = dropdowns.length ?  dropdowns.length : 0; 
            if(payload.dropdownId)
                newDropdownId = payload.dropdownId
            dropdownItem.dropdownId = newDropdownId
            dropdowns.push(dropdownItem)
            return dropdowns
        }
        case "Delete": {
            for(var i = 0; i < dropdowns.length; i++) {
                if(dropdowns[i].dropdownId === payload.dropdownId) {
                    dropdowns.splice(i, 1)
                }
            }
            for(var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].dropdownId = i;
            }
            return [...dropdowns]
        }
    }
} 

