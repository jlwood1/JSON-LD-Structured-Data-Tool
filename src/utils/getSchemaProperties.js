const term = 'Movie'; 

async function getSchema() {
    const schemaURL = 'https://schema.org/version/latest/schemaorg-all-https.jsonld';
    var response = await fetch(schemaURL)
        .then(res => {
            if(res.status !== 200) {
                console.log('Looks like there was a problem. Status code: ' + res.status)
                return; 
            }
            return res.json()
        .catch(function() {
            console.log('err')
        }); 
    });
    return response; 
}

async function getSchemaProperties(term) {
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
    console.log(domainIncludesTerm); 
}

function termExists(term, schemaGraph) {
    for(var i = 0; i < schemaGraph.length; i++) {
        if(schemaGraph[i]['@id'] === 'https://schema.org/' + term) {
            return true; 
        }
    }
    return false;
}

getSchemaProperties(term)