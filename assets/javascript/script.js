// values from html select
var moodSelectContainer = document.querySelector("#mood-btn");


var getApis = function(moodOptions) {
    

    fetch("https://api.spotify.com/v1/search?q=" + /*this will be the mood selector -> */ moodOptions + 

    "&type=" + /* this will be where the music options are selected -> */ "track%2Cartist%2Cplaylist"

     + "&market=US&limit=5&offset=5", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': /* this is the token key -> */'Bearer BQCKFjuPCmM-Nh264zW6I9HLl-J9tKdB5Lv62Oxm_MdBs7BcPwMG5amMR-NBvFtkS4SEc2_iuvehso97wNj70ywHPkLdCInXH9gnZexHUggJ6ZKwwc1iw69VVNfZJGUbryFFgqIMe4XveMc'
         }
    }) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            console.log(moodOptions);
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

function moodSubmitHandler(event) {
    event.preventDefault();

    var moodOptions = document.querySelector("#moods").value;

    getApis(moodOptions);
};



moodSelectContainer.addEventListener("click", moodSubmitHandler);