
let employees;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://raw.githubusercontent.com/PorchettaEP/JSONFILES/refs/heads/main";
  let route= "/employees"
  employees = $.getJSON(link+route).responseJSON;

  generateCards(employees);

  
}

function generateCards(employees){

  let mainpanel = document.getElementById("centerpanel");
  
  // Clear previous cards
  mainpanel.innerHTML = "";
  
  for(let i = 0; i < employees.length; i++){
    let employee = employees[i];
    
    // Create text for the button
    let text = `${employee.EmployeeID} - ${employee.FirstName} ${employee.LastName}`;
    
    // Create content with city and flag
    let content = `<h3>${employee.City}</h3>`;
    content += `<img src='../cities/${employee.City}.PNG' style='width:100px; height:auto;'>`;
    
    // Create and render modal
    let modal = new Modal(text, content);
    modal.render("centerpanel");
  }
  
  // Update count
  document.getElementById("count").innerHTML = `Total: ${employees.length} employees`;
}

function filter(){
  let city = document.getElementById("city").value;
  console.log(city);

  let newEmployees = []; //create a list of songs searched for
  
  for(let i=0; i<employees.length;i++){
    let employee = employees[i] //get each sog
    //make sure the list is no
    if( employee.City == city ) {
          //add to the new list
          newEmployees.push(employee);
       }
  }
  console.log(`number found ${newEmployees.length}`)
  generateCards(newEmployees);
  
}