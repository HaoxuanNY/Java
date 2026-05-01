let data,customers;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://raw.githubusercontent.com/PorchettaEP/JSONFILES/refs/heads/main";
  let route= "/customers"
  customers = $.getJSON(link+route).responseJSON;

  generateCards(customers)


}

function generateCards(customers){
  let centerpanel = document.getElementById("centerpanel");
  
  // Clear previous cards
  centerpanel.innerHTML = "";
  
  for(let i = 0; i < customers.length; i++){
    let customer = customers[i];
    
    // Create front of card with customer info
    let front = `<h3>Customer ID: ${customer.CustomerID}</h3>`;
    front += `<p><strong>${customer.FirstName} ${customer.LastName}</strong></p>`;
    front += `<p>Email: ${customer.Email}</p>`;
    
    // Create back of card with country and flag
    let back = `<h3>${customer.Country}</h3>`;
    back += `<img src='countries/${customer.Country}.PNG' style='width:100px; height:auto;'>`;
    
    // Create and render flip card
    let card = new FlipCard(front, back);
    card.render("centerpanel");
  }
  
  // Update count
  document.getElementById("count").innerHTML = `Total: ${customers.length} customers`;
}

function filter(){
  let country = document.getElementById("country").value;
  console.log(country);

  let customerList = []; //create a list of songs searched for
  
  for(let i=0; i<customers.length;i++){
    let customer = customers[i] //get each sog
    //make sure the list is no
    if( customer.Country == country ) {
          //add to the new list
          customerList.push(customer);
       }
  }
  console.log(`number found ${customerList.length}`)
  generateCards(customerList);
  
}