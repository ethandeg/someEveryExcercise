function hasOddNumber(arr){
    return arr.some(function(num){
        if(num % 2 !== 0){
            return true;
        }
    })
}

function hasAZero(number){
    return number.toString().split('').some(function(val){
        return val === '0'
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        if(num % 2 !== 0){
            return true;
        }
        return false;
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(num){
        return arr.indexOf(num) === arr.lastIndexOf(val)
    })
}

function hasCertainKey(arr,key){
    return arr.every(function(obj){
        return key in obj
    })
}

function hasCertainValue(arr,key,val){
    return arr.every(function(array){
        return  array[key] === val
    })
}
 