// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (item == array[i]) {
            return true
        }
    }
    return false
}

function indexOf(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            return i
        }
    }
    return -1
}

function reverse(array) {
    let newArry = [];
    for (let i = array.length - 1; i >= 0; i--) (
        newArry.push(array[i])
    )
    return newArry;
}

function slice(start, stop, array) {
    let newArry = [];
    for (let i = start; i < stop; i++) {
        newArry.push(array[i])
    }
    return newArry;
}

function concat(array1,array2) {
    let newArry = array1;
    for (let i = 0; i < array2.length; i ++) {
        newArry.push(array2[i])
    }
    return newArry;
}

function join(sep, array) {
    let newStr = "";
    for (let i=0; i<array.length; i++) {
        newStr += array[i];
        if (i != array.length-1) {
            newStr += String(sep);
        }
    }
    return newStr;
}

function max(array) {
    let max = array[0];
    for (let i=0; i<array.length; i++) {
        if (array[i+1] > max) {
            max = array[i+1]
        }
    }
    return max
}