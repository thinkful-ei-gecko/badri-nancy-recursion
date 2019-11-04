
///counting sheep 
const countSheep = function(count) {
    if(count === 0) {
        console.log('All sheep jumped over the fence')
        return ;
    }
    console.log(count + ': Another sheep jumps over the fence')
    countSheep(count - 1)
}

countSheep(3)