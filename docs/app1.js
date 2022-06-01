d3.csv("cleansingWine.csv").then(function (data) {
    var wine = data;
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);
    
    function runEnter() {
    
    /*const newObj = Object.fromEntries(Object.entries(names).map(([k]) => [k.toLowerCase()]));
    console.log(newObj)
    document.getElementById("p1").innerHTML = typeof wine;*/
    
    d3.select("tbody").html("") 
    
    d3.event.preventDefault();
    
    var inputValue = d3.select("#user-input").property("value");
    var inputValue1 = d3.select("#user-input1").property("value");
    var inputValue2 = d3.select("#user-input2").property("value");
    var inputValue3 = d3.select("#user-input3").property("value");
    var inputValue4 = d3.select("#user-input4").property("value");
    var inputValue5 = d3.select("#user-input5").property("value");
    var inputValue6 = d3.select("#user-input6").property("value");
    var inputValue7 = d3.select("#user-input7").property("value");
    var inputValue8 = d3.select("#user-input8").property("value");
    var inputValue9 = d3.select("#user-input9").property("value");
    var inputValue10 = d3.select("#user-input10").property("value");
    
    var inputSweet1 = d3.select("#user-sweet1").property("value");
    var inputSweet2 = d3.select("#user-sweet2").property("value");
    var inputSweet3 = d3.select("#user-sweet3").property("value");
    var inputSweet4 = d3.select("#user-sweet4").property("value");
    var inputSweet5 = d3.select("#user-sweet5").property("value");

    var inputAcidity1 = d3.select("#user-acidity1").property("value");
    var inputAcidity2 = d3.select("#user-acidity2").property("value");
    var inputAcidity3 = d3.select("#user-acidity3").property("value");
    var inputAcidity4 = d3.select("#user-acidity4").property("value");
    var inputAcidity5 = d3.select("#user-acidity5").property("value");

    var inputTannin1 = d3.select("#user-tannin1").property("value");
    var inputTannin2 = d3.select("#user-tannin2").property("value");
    var inputTannin3 = d3.select("#user-tannin3").property("value");
    var inputTannin4 = d3.select("#user-tannin4").property("value");
    var inputTannin5 = d3.select("#user-tannin5").property("value");

    var inputBody1 = d3.select("#user-body1").property("value");
    var inputBody2 = d3.select("#user-body2").property("value");
    var inputBody3 = d3.select("#user-body3").property("value");
    var inputBody4 = d3.select("#user-body4").property("value");
    var inputBody5 = d3.select("#user-body5").property("value");



    var filteredWine = wine.filter(wine => wine.name.includes(inputValue));
    var filteredWine1 = filteredWine.filter(wine => wine.nation.includes(inputValue1));
    var filteredWine2 = filteredWine1.filter(wine => wine.local1.includes(inputValue2));
    var filteredWine3 = filteredWine2.filter(wine => wine.year.includes(inputValue3));
    var filteredWine4 = filteredWine3.filter(wine => wine.price.includes(inputValue4));
    var filteredWine5 = filteredWine4.filter(wine => wine.producer.includes(inputValue5));
    var filteredWine6 = filteredWine5.filter(wine => wine.varieties1.includes(inputValue6));
    if (inputValue7 !== 'Type'){
        var filteredWine7 = filteredWine6.filter(wine => wine.type.includes(inputValue7));
    }
    else{
        var filteredWine7 = filteredWine6;
    }
    
    if (inputValue8 !== 'Volume'){
        var filteredWine8 = filteredWine7.filter(wine => wine.ml.includes(inputValue8));
    }
    else{
        var filteredWine8 = filteredWine7;
    }
    if (inputValue9 !== 'Use'){
        var filteredWine9 = filteredWine8.filter(wine => wine.use.includes(inputValue9));
    }
    else{
        var filteredWine9 = filteredWine8;
    }

    /*var filteredWine10 = filteredWine9.filter(wine => wine.abv.includes(inputValue10));*/
    var filteredWine10 = filteredWine9;

    if(document.getElementById("user-sweet1").checked == true){
        var filteredWine12 = filteredWine10.filter(wine => wine.sweet.includes(inputSweet1));
    }
    else{
        var filteredWine12 = [];
    }
    if(document.getElementById("user-sweet2").checked == true){
        var filteredWine13 = filteredWine10.filter(wine => wine.sweet.includes(inputSweet2));
    }
    else{
        var filteredWine13 = [];
    }
    if(document.getElementById("user-sweet3").checked == true){
        var filteredWine14 = filteredWine10.filter(wine => wine.sweet.includes(inputSweet3));
    }
    else{
        var filteredWine14 = [];
    }
    if(document.getElementById("user-sweet4").checked == true){
        var filteredWine15 = filteredWine10.filter(wine => wine.sweet.includes(inputSweet4));
    }
    else{
        var filteredWine15 = [];
    }
    if(document.getElementById("user-sweet5").checked == true){
        var filteredWine16 = filteredWine10.filter(wine => wine.sweet.includes(inputSweet5));
    }
    else{
        var filteredWine16 = [];
    }

    /*var filteredWine17 = {...filteredWine12,...filteredWine13,...filteredWine14,...filteredWine15,...filteredWine16};
    let test = Object.assign({}, filteredWine12, filteredWine13, filteredWine14, filteredWine15, filteredWine16);*/
    Array.prototype.push.apply(filteredWine12,filteredWine13)
    Array.prototype.push.apply(filteredWine12,filteredWine14)
    Array.prototype.push.apply(filteredWine12,filteredWine15)
    Array.prototype.push.apply(filteredWine12,filteredWine16)
    var filteredWine17=filteredWine12
    if(document.getElementById("user-sweet1").checked == false && document.getElementById("user-sweet2").checked == false && document.getElementById("user-sweet3").checked == false && document.getElementById("user-sweet4").checked == false && document.getElementById("user-sweet4").checked == false){
        var filteredWine17 = filteredWine10;
    }

    /*acidity*/
    if(document.getElementById("user-acidity1").checked == true){
        var filteredWine18 = filteredWine17.filter(wine => wine.acidity.includes(inputAcidity1));
    }
    else{
        var filteredWine18 = [];
    }
    if(document.getElementById("user-acidity2").checked == true){
        var filteredWine19 = filteredWine17.filter(wine => wine.acidity.includes(inputAcidity2));
    }
    else{
        var filteredWine19 = [];
    }
    if(document.getElementById("user-acidity3").checked == true){
        var filteredWine20 = filteredWine17.filter(wine => wine.acidity.includes(inputAcidity3));
    }
    else{
        var filteredWine20 = [];
    }
    if(document.getElementById("user-acidity4").checked == true){
        var filteredWine21 = filteredWine17.filter(wine => wine.acidity.includes(inputAcidity4));
    }
    else{
        var filteredWine21 = [];
    }
    if(document.getElementById("user-acidity5").checked == true){
        var filteredWine22 = filteredWine17.filter(wine => wine.acidity.includes(inputAcidity5));
    }
    else{
        var filteredWine22 = [];
    }

    Array.prototype.push.apply(filteredWine18,filteredWine19)
    Array.prototype.push.apply(filteredWine18,filteredWine20)
    Array.prototype.push.apply(filteredWine18,filteredWine21)
    Array.prototype.push.apply(filteredWine18,filteredWine22)

    /*var filteredWine23 = {...filteredWine18,...filteredWine19,...filteredWine20,...filteredWine21,...filteredWine22};*/
    var filteredWine23 = filteredWine18;
    if(document.getElementById("user-acidity1").checked == false && document.getElementById("user-acidity2").checked == false && document.getElementById("user-acidity3").checked == false && document.getElementById("user-acidity4").checked == false && document.getElementById("user-acidity4").checked == false){
        var filteredWine23 = filteredWine17;
    }

    if(document.getElementById("user-tannin1").checked == true){
        var filteredWine24 = filteredWine23.filter(wine => wine.tannin.includes(inputTannin1));
    }
    else{
        var filteredWine24 = [];
    }
    if(document.getElementById("user-tannin2").checked == true){
        var filteredWine25 = filteredWine23.filter(wine => wine.tannin.includes(inputTannin2));
    }
    else{
        var filteredWine25 = [];
    }
    if(document.getElementById("user-tannin3").checked == true){
        var filteredWine26 = filteredWine23.filter(wine => wine.tannin.includes(inputTannin3));
    }
    else{
        var filteredWine26 = [];
    }
    if(document.getElementById("user-tannin4").checked == true){
        var filteredWine27 = filteredWine23.filter(wine => wine.tannin.includes(inputTannin4));
    }
    else{
        var filteredWine27 = [];
    }
    if(document.getElementById("user-tannin5").checked == true){
        var filteredWine28 = filteredWine23.filter(wine => wine.tannin.includes(inputTannin5));
    }
    else{
        var filteredWine28 = [];
    }
    
    Array.prototype.push.apply(filteredWine24,filteredWine25)
    Array.prototype.push.apply(filteredWine24,filteredWine26)
    Array.prototype.push.apply(filteredWine24,filteredWine27)
    Array.prototype.push.apply(filteredWine24,filteredWine28)

    /*var filteredWine23 = {...filteredWine18,...filteredWine19,...filteredWine20,...filteredWine21,...filteredWine22};*/
    var filteredWine29 = filteredWine24;

    if(document.getElementById("user-tannin1").checked == false && document.getElementById("user-tannin2").checked == false && document.getElementById("user-tannin3").checked == false && document.getElementById("user-tannin4").checked == false && document.getElementById("user-tannin4").checked == false){
        var filteredWine29 = filteredWine23;
    }

    if(document.getElementById("user-body1").checked == true){
        var filteredWine30 = filteredWine29.filter(wine => wine.body.includes(inputBody1));
    }
    else{
        var filteredWine30 = [];
    }
    if(document.getElementById("user-body2").checked == true){
        var filteredWine31 = filteredWine29.filter(wine => wine.body.includes(inputBody2));
    }
    else{
        var filteredWine31 = [];
    }
    if(document.getElementById("user-body3").checked == true){
        var filteredWine32 = filteredWine29.filter(wine => wine.body.includes(inputBody3));
    }
    else{
        var filteredWine32 = [];
    }
    if(document.getElementById("user-body4").checked == true){
        var filteredWine33 = filteredWine29.filter(wine => wine.body.includes(inputBody4));
    }
    else{
        var filteredWine33 = [];
    }
    if(document.getElementById("user-body5").checked == true){
        var filteredWine34 = filteredWine29.filter(wine => wine.body.includes(inputBody5));
    }
    else{
        var filteredWine34 = [];
    }
    
    Array.prototype.push.apply(filteredWine30,filteredWine31)
    Array.prototype.push.apply(filteredWine30,filteredWine32)
    Array.prototype.push.apply(filteredWine30,filteredWine33)
    Array.prototype.push.apply(filteredWine30,filteredWine34)

    /*var filteredWine23 = {...filteredWine18,...filteredWine19,...filteredWine20,...filteredWine21,...filteredWine22};*/
    var filteredWine35 = filteredWine30;
    if(document.getElementById("user-body1").checked == false && document.getElementById("user-body2").checked == false && document.getElementById("user-body3").checked == false && document.getElementById("user-body4").checked == false && document.getElementById("user-body4").checked == false){
        var filteredWine35 = filteredWine29;
    }

    var output = _.sortBy(filteredWine35, 'id').reverse()

    /*document.getElementById("demo").innerHTML = "borrrr";*/
    /*for (var i = 0; i < filteredWine9.length; i++) {*/
    for (var i = 0; i < 30; i++) {
    d3.select("tbody").insert("tr").html(
    "<td>" + [i+1] + "</td>" +
    "<td>" + (output[i]['name'])+"</a>"+"</td>" + 
    "<td>" + (output[i]['producer'])+"</a>"+"</td>" + 
    "<td>" + (output[i]['nation'])+"</td>" +
    "<td>" + (output[i]['local1'])+"</td>" +
    "<td>" + (output[i]['type'])+"</td>" + 
    "<td>" + (output[i]['sweet'])+"</td>" + 
    "<td>" + (output[i]['acidity'])+"</td>" + 
    "<td>" + (output[i]['tannin'])+"</td>" + 
    "<td>" + (output[i]['body'])+"</td>" +
    "<td>" + (output[i]['use'])+"</td>" +
    "<td>" + (output[i]['ml'])+"</td>") }
    };
});