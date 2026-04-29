let employees;

async function init(){
  let link = "https://improved-goldfish-x5q7vpqrp79wh545-8500.app.github.dev";
  let route= "/employees";
  info = await fetch(link + route);
  employees = await info.json();

  generateCards(employees);
}

async function generateCards(employees){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<employees.length; i++){
    let emp = employees[i];
    build += `<div class="card">`;
    build += `<h3> Employee ID : ${emp.EmployeeId}</h3>`;
    build += `<div> First Name : ${emp.FirstName}</div>`;
    build += `<div> Last Name : ${emp.LastName}</div>`;
    build += `<div> City : ${emp.City}</div>`;
    build += `<img src='cities/${emp.City}.PNG'>`;
    build += `<hr>`;
    build += `</div>`;
  }

  centerpanel.innerHTML = build;
}

function filter(){
  let city = document.getElementById("city").value;

  let empList = [];

  for(let i=0; i<employees.length; i++){
    let emp = employees[i];
    if(emp.City == city){
      empList.push(emp);
    }
  }

  generateCards(empList);
}
