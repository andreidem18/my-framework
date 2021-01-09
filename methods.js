function forEach(array, fnc){
    for(let i = 0; i < array.length; i++){
        fnc(array[i], i, array)
    }
    return -1;
}
function filter(array, fnc){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(fnc(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function map(array, fnc){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(fnc(array[i]));
    }
    return newArray
}
function find(array, fnc){
    for(let i = 0; i < array.length; i++){
        if(fnc(array[i])){
            return array[i];
        }
    }
}
function findIndex(array, fnc){
    for(let i = 0; i < array.length; i++){
        if(fnc(array[i])){
            return i;
        }
    }
    return -1;
}
function contains(array, element){
    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            return true;
        }
    }
    return false;
}
function pluck(list, property){
    let newArray = []
    for(let i = 0; i < list.length; i++){
        newArray.push(list[i][property]);
    }
    return newArray;
}
function without(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 1; j < arguments.length; j++){
            if(array[i] == arguments[j]){
                array.splice(i,1);
            }
        }
    }
    return array;
}
