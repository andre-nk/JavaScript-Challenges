
var input = prompt("Enter your name (2 words only)");
console.log(input);

function alpha(str){
        var wordSlicer = str.split(" ",2);
        var [name1, name2] = wordSlicer;
        var output = document.write(name2 + ' ' + name1);
        return output;
}

alpha(input);
