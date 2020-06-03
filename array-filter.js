window.onload(inputter());

//input array here
var consent = [];

function fourFilter(arr){
    arr.forEach(e =>{
        var a = e.toString();
        if(a.length > 4){
            a = "";
        }else if(a.length <4){ 
            a = "";
        }else{
            console.log(a)
        }
    })
}
