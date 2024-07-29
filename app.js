function calculate(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    var operator=(document.getElementById("operator").value);
    var result=0;
    if (operator=="+"){ 
        result=num1+num2;
    } else if(operator=="-")
       {
        result=num1-num2;
    }else if(operator=="*")
    {
        result=num1*num2;
    }else if(operator=="/")
    {
        result=num1/num2;
    }else{
        alert("invalid operator")
    }
document.getElementById("result").value=result
console.log(clear)
}

document.writeln("hello");