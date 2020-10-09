import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import getSchema from './getSchema'; 
import propertyExists from './propertyExists'; 

let getSubTypes = async (term) => {
    const schema = await getSchema()
    const schemaGraph = schema['@graph'];
    let subClasses = []; 
    for(var i = 0; i < schemaGraph.length; i++) {
        if(schemaGraph[i]['rdfs:subClassOf']) {
            if(propertyExists(term, schemaGraph[i]['rdfs:subClassOf'])) {
                subClasses.push(schemaGraph[i]['@id'])
            } 
        }
    }
    return subClasses; 
}

export default getSubTypes; 