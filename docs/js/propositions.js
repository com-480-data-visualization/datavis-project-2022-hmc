var propositions = function()
{
    d3.select("tbody").html("")  

    input = document.getElementById("user-input");
    inputValue = input.value.toLowerCase();
    
    var wine;

    d3.csv("cleansingWine.csv").then(function (data) {
        wine = data
        var filteredWine = wine.filter(wine => wine.name.includes(inputValue))
        
        var output = _.sortBy(filteredWine, 'id').reverse()

        var names;
        for (var i = 0; i < filteredWine.length; i++) {
            var n = (output[i]['name']) 
            names += n
            names += ', '
        }
        document.getElementById("demo").innerHTML = names
    });
}
