// Find Duplicate Number from array


const numbers = [1,4,5,5,6,9,3,4,33,32,54,10];

const duplicates = numbers.filter(function(value,index,array){
    return array.indexOf(value) !== index
});
console.log(duplicates);