// values from html select
var moodSelectContainer = document.querySelector("#mood-btn");


var getApis = function(moodOptions) {
    

    fetch("https://api.spotify.com/v1/search?q=" + /*this will be the mood selector -> */ moodOptions + 

    "&type=" + /* this will be where the music options are selected -> */ "playlist" /* Should we still give different options? */

     + "&market=US&limit=10&offset=5", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': /* this is the token key -> */'Bearer BQAkX8lgNuREcxdiKS5Gm4Xd-iO-QrWy84GMCISTi61dO39Lo_5uoVh0BVB0KbYvBPLhw6ic2_FuauiVCbqZJrLOLNKRm_353m93r_-_yCwV0NuCyaRe4nqbqbXEvsN58RvNtOweHfSPtN4'
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
        });
};

function spotifyDisplay (data) {

    // clears spotify container
    document.querySelector("#spotify-container").innerHTML = "";

    // grabs spotify container
   var spotifyContainer = document.querySelector('#spotify-container');

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

function moodSubmitHandler(event) {
    event.preventDefault();

    // pulls select value
    var moodOptions = document.querySelector("#moods").value;

    //runs getApi fetch function
    getApis(moodOptions);
};


// on value select runs moodSubmitHandler function
moodSelectContainer.addEventListener("click", moodSubmitHandler);