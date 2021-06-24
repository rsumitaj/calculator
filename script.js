var buttons = document.getElementsByClassName("buttons");
var display = document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++){
  buttons[i].addEventListener('click',function(){

    var value = this.getAttribute('data-value');

    if(value=='+' || value=="-" || value=="*" || value=="/"){ // whether an operator is clicked here
      operator=value;
      operand1=parseFloat(display.textContent);
      display.innerHTML="";

    }else if(value=='='){
      operand2=parseFloat(display.textContent);
      display.innerHTML="";
      //use eval to get result
      var ans = eval(operand1 + operator + operand2);
      // show result 
      display.innerHTML += ans;

    }else{
      display.innerText += value;
    }

  });
}