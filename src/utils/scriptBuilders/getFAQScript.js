import {convertToJSONLDScript} from './convertToJSONLDScript'
const getFAQScript = (faqData) => {
    let faqObject = {}
    faqObject.context = 'https://schema.org/'
    faqObject.type = 'FAQPage'
    if(faqData.qaSection.length) {
        faqObject.mainEntity = []
        for(var i = 0; i < faqData.qaSection.length; i++) {
            faqObject.mainEntity.push({
                '@type': "Question", 
                name: faqData.qaSection[i].question ? faqData.qaSection[i].question : '', 
                acceptedAnswer: {
                    "@type": 'answer', 
                    text: faqData.qaSection[i].answer ? faqData.qaSection[i].answer : '', 
                }
            })
        }
    }
    let script = convertToJSONLDScript(faqObject)
    
    return script 
}

export default getFAQScript; 