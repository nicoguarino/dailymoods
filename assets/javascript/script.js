var getApis = function(search) {

    fetch("https://api.spotify.com/v1/search?q=" + /*this will be the mood selector -> */"Sad" + 

    "&type=" + /* this will be where the music options are selected -> */ "track%2Cartist%2Cplaylist"
    
     + "&market=US&limit=5&offset=5", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer BQDPcyBYJrBFUkoEF7KExnNUn7Hw3kmh9FUBpjGBHCOozlsyRPAlnsLbJicZArMXFLPgKBw88J-12zYwycO2jw7FtdXT69AyKXRGVjhZ-W5LvKZ4ROmQgn2RH1X5MBT49m_mXY4X7SGumiI'
         }
    }) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
        });
};

getApis();