var searchLink = document.querySelector(".btn-form");
var searchPopap = document.querySelector(".search-form");
var input = searchPopap.querySelectorAll(".valid");
var error = searchPopap.querySelector(".search-form-error")
var arrive = searchPopap.querySelector("[name=date_in]");
var departure = searchPopap.querySelector("[name=date_out]");
var guest = searchPopap.querySelector("[name=guest]");
var children = searchPopap.querySelector("[name=children]");

arrive.removeAttribute("required");
departure.removeAttribute("required");
children.removeAttribute("required");
guest.removeAttribute("required");
arrive.focus();

searchLink.addEventListener("click", function(evt){
  evt.preventDefault();
  searchPopap.classList.toggle("search-form");
  arrive.focus();
  searchPopap.classList.remove("search-form-error");
});
searchPopap.addEventListener("submit", function(evt){
  for(var i = 0; i < 4; i++){
    if(input[i].value.trim() == ""){
    evt.preventDefault();
    searchPopap.classList.remove("search-form-error");
    searchPopap.offsetWidth = searchPopap.offsetWidth;
    searchPopap.classList.add("search-form-error");
    break;
  }
  }
});
window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    searchPopap.classList.remove("search-form");
    searchPopap.classList.remove("search-form-error");
  }
});


