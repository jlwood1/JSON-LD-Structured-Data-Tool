
export const editScrollableCheckBoxes = (scrollableCheckBoxes, payload) => {
    switch(payload.action) {
        case "Add": {
            scrollableCheckBoxes[payload.id] = new Array()

        }
        case "Delete": {
            scrollableCheckBoxes.splice(payload.id, 1)
        }
        case "Update": {
            for(var i = 0; i < scrollableCheckBoxes[payload.id].length; i++) {
                if(payload.code === scrollableCheckBoxes[payload.id][i]) {
                    scrollableCheckBoxes[payload.id].splice(i, 1)
                }
            }
            scrollableCheckBoxes[payload.id].push(payload.code)
        }
    } 
    return scrollableCheckBoxes
}