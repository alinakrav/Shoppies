function search() { 
    let s = searchbar.value;
    let url = "https://omdbapi.com/?s=" + s + "&apikey=d4c7f15a";
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onload = function() {
        show_results(request.response);
        return request.response;
    }
    request.send();
}

function show_results(resp) {
    // erase old results
    results.innerHTML = '';
    let j = 5;
    for (let i = 0; i < j; i++) {
        // if wrong index, continue to the next one
        try {
            let movie = resp.Search[i]
            if (movie.Type != "movie") 
                j++;
            else
                // list elements will be id'd as their i index when nominated
                results.innerHTML += '<li><a id="' + i + '"> ' + movie.Title + ' (' + movie.Year + ') </a><button class="nominate_btn" onclick="nominate(' + i + ')">Nominate</button></li>';
        } finally { continue; }
    }

    document.getElementById("response").innerHTML = JSON.stringify(resp);
}

function nominate(id) {
    let elem = document.getElementById(id);
    // delete li element on button click
    nominations.innerHTML += '<li>' + elem.innerText + ' <button onclick="remove(this, ' + id + ')">Remove</button></li>';
    // disable button when nominated
    elem.parentNode.children[1].disabled = true;

    // display banner when 5 nominated
    if (nominations.children.length == 5)
        console.log('banner: 5 nominated');
}

function remove(elem, id) {
    // remove item from results
    elem.parentNode.outerHTML = '';
    // enable button again
    document.getElementById(id).parentNode.children[1].disabled = false;
}