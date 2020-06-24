function getsource(id) {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=d7daae62fbaf4723924df13fb28bc15c",
        success: function (res) {

            document.getElementById("sourceLink").innerHTML = res.sourceUrl
            document.getElementById("sourceLink").href = res.sourceUrl
        }
    });
}


function getrecepe(q) {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/search?apiKey=d7daae62fbaf4723924df13fb28bc15c&number=1&query=" + q,
        success: function (res) {

            document.getElementById("output").innerHTML = "<h3 class='titelRecept'>" + res.results[0].title + "</h3><br><img src='" + res.baseUri + res.results[0].image + "' width='100' /> Ready in " + res.results[0].readyInMinutes + " minutes"
            getsource(res.results[0].id)

        }
    });
}