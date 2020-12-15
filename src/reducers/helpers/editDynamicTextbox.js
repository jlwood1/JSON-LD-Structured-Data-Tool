
export const editDynamicTextbox = (textbox, payload) => {
    switch(payload.action) {
        case 'Add': {
                let textboxItem = {sectionId: payload.sectionId, value: payload.value}
                textbox.push(textboxItem)
                return [...textbox]
            }
        case 'Delete': {
            console.log(payload.sectionId)
            for(var i = 0; i < textbox.length; i++) {
                if(textbox[i].sectionId === payload.sectionId) {
                    textbox.splice(i, 1)
                }
            }
            console.log(textbox)
            for(var i = 0; i < textbox.length; i++) {
                textbox[i].sectionId = i 
            }
            return [...textbox]
        }   
        case 'Update': {
            for(var i = 0; i < textbox.length; i++) {
                if(textbox[i].sectionId === payload.sectionId) {
                    textbox[i].value = payload.value
                }
            }
            return [...textbox]
        }
    }
}