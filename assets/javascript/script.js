
var moodSelectContainer = document.querySelector("#mood-btn");


var cssTheme = function(){
    document.getElementById("mood-btn").addEventListener("click",function(){
        var moodOptions = document.querySelector("#moods").value;
        var linkArray = ["./assets/css/style.css","./assets/css/dark.css"]
        if(moodOptions=="happy"){
            document.getElementById("default").href="./assets/css/happy.css"
        }
        else if(moodOptions == "sad"){
            document.getElementById("default").href="./assets/css/sad.css"
        }
        else if (moodOptions == "angry"){
            document.getElementById("default").href="./assets/css/angry.css"
        }
        else if (moodOptions == "excited"){
            document.getElementById("default").href="./assets/css/excited.css"
        }

    })

    
};

var getApis = function(moodOptions) {
  
 
   fetch("https://api.spotify.com/v1/search?q=" + /*this will be the mood selector -> */ moodOptions +
 
   "&type=" + /* this will be where the music options are selected -> */ "playlist" /* Should we still give different options? */
 
    + "&market=US&limit=10&offset=5", {
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': /* this is the token key -> */'Bearer BQACnpJddIGaYL3E3HKVcOu477Q-puqnDh5RWolNPlvWEovPqvTCWxhBEMjy2vfnAM-r0WEiblpbi1lNO-UQGqzrIrcMMSzpX4k071iCVgNpbfKweEtwfTE3TSceVTQysuiXdrUQ6IlRGc4'
        }
   })
       .then(function(response) {
           return response.json();
       })
       .then(function(data){
           console.log(data);
           console.log(moodOptions);
 
           // runs spotifyDisplay function
           spotifyDisplay(data);
       });
 
   var qouteApi = "https://goquotes-api.herokuapp.com/api/v1/all/quotes?New%20item=" + /* this will be the mood selector for quote api -> */ moodOptions;
 
   fetch(qouteApi)
       .then(function(response) {
           return response.json();
       })
       .then(function(data) {
           console.log(data);
 
           quoteDisplay(data);
       });
};
 
// Displays Spotify Iframe
function spotifyDisplay (data) {
 
   // clears spotify container
   document.querySelector("#spotify-display").innerHTML = "";
 
   // grabs spotify container
  var spotifyContainer = document.querySelector('#spotify-display');
 
   // dynamically creates iframe to display spotify embed code
  var spotifyEmbedEl = document.createElement('iframe');
  spotifyEmbedEl.setAttribute("src", "https://open.spotify.com/embed/playlist/" + data.playlists.items[Math.floor(Math.random() * 10)].id);
  spotifyEmbedEl.setAttribute("allowtransparency", "true");
  spotifyEmbedEl.setAttribute("allow", "encrypted-media");
 
  //applies spotify css class
  spotifyEmbedEl.classList = "spotify-embed-El";
 
  // appendsChild iframe to spotify container
  spotifyContainer.appendChild(spotifyEmbedEl);
 
};
 
// Displays Quote in H3
function quoteDisplay (data) {
   // clears quote container
   document.querySelector("#quote-display").innerHTML = "";
 
   // grabs quote container
   var quoteContainer = document.querySelector('#quote-display');
 
   // dynamically creates h2 to display quote generated
   var quoteEl = document.createElement("h3")
   quoteEl.textContent = '"' + data.quotes[Math.floor(Math.random() *200)].text + '"' + " -" + data.quotes[Math.floor(Math.random() *200)].author ;
 
   quoteContainer.appendChild(quoteEl);
 
};
 
// Runs JavaScript on Selecting Value
function moodSubmitHandler(event) {
   event.preventDefault();
 
   // pulls select value
   var moodOptions = document.querySelector("#moods").value;
 
   //runs getApi fetch function
   getApis(moodOptions);
 
   saveMood(moodOptions);
 
};
// Saves selected moods
function saveMood(mood) {
   var moodArr = JSON.parse(localStorage.getItem("saved-moods"))
   || [];
    moodArr.push(mood);
    localStorage.setItem("saved-moods", JSON.stringify(moodArr));
}
 
// Shows history of moods selected
function renderMoods() {
   var moodArr = JSON.parse(localStorage.getItem("saved-moods"))
   || [];
   for (var i = 0; i < moodArr.length; i++) {
       const chosenMood = moodArr[i];
       console.log(chosenMood);
       var li = $("<li>");
       var button = $("<button>");
       button.text(chosenMood);
       button.addClass("history-btns");
       li.append(button);
       $("#mood-list").append(li);
   }
}
 
renderMoods();
 
$(".history-btns").click(function() {
   var moodOptions  = ($(this)[0].innerText);
    if(moodOptions=="happy"){
       document.getElementById("default").href="./assets/css/happy.css"
     }
    else if(moodOptions == "sad"){
    document.getElementById("default").href="./assets/css/sad.css"
    }
    else if (moodOptions == "angry"){
        document.getElementById("default").href="./assets/css/angry.css"
    }
    else if (moodOptions == "excited"){
        document.getElementById("default").href="./assets/css/excited.css"
    }
   
 
   getApis(moodOptions);
  
})
 
cssTheme()
// on value select runs moodSubmitHandler function
moodSelectContainer.addEventListener("click", moodSubmitHandler);

