let songs;

async function init(){
  let link = "https://improved-goldfish-x5q7vpqrp79wh545-8500.app.github.dev";
  let route= "/songs";
  info = await fetch(link + route);
  songs = await info.json();

  generateCards(songs);
}

function generateCards(songs){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<songs.length; i++){
    let s = songs[i];
    build += `<div class="card">`;
    build += `<h3> Song Name : ${s.Name}</h3>`;
    build += `<div> Album : ${s.Album}</div>`;
    build += `<div> Composer : ${s.Composer}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }

  centerpanel.innerHTML = build;
}

function filter(){
  let name = document.getElementById("song").value.toLowerCase();

  let songList = [];

  for(let i=0; i<songs.length; i++){
    let s = songs[i];
    if(s.Name.toLowerCase().includes(name)){
      songList.push(s);
    }
  }

  generateCards(songList);
}
