var arr = ['1','2','3','4'];

function input(){
    if(input){
        var converted = parseInt(input);
        arr.push(converted);
        input();
    }else{
    }
}

function negation(arr){
    return arr * -1;
}

console.log(arr.map(negation));