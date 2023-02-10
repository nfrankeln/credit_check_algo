module.exports = creditCheck = (creditNumber) => {
creditNumber=creditNumber.toString().split("")
creditNumber = creditNumber.map((numChar,index) => {
    numDigit = Number(numChar);
    if (index % 2 === 0){
        numDigit *= 2
        if (numDigit  > 9){
            numChar = numDigit.toString().split("")
            numDigit = Number(numChar[0])+Number(numChar[1])
        }
    } 
    return numDigit
});
sum = creditNumber.reduce((total, current)=> total + current)
if (sum % 10 ===0) return "The number is valid!"
return "The number is invalid!"
}
