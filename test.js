var films = {};
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=1748ba92&t=Black+panther", true);

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        films = JSON.parse(xmlhttp.responseText);

        var Title = films["Title"];
        var Year = films["Year"];
        var Rated = films["Rated"];
        var Released = films["Released"];
        var Runtime = films["Runtime"];
        console.log("Le film " + Title + "(" + Year + ") est sorti le " + Released + " dure " + Runtime + " et à un PEGI " + Rated + "");
    }
};


//-->
xmlhttp.send(null);