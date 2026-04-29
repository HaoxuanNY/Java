function init() {
  let centerpanel = document.getElementById("centerpanel");

  let build = "";
  build += `<p>This webpage will allow you to browse the Chinook database.</p>`;
  build += `<p>There are three pages where you can search for customers, employees and songs.</p>`;

  centerpanel.innerHTML = build;
}
