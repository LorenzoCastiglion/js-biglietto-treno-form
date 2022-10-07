

const btn = document.getElementById('calcola');

let ticket = 0;



const calcolaBiglietto =  function() {

    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;

    if(isNaN(km) || isNaN(age)){
        alert('NuMeRi!1!1!!11!1')
    }

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

    let finalPrice = parseFloat(ticket).toFixed(2)

    document.getElementById("prezzo").innerHTML = finalPrice + ' &euro;';
};

btn.addEventListener('click', calcolaBiglietto);
    
console.log(btn)


