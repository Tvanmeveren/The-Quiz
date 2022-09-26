
//-------------------------------------------------------------Here is where i get the score info from the local storage--------------------------

const namesEnter = document.querySelector("#yesnames");
const listNames = document.querySelector("#lastscores");
const eventNames = document.querySelector("#finalscore");
var name1 = [];

function listingNames() {
  
  listNames.innerHtml = "";
  //-------------------------------------------------here is the loops for the names---------------------------------------------------------
  for (var i = 0; i < name1.length; i++) {
    var nightName = name1[i];

    //--------------------------------------------------------gives the html a list---------------------------------------------------------
    var li = document.createElement("li");
    li.textContent = nightName;
    li.setAttribute("data-index", i);

    listNames.appendChild(li);
  }
}
//---------------------------------------------------------------------takes name from local storage--------------------------------------------
function init() {
  var storedNames = JSON.parse(localStorage.getItem("name1"));
  if (storedNames !== null) {
    name1 = storedNames;
  }
  
  listingNames();
}
//---------------------------------------------------------------Stores names--------------------------------------------------------------------
function storedNames() {
  //stringify and sends names to local storage
  localStorage.setItem("name1", JSON.stringify(name1));
}

eventNames.addEventListener("submit", function (event) {
  event.preventDefault();
  var nameInput = namesEnter.value.trim();
  if (nameInput === "") {
    return;
  }

  name1.push(nameInput);
  namesEnter.value = "";

  listingNames();
  storedNames();
});


//------------------------------------------------------------Event listener-----------------------------------------
listNames.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    nightName.splice(index, 1);

    storedNames();
    listingNames();
  }
});


init()