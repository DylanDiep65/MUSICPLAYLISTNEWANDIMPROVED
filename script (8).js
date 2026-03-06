console.log("js console");

let data;
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        data = JSON.parse(xhttp.responseText);
       console.log(data);

        data.forEach(function(song){ 
            let card = document.createElement("div");
                card.classList.add("card");

                let textData =
                "<div class='song_name'>" + "Song: "+ song.song_name + "</div>" +
                "<span>" + 
                "Artist: " +" "+ song.artist +  "<div class='song_name'>" + "Date: "+ song.songDate + "</div>"
                "</span>";

                card.innerHTML = textData;

                if(song.songIMG){
                    card.style.backgroundImage = "url(" + song.songIMG + ")";

                }

                if(song.songIMG){
                    card.style.backgroundImage = "url(" + song.songIMG + ")";

                }

          grid.appendChild(card);
        });
    }
};

xhttp.open("GET", "musicdata.JSON", true);
xhttp.send();

function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen").click();


 function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (song) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
    "<div class='song_name'>" + "Song: "+ song.song_name + "</div>" +
    "<span>" + 
    "Artist: " +" "+ song.artist +  "<div class='song_name'>" + "Date: "+ song.songDate + "</div>"
    "</span>";
      if(song.songIMG){
        card.style.backgroundImage = "url(" + song.songIMG + ")";

    }

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");}

  console.log("form script started");

// Safe load for form page (works even if script.js isn't loaded first)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}

var form = document.querySelector("form");
var nameInput = document.querySelector("#name-input");
var artistInput = document.querySelector("#artist-input");
var dateInput = document.querySelector("#date-input");
var imgInput = document.querySelector("#imageUrl-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    song_name: nameInput.value, 
artist: artistInput.value, 
songIMG: imgInput.value,
songDate: dateInput.value,

    
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});




var laufey = document.getElementById("Falling"); 

function LaplayAudio() { 
  laufey.play(); 
} 

function LapauseAudio() { 
  laufey.pause(); 
} 

var joker = document.getElementById("P5R"); 

function P5playAudio() { 
  joker.play(); 
} 

function P5pauseAudio() { 
  joker.pause(); 
} 

var wind = document.getElementById("Sonic"); 

function SonicplayAudio() { 
  wind.play(); 
} 

function SonicpauseAudio() { 
  wind.pause(); 
} 

var mario = document.getElementById("Dusty"); 

function DustyplayAudio() { 
  mario.play(); 
} 

function DustypauseAudio() { 
  mario.pause(); 
} 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var sortAZBtn = document.querySelector("#sort-az");
var sortZABtn = document.querySelector("#sort-za");


// sort click handlers for buttons, add two buttons to your html and give them the same IDs as below
sortAZBtn.addEventListener("click", function () {
  sortByTitle("az");
});
  sortZABtn.addEventListener("click", function () {
  sortByTitle("za");
});


// sort function
function sortByTitle(direction) {
  // data should be the variable that stores the list of data, make sure the name matches what you have
  data.sort(function (a, b) {
    var titleA = String(a.title).toLowerCase();
    var titleB = String(b.title).toLowerCase();


    if (titleA < titleB) {
      if (direction == "az") {
        return -1;
      } else {
        return 1;
      }
    }


    if (titleA > titleB) {
      if (direction == "az") {
        return 1;
      } else {
        return -1;
      }
    }


    return 0;
  });


  makeCards();
}
