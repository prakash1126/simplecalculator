let screen  = document.getElementById('screen');
var operator=0;
function handleButtonClick(letter){
    if(letter=="*" || letter == "/" || letter =="+" || letter == "-"){
             operator++;
             console.log("No. of operator is "+ operator);
        if(operator=1){
            screen.value= eval(screen.value)+letter;
        }
        else{
         screen.value + letter;
        }
    }
    else{
        screen.value = screen.value + letter; 
    }
}
function equal(){
   screen.value=eval(screen.value);
   operator =0;
}
function clearValue(){
    screen.value="";
    operator =0;
}


