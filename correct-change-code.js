function correctChange(amount, itemPrice) {
    
if (amount >= itemPrice) {
    var difference = ((amount - itemPrice) * 100).toFixed(0)
    
    var numTwenties = 0
    var numFives = 0
    var numOnes = 0
    var numQuarters = 0
    var numDimes = 0
    var numNickels = 0
    var numPennies = 0
    
    //Converting everything to whole numbers
    //to make things easier
    var twentyDollars = 2000
    var fiveDollars = 500
    var oneDollar = 100
    var twentyfiveCent = 25
    var tenCent = 10
    var fiveCent = 5
    var oneCent = 1
    
    if (difference >= twentyDollars) {
        numTwenties = Math.floor(difference/twentyDollars)
        difference = difference % twentyDollars
    }
    if (difference >= fiveDollars) {
        numFives = Math.floor(difference/fiveDollars)
        difference = difference % fiveDollars
    }
    if (difference >= oneDollar) {
        numOnes = Math.floor(difference/oneDollar)
        difference = difference % oneDollar
    }
    if (difference >= twentyfiveCent) {
        numQuarters = Math.floor(difference/twentyfiveCent)
        difference = difference % twentyfiveCent
    }
    if (difference >= tenCent) {
        numDimes = Math.floor(difference/tenCent)
        difference = difference % tenCent
    }
    if (difference >= fiveCent) {
        numNickels = Math.floor(difference/fiveCent)
        difference = difference % fiveCent
    }
    
    numPennies = difference

    return `Change includes ${numTwenties} twenties, ${numFives} fives, ${numOnes} ones, 
    ${numQuarters} quarters, ${numDimes} dimes, ${numNickels} nickels, and ${numPennies} pennies`
    }
 else
    return "Amount must be greater than or equal to item price."
    
}

var output = correctChange(20.38, 13.60)
console.log(output)


