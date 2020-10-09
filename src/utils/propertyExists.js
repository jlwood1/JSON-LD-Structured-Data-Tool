let propertyExists = (term, properties) => {
    if(properties.length) {
        for(var i = 0; i < properties.length; i++) {
            if(properties[i]['@id'] === 'https://schema.org/' + term
            || properties[i]['@id'] === 'http://schema.org/' + term) {
                return true; 
            }
        }        
    } else {
        if(properties['@id'] === 'https://schema.org/' + term
        || properties['@id'] === 'http://schema.org/' + term) {
            return true; 
        }
    }
    return false; 
}

export default propertyExists; 