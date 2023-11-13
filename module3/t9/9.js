const trigger = document.querySelector('#start');
trigger.addEventListener('click', A);
const operations = ["+", "-", "*", "/"];

function A(evt){
    let results = "";
    var operation = document.getElementById("calculation").value;
    var splitted = operation.split('');
    for (let i = 0; i < splitted.length; i++) {
        if (operations.includes(splitted[i])) {
            var first = parseInt(operation.substr(0, i));
            var second = parseInt(operation.substr(i+1, splitted.length));
            console.log(first);
            console.log(second);
        }
    }
    if (operation.includes("+")) {
        results = first + second;
    }
    else if (operation.includes("-")) {
        results = first - second;
    }
    else if (operation.includes("*")) {
        results = first * second;
    }
    else if (operation.includes("/")) {
        results = first / second;
    }
    document.getElementById("result").innerHTML=results;
}

