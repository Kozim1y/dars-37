var elList = document.querySelector(".list");
var elResult = document.querySelector(".result");
var elItem = document.createElement("li");

var names = ["Jo'rabek", "Abduhoshim", "Ismoil", "Rashid", "Lola", "Sobirjon", "Bahodir", "Davron", "Fazliddin", "Muzaffar", "Odiljon", "Nizomiddin", "Anvarjon", "Abdulhamid", "Kamron"];

function longNames (arr) {
  var result = '';
    for(var j = 0; j<arr.length; j++) {
      var currentItem = arr[j];

      if(currentItem.length > result.length) {
        result = arr[j];
      }
    }
  return result
}

elList.appendChild(elItem);
elItem.value = names;
elItem.textContent = names;

elResult.textContent = longNames(names);