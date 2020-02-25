//this function helps the animated icon image cross as you click on it
function myFunction(x) {
    x.classList.toggle("change");
  }
  //end of toggling the icon

 const menu = document.querySelector('.container');
 const dMenu = document.querySelector('.dMenu'); 

 menu.addEventListener('click', e => {
    //dMenu.style.display = "block";
    location.href = "nav.html";
 })