import getSchema from './getSchema'; 

const getSchemaProperties = async (term) => {
    //first check if term exists 
    var domainIncludes = []; 
    const schema = await getSchema()
    const schemaGraph = schema['@graph']; 
    if(termExists(term, schemaGraph)) {
        for(var i = 0; i < schemaGraph.length; i++) { 
            if(schemaGraph[i]["https://schema.org/domainIncludes"]){
                domainIncludes.push(schemaGraph[i])
            } 
        }
    } else {
        console.log('no term. invalid')
    } 
    var domainIncludesTerm = [];
    for(var i = 0; i < domainIncludes.length; i++) {
        if(JSON.stringify(domainIncludes[i]).includes("https://schema.org/" + term || "http://schema.org/" + term)) {
            domainIncludesTerm.push(JSON.stringify(domainIncludes[i]));
        }
    }
    return domainIncludesTerm;
}

function termExists(term, schemaGraph) {
    for(var i = 0; i < schemaGraph.length; i++) {
        if(schemaGraph[i]['@id'] === 'https://schema.org/' + term) {
            return true; 
        }
    }
    return false;
}

export default getSchemaProperties; 