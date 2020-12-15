
export const editURL = (links, payload) => {
    switch(payload.action) {
        case "Update": {
            links = updateURL(links, payload)
        }
        case "Add": {
            links = addURL(links, payload)
        }
        case "Delete": {
            links = deleteURL(links, payload)
        }
    }
    return links 
}


const updateURL = (links, payload) => {
    console.log(payload.id)
    for(var i = 0; i < links.length; i++) {
        if(links[i].id === payload.id) {
            links[i].url = payload.url
        }
    }
    return links
}

const addURL = (links, payload) => {
    if(links.length === 0) {
        links.push({id: 1, url: ''})
    } else {
        let imageItem = {id: links.length + 1, url: payload.url}
        links.push(imageItem) 
    }
    return links
}

const deleteURL = (links, payload) => {
    for(var i = 0 ; i < links.length; i++) {
        if(links[i].id === payload.linkId) {
            links.splice(i, 1); 
            break; 
        }
    }
    for(var i = 0; i < links.length; i++) {
        links[i].id = i + 1; 
    }
    return links; 
}