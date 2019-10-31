//let jobTitle = "actor";
//let placeToLive = "South America";
//let nameOfPartner = "Per";
//let numKids = "5";
//
//
//let fortuneTeller = "Jobtitle: " + jobTitle + "PlaceToLive: " + placeToLive + "NameOfPartner: " + nameOfPartner + "NumberOfKids: " + numKids;
//
//console.log(fortuneTeller);



//const button = ""
//const boxElement = document.querySelector("#change-button");
//const name = "Astrid";
//
//button.addEventListener("click", displayName)
//
//function displayName(){
//    console.log(name);
//    boxElement.textContent = name;
//    boxElement.classList.toggle("change")
//}


let hero = document.querySelector("#hero");
hero.addEventListener("click", startAnimation);

function startAnimation(){
    hero.classList.toggle("enable");
}

