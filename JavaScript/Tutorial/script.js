let students = [10,9,10,11,10,10,8,10,11];

function findAvg(...obj) {
    let sum = 0;
    for(let i of obj){
        sum += i;
    }
    return sum/obj.length
}


console.log(findAvg(...students))