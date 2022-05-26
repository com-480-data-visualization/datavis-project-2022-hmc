d3.csv("cleansingWine.csv").then(function (data) {
var wine = data
var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

d3.select("tbody").html("") 

d3.event.preventDefault(); 

var inputValue = d3.select("#user-input").property("value");

var filteredWine = wine.filter(wine => wine.name.includes(inputValue));

/*<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"></script>*/
var output = _.sortBy(filteredWine, 'id').reverse()


for (var i = 0; i < filteredWine.length; i++) {
d3.select("tbody").insert("tr").html(
"<td>" + [i+1] + "</td>" +
"<td>" + (output[i]['name'])+"</a>"+"</td>" + 
"<td>" + (output[i]['producer'])+"</a>"+"</td>" + 
"<td>" + (output[i]['nation'])+"</td>" +
"<td>" + (output[i]['local1'])+"</td>" +
"<td>" + (output[i]['sweet'])+"</td" ) }
};
});

