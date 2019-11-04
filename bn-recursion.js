
///counting sheep 
const countSheep = function (count) {
    if (count === 0) {
        console.log('All sheep jumped over the fence')
        return;
    }
    console.log(count + ': Another sheep jumps over the fence')
    countSheep(count - 1)
}

//countSheep(3)

//power calculator
const powerCalculator = function (base, exponent) {
    if (exponent < 0) {
        console.log('exponent must be greater than 0')
        return;
    }
    if (exponent === 1) {
        return base
    }

    return base * powerCalculator(base, exponent - 1)
}
//console.log(powerCalculator(3, 4))

const reverseString = function (string) {
    if (string === '') {
        return '';
    }

    const newChar = string[string.length - 1]

    return newChar + reverseString(string.substring(0, string.length - 1)

    )
}
//console.log(reverseString('hello'))

const triNum = function (n) {
    if(n === 1) {
        return 1;
    }
    return n + triNum(n-1)
}

//console.log(triNum(5))

const strSplit = function (string, sep) {

    let index = string.indexOf(sep)
    if (index === -1) {
        return [string] //2020
    }

    return [string.slice(0, index)].concat(strSplit(string.slice(index + sep.length), sep))
    
}

//console.log(strSplit('02/20/2020', '/')) 




const fibMe = function(n) {

    if(num === 1) {
        return 1;
    }
    
    return num 
}


//input 7
//output 1, 1, 2, 3, 5, 8, 13.