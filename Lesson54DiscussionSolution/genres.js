let data;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://8c0317a3-da6d-4163-9776-1ea1738ed5bc-00-2h0e19hu2e8g5.janeway.replit.dev";
  let route= "/genres"
  data = $.getJSON(link+route).responseJSON;
  console.log(data)

  generateCards(data)


}

function generateCards(data){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<data.length; i++){
    let genres = data[i]
    build += `<div class="card" >`
    build += `<h3> Genres: ${genres.Name}</h3>`;
    build += `<hr>`;
    build += `</div>`;
  }

  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
  

}

function filter(){
  let name = document.getElementById("genres").value;
  
  let newData = []; //create a list of songs searched for
  
  for(let i=0; i<data.length;i++){
    let genres = data[i] //get each sog
    //make sure the list is no
    if( genres.Name  == name ) {
          //add to the new list
          newData.push(genres);
       }
  }
  generateCards(newData);
  
}