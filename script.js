
var show =document.getElementById("show")
function oncal(){
    let input1 =document.getElementById("input1").value;
    if(!input1){
        var show =document.getElementById("show").innerHTML='Please Enter your text';
        return
    }
    let inputStore1 =input1;
    console.log(inputStore1);
    let input2 =input1.split("").reverse().join("");
    console.log(input2);
    if(inputStore1 === input2){
        var show =document.getElementById("show").innerHTML=`Yes! this word is 
        Palindrome`;
    }
    else{
         var show =document.getElementById("show").innerHTML=`False! this word is not Palindrome`;
    }
}
