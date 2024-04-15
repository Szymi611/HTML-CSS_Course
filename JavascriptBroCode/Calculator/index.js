const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function calculate(){
    try{
        display.value= eval(display.value); //takes expression and evaluate it
    }
    catch(error){
        display.value = "Error"
    }
}
function clearDisplay(){
    display.value ="";
}