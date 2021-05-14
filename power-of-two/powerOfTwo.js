/**Based on a challenge by Matt Parker to find a power of 2 that doesn't have a power of 2 as one of the digits**/
let i = 1; //97460
let cont = true;
let doesNotContain = []
let numContainsPowerOfTwo = 0

let int = setInterval(() => { //Encasing the calculations in a setInterval to avoid crashing the computer, checks a number every millisecond
    let num = BigInt(2) ** BigInt(i);
    let digits = returnDigitArray(num); //Break up i into its digits
    let containsPowerOfTwo = ifContainsPowerOfTwo(digits);
    
    //Update DOM with state
    if (!containsPowerOfTwo) {
        document.getElementById("list").innerText += num + ", ";
        numContainsPowerOfTwo++
    }
    document.getElementById("checking").innerText = i
    
    //Stop after 10,000 executions
    if (numContainsPowerOfTwo > 1) clearInterval(int);
    i++;
}, 1);

// console.log("exited");

function returnDigitArray(number) {
    let digits = [];
    let remainder = number;

    while (true) {
        let digit = remainder % BigInt(10);

        digits.push(digit); //Add to array
        remainder -= digit; //Clear out processed digit
        remainder /= BigInt(10);
        if (remainder === BigInt(0)) {
            break; //Once every digit has been extracted, break
        }
    }
    return digits;
}

function ifContainsPowerOfTwo(digits) {
    const powersOfTwo = [BigInt(0), BigInt(1), BigInt(2), BigInt(4), BigInt(8)];
    let containsPowerOfTwo = false;
    digits.forEach(i => {
        if (powersOfTwo.includes(i)) {
            containsPowerOfTwo = true;
        }
    })

    return containsPowerOfTwo;
}