var display = document.getElementById("displayID");
var operator = "";
var firstNumber = "";
var helper="";

function btn_AC() {
    display.innerHTML = "0";
}

function btn_BSC(){
    if(display.innerHTML!="0"){
        display.innerHTML =  display.innerHTML.slice(0, -1);
    }
    if(display.innerHTML==""){
        display.innerHTML =  "0";
    }
}
function btn_Mod(){
    btn_Equals();
    operator = "%";
    firstNumber = display.innerHTML;
    display.innerHTML = "0";
}

function btn_Div(){
    btn_Equals();
    operator = "/";
    firstNumber = display.innerHTML;
    display.innerHTML = "0";
}

function btn_Mul(){
    btn_Equals();
    operator = "x";
    firstNumber = display.innerHTML;
    display.innerHTML = "0";
}

function btn_Sub(){
    btn_Equals();
    operator = "-";
    firstNumber = display.innerHTML;
    display.innerHTML = "0";
}

function btn_Add(){
    btn_Equals();
    operator = "+";
    firstNumber = display.innerHTML;
    display.innerHTML = "0";
}

function btn_Equals(){
    if(operator!="")
    {
        var secondNumber = display.innerHTML;
        var result = 0;
        if(operator=="+"){
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
        }
        if(operator=="-"){
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
        }
        if(operator=="x"){
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
        }
        if(operator=="/"){
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
        }
        if(operator=="%"){
            result = parseFloat(firstNumber) % parseFloat(secondNumber);
        }

        if(result.toString().length>8){
            let ww = result.toString().slice(0,10);
            display.innerHTML = ww;
            display.innerHTML = display.innerHTML + "...";
        }
        else{
            display.innerHTML = result;
        }

        // display.innerHTML = result;

        // display.innerHTML =  display.innerHTML.slice(0, 10);
        helper="1";
        operator = "";
        firstNumber = "";
    }
}

function btn_Dot(){
    if(!findPoint(display.innerHTML)){
        display.innerHTML += ".";
    }
}

function btn_0(){
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "0";
}

function btn_1(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "1";
}

function btn_2(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "2";
}

function btn_3(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "3";
}

function btn_4(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "4";
}

function btn_5(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "5";
}

function btn_6(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "6";
}

function btn_7(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "7";
}

function btn_8(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "8";
}

function btn_9(){
    if(helper=="1"){
        display.innerHTML="";
        helper="";
    }
    if(display.innerHTML=="0"){
        display.innerHTML="";
    }
    display.innerHTML += "9";
}
function findPoint(myStr){
    var point = myStr.indexOf(".");
    if(point==-1){
        return false;
    }
    else{
        return true;
    }
}