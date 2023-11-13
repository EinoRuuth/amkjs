const trigger = document.querySelector('#start');
trigger.addEventListener('click', A);


function A(evt){
    let results = "";
    var operation = document.getElementById("operation").value;
    var num1 = parseInt(document.querySelector('#num1').value);
    var num2 = parseInt(document.querySelector('#num2').value);
    if (operation == "add") {
        results = num1 + num2;
    }
    else if (operation == "sub") {
        results = num1 - num2;
    }
    else if (operation == "multi") {
        results = num1 * num2;
    }
    else if (operation == "div") {
        results = num1 / num2;
    }
    document.getElementById("result").innerHTML=results;
}

