function search() { 
    let s = searchbar.value;
    let url = "https://omdbapi.com/?s=" + s + "&apikey=d4c7f15a";
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onload = function() {
        show_results(request.response);
        return request.response;
        // will display title of first movie in list
        // input.placeholder = resp.Search[0].Title;
    }
    request.send();
    return false;
}

function show_results(resp) {
    document.getElementById("response").innerHTML = JSON.stringify(resp);

}