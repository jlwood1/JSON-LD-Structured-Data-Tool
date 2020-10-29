
export const editDynamicSection = (sections, payload) => {
    switch(payload.action) {
        case "Add": {
            let sectionItem = {sectionType: 'contactSection'}
            sectionItem.sectionId = sections.length ? sections.length : 0;
            if(payload.id)
                sectionItem.sectionId =  payload.id
            
            sectionItem.sectionType = payload.type 
            sections.push(sectionItem)
            return [...sections]
        }
        case "Delete": {
            for(var i = 0; i < sections.length; i++) {
                if(sections[i].sectionId === payload.id) {
                    sections.splice(i, 1)
                }
            }
            for(var i = 0; i < sections.length; i++) {
                sections[i].sectionId = i; 
            }
            return [...sections]
        }
    }
}