Array.prototype.forEach = (fnc) => {
    for(let i = 0; i < array.length; i++){
        fnc(array[i], i, array)
    }
}
Array.prototype.filter = (fnc) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(fnc(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
Array.prototype.map = (fnc) => {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(fnc(array[i]));
    }
    return newArray
}
Array.prototype.find = (fnc) => {
    for(let i = 0; i < array.length; i++){
        if(fnc(array[i])){
            return array[i];
        }
    }
}
Array.prototype.findIndex = (fnc) => {
    for(let i = 0; i < array.length; i++){
        if(fnc(array[i])){
            return i;
        }
    }
    return -1;
}
Array.prototype.contains = (element) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            return true;
        }
    }
    return false;
}
Array.prototype.pluck = (property) => {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i][property]);
    }
    return newArray;
}
Array.prototype.without = function(){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < arguments.length; j++){
            if(array[i] == arguments[j]){
                array.splice(i,1);
            }
        }
    }
    return array;
}
