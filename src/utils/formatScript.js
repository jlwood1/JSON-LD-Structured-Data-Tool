
let formatScript = (script) => {
    let characterArray = script ? script.split('') : [];
    let formattedStringArray = []
    let nestingStack = []
    let sliceStartIndex, sliceEndIndex = 0;

    for(var i = 0; i < characterArray.length; i++) {
        if(characterArray[i] === '{') {
            if(characterArray[i - 1] !== '[')
                sliceStartIndex = i
            sliceEndIndex = i + 1;
            characterArray[i] = characterArray[i] + '\n'
            nestingStack.push(characterArray[i])
            for(var x = 0; x < nestingStack.length; x++) {
                characterArray[i] = characterArray[i] + "\t"
            }
            formattedStringArray.push(characterArray.slice(sliceStartIndex, sliceEndIndex).join(''))

            sliceStartIndex = sliceEndIndex; 
        } else if(characterArray[i] === '}') {
            sliceStartIndex = i; 
            sliceEndIndex = i + 1; 
            nestingStack.pop();
            for(var x = 0; x < nestingStack.length; x++) {
                characterArray[i] = '\t' + characterArray[i] 
            }
            characterArray[i] = '\n' + characterArray[i]
            
            formattedStringArray.push(characterArray.slice(sliceStartIndex, sliceEndIndex).join(''))

            sliceStartIndex = sliceEndIndex
        } else if(characterArray[i] === ',' || characterArray[i + 1] === '}') {
            sliceEndIndex = i + 1;
            if(characterArray[i + 1] !== '}') {
                characterArray[i] = characterArray[i] + '\n'
                for(var x = 0; x < nestingStack.length; x++) {
                    characterArray[i] = characterArray[i] + "\t"
                }
            }

            formattedStringArray.push(characterArray.slice(sliceStartIndex, sliceEndIndex).join(''))
            sliceStartIndex = sliceEndIndex; 
        } else if(characterArray[i] === ':' && (characterArray[i + 1] === '"' || characterArray[i + 1] === '{' || characterArray[i + 1] === '[' )) {
            characterArray[i] = characterArray[i] + ' '
            sliceEndIndex = i + 1;
            formattedStringArray.push(characterArray.slice(sliceStartIndex, sliceEndIndex).join(''))
            sliceStartIndex = sliceEndIndex
        } 
    }
    return(formattedStringArray.join('') + '\n' + "</script>")
}

export default formatScript;