
export const editDynamicSection = (sections, payload) => {
    switch(payload.action) {
        case "Add": {
            let sectionItem = {sectionType: 'contactSection'}
            sectionItem.sectionId = sections.length ? sections.length : 0;
            if(payload.id)
                sectionItem.sectionId =  payload.id
            
            sectionItem.sectionType = payload.type 
            sections.push(sectionItem)
        }
        case "Delete": {
            
        }
    }
    return sections
}