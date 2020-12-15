export const convertToJSONLDScript = (scriptObject) => {
    let script = JSON.stringify(scriptObject);
    let typeIndex = script.indexOf('type')
    let contextIndex = script.indexOf('context')
    let charArr = script.split('')
    charArr[typeIndex] = '@' + charArr[typeIndex]
    charArr[contextIndex] = '@' + charArr[contextIndex]
    let fixedScript = charArr.join('')
    return fixedScript
}