import getSchema from './getSchema'; 
import propertyExists from './propertyExists'; 

const getSchemaProperties = async (term) => {
    //first check if term exists 
    var properties = []; 
    const schema = await getSchema()
    const schemaGraph = schema['@graph']; 
    let termData = getTerm(term, schemaGraph)
    let terms = [] 
    if(termData) {
        terms.push(term); 
        //get all parents 
        while(termData['rdfs:subClassOf']) {
            let parentTerm = termData['rdfs:subClassOf']['@id'].toString(); 
            if(parentTerm.indexOf('https://schema.org/') === 0) {
                parentTerm = parentTerm.replace('https://schema.org/', '')
            } else if(parentTerm.indexOf('http://schema.org/') === 0) {
                parentTerm = parentTerm.replace('http://schema.org/', '')
            }
            terms.push(parentTerm) 
            termData = getTerm(parentTerm, schemaGraph)
        }
    }
    //get term props 
    for(var i = 0; i < terms.length; i++) {
        properties.concat(getTermProperties(terms[i], schemaGraph));
    }
    console.log(terms)
    //filter properties
    return properties;
}

function getTerm(term, schemaGraph) {
    for(var i = 0; i < schemaGraph.length; i++) {
        if(schemaGraph[i]['@id'] === 'https://schema.org/' + term) {
            return schemaGraph[i]; 
        }
    }
    return null;
}

function getTermProperties(term, schemaGraph) {
    var properties = []; 
    for(var i = 0; i < schemaGraph.length; i++) {
        if(schemaGraph[i]['https://schema.org/domainIncludes']  && schemaGraph[i]['@type'] === 'rdf:Property') {
            if(propertyExists(term, schemaGraph[i]['https://schema.org/domainIncludes'])) {
                properties.push(schemaGraph[i]['@id'])
            }
        }
    }
    console.log(properties); 
    return properties; 
}


export default getSchemaProperties; 