const trigger = document.querySelector('#source');
trigger.addEventListener('submit', A);

function A(evt){
    event.preventDefault();
    const firstname = document.querySelector('input[name=firstname]');
    const lastname = document.querySelector('input[name=lastname]');
    console.log(firstname.value, lastname.value);
    document.getElementById("target").innerHTML=`Your name is ${firstname.value} ${lastname.value}`;
}

