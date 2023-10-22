/*
function load(location) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 404) {
            window.location.href = "404"
        }
        else if (this.readyState == 4 && this.status == 200) {
           document.getElementById("content").innerHTML = this.responseText;
           if (location != "index") {
               var obj = { Page: location, Url: "/" + location};
                history.pushState(obj, obj.Page, obj.Url);
            }
        }
    };
    xhttp.open("GET", "get/" + location, true);
    xhttp.send();
}
*/