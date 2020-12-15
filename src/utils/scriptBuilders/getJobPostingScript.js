import {convertToJSONLDScript} from './convertToJSONLDScript'
const getJobPostingScript = (jobPostingData) => {
    let jobPostingObject = {}
    jobPostingObject.context = 'https://schema.org/'
    jobPostingObject.type = 'JobPosting'
    jobPostingObject.title = jobPostingData.title ? jobPostingData.title : ''
    if(jobPostingData.description) {
        jobPostingObject.description = jobPostingData.description ? jobPostingData.description : ''
    }
    jobPostingData.hiringOrganizationURL ? 
        jobPostingObject.hiringOrganization = {
            '@type': 'Organization', 
            name:  jobPostingData.hiringOrganization ? jobPostingData.hiringOrganization : '', 
            sameAs: jobPostingData.hiringOrganizationURL ? jobPostingData.hiringOrganizationURL : '' 
        }
    :   
        jobPostingObject.hiringOrganization = {
            '@type': 'Organization', 
            name:  jobPostingData.hiringOrganization ? jobPostingData.hiringOrganization : '', 
        }

    jobPostingObject.industry  = jobPostingData.industry ? jobPostingData.industry : ''
    if(jobPostingData.employmentType)
        jobPostingObject.employmentType = jobPostingData.employmentType ? jobPostingData.employmentType : ''
    jobPostingObject.datePosted = jobPostingData.datePosted ? jobPostingData.datePosted : ''
    jobPostingObject.validThrough = jobPostingData.validThrough ? jobPostingData.validThrough : ''
    if(!jobPostingData.isRemote) {
        jobPostingObject.jobLocation = {
            '@type': "Place", 
            address: {
                '@type': 'PostalAddress', 
                streetAddress: jobPostingData.streetAddress ? jobPostingData.streetAddress : '', 
                addressLocality: jobPostingData.addressLocality ? jobPostingData.addressLocality : '', 
                postalCode: jobPostingData.postalCode ? jobPostingData.postalCode : '', 
                addressCountry: jobPostingData.addressCountry ? jobPostingData.addressCountry : ''
            }
        }
    }
    if(jobPostingData.baseSalary) {
        if(jobPostingData.maxSalary){
            jobPostingObject.baseSalary = {
                '@type': 'MonetaryAmount', 
                currency: jobPostingData.currencyCode ? jobPostingData.currencyCode : '', 
                value: {
                    '@type': 'QuantitativeValue', 
                    unitText: jobPostingData.unitText ? jobPostingData.unitText : '', 
                    minValue: jobPostingData.baseSalary ? jobPostingData.baseSalary : '', 
                    maxValue: jobPostingData.maxSalary ? jobPostingData.maxSalary : ''
                }
            }
        }
        else {
            jobPostingObject.baseSalary = {
                '@type': 'MonetaryAmount', 
                currency: jobPostingData.currencyCode ? jobPostingData.currencyCode : '', 
                value: {
                    '@type': 'QuantitativeValue', 
                    unitText: jobPostingData.unitText ? jobPostingData.unitText : '', 
                    value: jobPostingData.baseSalary ? jobPostingData.baseSalary : '', 
                } 
            }
        }
    }

    jobPostingObject.responsibilities = jobPostingData.responsibilities ? jobPostingData.responsibilities : ''
    jobPostingObject.skills = jobPostingData.skills ? jobPostingData.skills : '' 
    jobPostingObject.qualifications = jobPostingData.qualifications ? jobPostingData.qualifications : ''
    jobPostingObject.educationRequirements = jobPostingData.educationRequirements ? jobPostingData.educationRequirements : ''
    jobPostingObject.experienceRequirements = jobPostingData.experienceRequirements ? jobPostingData.experienceRequirements : ''
    let script = convertToJSONLDScript(jobPostingObject)
    return script 
}

export default getJobPostingScript