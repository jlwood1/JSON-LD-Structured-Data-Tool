import getSubTypes from '../utils/getSubTypes';

let onLoadTypeOptions = async (term, updateDropdown) => {
    const response = await getSubTypes(term)
    // add logic here to format types in easier to read format? 
    updateDropdown(response)

}

export default onLoadTypeOptions; 