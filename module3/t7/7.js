
const trigger = document.querySelector('#trigger');
trigger.addEventListener('mouseover', A);
trigger.addEventListener("mouseout", B);

function A(evt){
    document.getElementById("target").src="img/picB.jpg";
}

function B(evt){
    document.getElementById("target").src="img/picA.jpg";
  }
