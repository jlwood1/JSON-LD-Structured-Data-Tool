const getSchema = async () => {
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

export default getSchema; 