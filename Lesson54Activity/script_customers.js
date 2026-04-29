let customers;

async function init(){
  let link = "https://improved-goldfish-x5q7vpqrp79wh545-8500.app.github.dev";
  let route= "/customers";
  info = await fetch(link + route);
  customers = await info.json();
  generateCards(customers);
}

function generateCards(customers){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<customers.length; i++){
    let customer = customers[i];
    build += `<div class="card">`;
    build += `<h3> Customer ID : ${customer.CustomerId}</h3>`;
    build += `<div> First Name : ${customer.FirstName}</div>`;
    build += `<div> Last Name : ${customer.LastName}</div>`;
    build += `<div> Country : ${customer.Country}</div>`;
    build += `<p> Email : ${customer.Email}</p>`;
    build += `<img src='countries/${customer.Country}.PNG'>`;
    build += `<hr>`;
    build += `</div>`;
  }

  centerpanel.innerHTML = build;
}

function filter(){
  let country = document.getElementById("country").value;

  let customerList = [];

  for(let i=0; i<customers.length; i++){
    let customer = customers[i];
    if(customer.Country == country){
      customerList.push(customer);
    }
  }

  generateCards(customerList);
}
