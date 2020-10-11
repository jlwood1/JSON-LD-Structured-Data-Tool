import getSchema from './getSchema'; 
import propertyExists from './propertyExists'; 

let getSubTypes = async (term) => {
    if(!term) {
        return []; 
    }
    const schema = await getSchema()
    const schemaGraph = schema['@graph'];
    let subClasses = []; 
    for(var i = 0; i < schemaGraph.length; i++) {
        if(schemaGraph[i]['rdfs:subClassOf']) {
            if(propertyExists(term, schemaGraph[i]['rdfs:subClassOf'])) {
                let subClass = schemaGraph[i]['@id'];
                if(subClass.indexOf('https://schema.org/') === 0) {
                    subClass = subClass.replace('https://schema.org/', '')
                } else if(subClass.indexOf('http://schema.org/') === 0) {
                    subClass = subClass.replace('http://schema.org/', '')
                } 
                subClasses.push(subClass)
            } 
        }
    }
    return subClasses; 
}

export default getSubTypes; 