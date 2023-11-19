var titlearray = ["men navy blue sweat tshirt","Men Black MAMGP T7 Sweat Sporty Jacket","Men Black Action Parkview Lifestyle Shoes","Women Black Solid Lightweight Leather Jacket","Women Blue Solid Shirt Dress"];
var descriptionarray = ["United Colors of Benetton","Puma","Hush Puppies","Zudio","SASSAFRAS"];
var dynamic = document.querySelector('.container');
for (var i = 0; i < titlearray.length; i++){
    var fetch = document.querySelector('.container').innerHTML
    dynamic.innerHTML = `<div id="cards" class="boxes">
    <div class="box-content">
        <h2>${titlearray[i]}</h2>
      <p>${descriptionarray[i]}</p>
      <a href="#">Read more</a>
    </div>
  </div>` +fetch ;
  var bgimg=document.getElementById(`cards${i}`);
  bgimg.style.backgroundImage = `(url../img/${titlearray[i]}.webp)`;
}
