let data,customers;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://Lesson48DemoDBServer.ernestoporchett.repl.co";
  let route= "/customers"
  customers = $.getJSON(link+route).responseJSON;

  generateCards(customers)


}

function generateCards(customers){
  let centerpanel = document.getElementById("centerpanel");


    

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