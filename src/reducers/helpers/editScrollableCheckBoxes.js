
export const editScrollableCheckBoxes = (scrollableCheckBoxes, payload) => {
    switch(payload.action) {
        case "Add": {
            scrollableCheckBoxes[payload.id] = new Array()
            return [...scrollableCheckBoxes]
        }
        case "Delete": {
            scrollableCheckBoxes.splice(payload.id, 1)
            //move id's down 
            for(var i = payload.id; i < scrollableCheckBoxes.length; i++) {
                if(scrollableCheckBoxes[i + 1])
                    scrollableCheckBoxes[i] = scrollableCheckBoxes[i + 1];
            }
            console.log(scrollableCheckBoxes)
            return [...scrollableCheckBoxes]
        }
        case "Update": {
            for(var i = 0; i < scrollableCheckBoxes[payload.id].length; i++) {
                if(payload.code === scrollableCheckBoxes[payload.id][i]) {
                    scrollableCheckBoxes[payload.id].splice(i, 1)
                    return scrollableCheckBoxes;
                }
            }
            scrollableCheckBoxes[payload.id].push(payload.code)
            return [...scrollableCheckBoxes]
        }
    } 
}