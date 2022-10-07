

const btn = document.getElementById('calcola');

let ticket = 0;

const calcolaBiglietto =  function() {

    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;

    console.log(age)
    console.log(km)
    
    ticket = km * 0.21;

    if (age <= 18){

        ticket = ticket * 0.8;
    }else if (age >= 65){
        ticket = ticket * 0.6;
    }else {
        ticket = ticket
    };

    console.log(ticket)

    document.getElementById("prezzo").innerHTML = ticket;
};

btn.addEventListener('click', calcolaBiglietto);
    
console.log(btn)


