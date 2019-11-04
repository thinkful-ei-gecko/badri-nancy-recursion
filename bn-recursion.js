
///counting sheep 
const countSheep = function(count) {
    if(count === 0) {
        console.log('All sheep jumped over the fence')
        return ;
    }
    console.log(count + ': Another sheep jumps over the fence')
    countSheep(count - 1)
}

//countSheep(3)

//power calculator
const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        console.log('exponent must be greater than 0')
        return;
    }
    if (exponent === 1) {
        return base
    }
    
    return base * powerCalculator(base, exponent-1)
}

console.log(powerCalculator(3, 4))