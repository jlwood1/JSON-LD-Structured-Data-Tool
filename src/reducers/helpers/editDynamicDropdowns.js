
export const editDynamicDropdown = (dropdowns, payload) => {
    switch(payload.dropdownAction) {
        case "Update": {
            for(var i = 0; i < dropdowns.length; i++) {
                if(dropdowns[i].sectionId === payload.sectionId) {
                    dropdowns[i].value = payload.value
                }
            }
            return [...dropdowns]
        }
        case "Add": {
            let dropdownItem = {sectionId: payload.sectionId, value: payload.value }
            let newDropdownId = dropdowns.length ?  dropdowns.length : 0 
            if(payload.sectionId)
                newDropdownId = payload.sectionId
            dropdownItem.sectionId = newDropdownId
            dropdowns.push(dropdownItem)
            return dropdowns
        }
        case "Delete": {
            for(var i = 0; i < dropdowns.length; i++) {
                if(dropdowns[i].sectionId === payload.sectionId) {
                    dropdowns.splice(i, 1)
                }
            }
            for(var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].sectionId = i;
            }
            return [...dropdowns]
        }
    }
} 

