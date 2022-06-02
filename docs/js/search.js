d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-hmc/main/docs/data/cleansingWine.csv").then(function (data) {
    var wine = data;
    var button = d3.selectAll("#button");
    var button_reset = d3.select("#button_reset");
    var form = d3.select("#form");
    button.on("click", function(d){
    	runEnter(wine)
    });
    button_reset.on("click", function(d){
      inputValue1 =$("#user-input1").val("");
      inputValue6 =$("#user-input6").val("")
      runEnter(wine)
    });
    form.on("submit", function(d){
    	runEnter(wine)
    });
    autocomplete(wine)

})

function reset(){
  console.log("RESET")
  runEnter(wine)
}

function plot_stars(nb_stars){
  str = []
  for (var i = 0; i < nb_stars; i++){
    str = str + '<i class="fas fa-star text-primary" style="font-size:9px"></i>'
  }
  return str
}

function runEnter(wine) {
	    
    	d3.select("tbody").html("") 
        d3.event.preventDefault();
          
        var inputValue = d3.select("#user-input").property("value");
        var filteredWine = wine.filter(wine => wine.name.includes(inputValue));
        var inputValue1 = d3.select("#user-input1").property("value");
        var filteredWine = filteredWine.filter(wine => wine.nation.includes(inputValue1));
        var inputValue2 = d3.select("#user-input2").property("value");
        var filteredWine = filteredWine.filter(wine => wine.local1.includes(inputValue2));
        var inputValue3 = d3.select("#user-input3").property("value");
        var filteredWine = filteredWine.filter(wine => wine.year.includes(inputValue3));
        var inputValue4 = d3.select("#user-input4").property("value");
        var filteredWine = filteredWine.filter(wine => wine.price.includes(inputValue4));
        var inputValue5 = d3.select("#user-input5").property("value");
        var filteredWine = filteredWine.filter(wine => wine.producer.includes(inputValue5));
        var inputValue6 = d3.select("#user-input6").property("value");
        var filteredWine = filteredWine.filter(wine => wine.varieties1.includes(inputValue6));
        var inputValue7 = d3.select("#user-input7").property("value");
        if (inputValue7 !== 'Type'){var filteredWine = filteredWine.filter(wine => wine.type.includes(inputValue7));}
        var inputValue8 = d3.select("#user-input8").property("value");
        if (inputValue8 !== 'Volume'){var filteredWine = filteredWine.filter(wine => wine.ml==(inputValue8));}
        var inputValue9 = d3.select("#user-input9").property("value");
        if (inputValue9 !== 'Use'){var filteredWine = filteredWine.filter(wine => wine.use.includes(inputValue9));}
   
        var filteredWine_sweet = filteredWine;     


        var inputSweet1 = d3.select("#user-sweet1").property("value");
        if(document.getElementById("user-sweet1").checked == true){var filteredWine_sweet1 = filteredWine_sweet.filter(wine => wine.sweet.includes(inputSweet1));}
        else{var filteredWine_sweet1 = [];}
        
        var inputSweet2 = d3.select("#user-sweet2").property("value");
        if(document.getElementById("user-sweet2").checked == true){var filteredWine_sweet2 = filteredWine_sweet.filter(wine => wine.sweet.includes(inputSweet2));}
        else{var filteredWine_sweet2 = [];}

        var inputSweet3 = d3.select("#user-sweet3").property("value");
        if(document.getElementById("user-sweet3").checked == true){var filteredWine_sweet3 = filteredWine_sweet.filter(wine => wine.sweet.includes(inputSweet3));}
        else{var filteredWine_sweet3 = [];}
        
        var inputSweet4 = d3.select("#user-sweet4").property("value");
        if(document.getElementById("user-sweet4").checked == true){var filteredWine_sweet4 = filteredWine_sweet.filter(wine => wine.sweet.includes(inputSweet4));}
        else{var filteredWine_sweet4 = [];}
        
        var inputSweet5 = d3.select("#user-sweet5").property("value");
        if(document.getElementById("user-sweet5").checked == true){var filteredWine_sweet5 = filteredWine_sweet.filter(wine => wine.sweet.includes(inputSweet5));}
        else{var filteredWine_sweet5 = [];}

        Array.prototype.push.apply(filteredWine_sweet1,filteredWine_sweet2)
        Array.prototype.push.apply(filteredWine_sweet1,filteredWine_sweet3)
        Array.prototype.push.apply(filteredWine_sweet1,filteredWine_sweet4)
        Array.prototype.push.apply(filteredWine_sweet1,filteredWine_sweet5)
        //var filteredWine = filteredWine_sweet1;

        if(document.getElementById("user-sweet1").checked == false && document.getElementById("user-sweet2").checked == false && document.getElementById("user-sweet3").checked == false && document.getElementById("user-sweet4").checked == false && document.getElementById("user-sweet5").checked == false){
           var filteredWine;
        }
        else{var filteredWine = filteredWine_sweet1;}



        var filteredWine_acidity = filteredWine;     


        var inputAcidity1 = d3.select("#user-acidity1").property("value");
        if(document.getElementById("user-acidity1").checked == true){var filteredWine_acidity1 = filteredWine_acidity.filter(wine => wine.acidity.includes(inputAcidity1));}
        else{var filteredWine_acidity1 = [];}
        
        var inputAcidity2 = d3.select("#user-acidity2").property("value");
        if(document.getElementById("user-acidity2").checked == true){var filteredWine_acidity2 = filteredWine_acidity.filter(wine => wine.acidity.includes(inputAcidity2));}
        else{var filteredWine_acidity2 = [];}

        var inputAcidity3 = d3.select("#user-acidity3").property("value");
        if(document.getElementById("user-acidity3").checked == true){var filteredWine_acidity3 = filteredWine_acidity.filter(wine => wine.acidity.includes(inputAcidity3));}
        else{var filteredWine_acidity3 = [];}
        
        var inputAcidity4 = d3.select("#user-acidity4").property("value");
        if(document.getElementById("user-acidity4").checked == true){var filteredWine_acidity4 = filteredWine_acidity.filter(wine => wine.acidity.includes(inputAcidity4));}
        else{var filteredWine_acidity4 = [];}
        
        var inputAcidity5 = d3.select("#user-acidity5").property("value");
        if(document.getElementById("user-acidity5").checked == true){var filteredWine_acidity5 = filteredWine_acidity.filter(wine => wine.acidity.includes(inputAcidity5));}
        else{var filteredWine_acidity5 = [];}

        Array.prototype.push.apply(filteredWine_acidity1,filteredWine_acidity2)
        Array.prototype.push.apply(filteredWine_acidity1,filteredWine_acidity3)
        Array.prototype.push.apply(filteredWine_acidity1,filteredWine_acidity4)
        Array.prototype.push.apply(filteredWine_acidity1,filteredWine_acidity5)
        //var filteredWine = filteredWine_sweet1;

        if(document.getElementById("user-acidity1").checked == false && document.getElementById("user-acidity2").checked == false && document.getElementById("user-acidity3").checked == false && document.getElementById("user-acidity4").checked == false && document.getElementById("user-acidity5").checked == false){
           var filteredWine;
        }
        else{var filteredWine = filteredWine_acidity1;}



        var filteredWine_tannin = filteredWine;     


        var inputTannin1 = d3.select("#user-tannin1").property("value");
        if(document.getElementById("user-tannin1").checked == true){var filteredWine_tannin1 = filteredWine_tannin.filter(wine => wine.tannin.includes(inputTannin1));}
        else{var filteredWine_tannin1 = [];}
        
        var inputTannin2 = d3.select("#user-tannin2").property("value");
        if(document.getElementById("user-tannin2").checked == true){var filteredWine_tannin2 = filteredWine_tannin.filter(wine => wine.tannin.includes(inputTannin2));}
        else{var filteredWine_tannin2 = [];}

        var inputTannin3 = d3.select("#user-tannin3").property("value");
        if(document.getElementById("user-tannin3").checked == true){var filteredWine_tannin3 = filteredWine_tannin.filter(wine => wine.tannin.includes(inputTannin3));}
        else{var filteredWine_tannin3 = [];}
        
        var inputTannin4 = d3.select("#user-tannin4").property("value");
        if(document.getElementById("user-tannin4").checked == true){var filteredWine_tannin4 = filteredWine_tannin.filter(wine => wine.tannin.includes(inputTannin4));}
        else{var filteredWine_tannin4 = [];}
        
        var inputTannin5 = d3.select("#user-tannin5").property("value");
        if(document.getElementById("user-tannin5").checked == true){var filteredWine_tannin5 = filteredWine_tannin.filter(wine => wine.tannin.includes(inputTannin5));}
        else{var filteredWine_tannin5 = [];}

        Array.prototype.push.apply(filteredWine_tannin1,filteredWine_tannin2)
        Array.prototype.push.apply(filteredWine_tannin1,filteredWine_tannin3)
        Array.prototype.push.apply(filteredWine_tannin1,filteredWine_tannin4)
        Array.prototype.push.apply(filteredWine_tannin1,filteredWine_tannin5)
        //var filteredWine = filteredWine_sweet1;

        if(document.getElementById("user-tannin1").checked == false && document.getElementById("user-tannin2").checked == false && document.getElementById("user-tannin3").checked == false && document.getElementById("user-tannin4").checked == false && document.getElementById("user-tannin5").checked == false){
           var filteredWine;
        }
        else{var filteredWine = filteredWine_tannin1;}


         var filteredWine_body = filteredWine;     


        var inputBody1 = d3.select("#user-body1").property("value");
        if(document.getElementById("user-body1").checked == true){var filteredWine_body1 = filteredWine_body.filter(wine => wine.body.includes(inputBody1));}
        else{var filteredWine_body1 = [];}
        
        var inputBody2 = d3.select("#user-body2").property("value");
        if(document.getElementById("user-body2").checked == true){var filteredWine_body2 = filteredWine_body.filter(wine => wine.body.includes(inputBody2));}
        else{var filteredWine_body2 = [];}

        var inputBody3 = d3.select("#user-body3").property("value");
        if(document.getElementById("user-body3").checked == true){var filteredWine_body3 = filteredWine_body.filter(wine => wine.body.includes(inputBody3));}
        else{var filteredWine_body3 = [];}
        
        var inputBody4 = d3.select("#user-body4").property("value");
        if(document.getElementById("user-body4").checked == true){var filteredWine_body4 = filteredWine_body.filter(wine => wine.body.includes(inputBody4));}
        else{var filteredWine_body4 = [];}
        
        var inputBody5 = d3.select("#user-body5").property("value");
        if(document.getElementById("user-body5").checked == true){var filteredWine_body5 = filteredWine_body.filter(wine => wine.body.includes(inputBody5));}
        else{var filteredWine_body5 = [];}

        Array.prototype.push.apply(filteredWine_body1,filteredWine_body2)
        Array.prototype.push.apply(filteredWine_body1,filteredWine_body3)
        Array.prototype.push.apply(filteredWine_body1,filteredWine_body4)
        Array.prototype.push.apply(filteredWine_body1,filteredWine_body5)
        //var filteredWine = filteredWine_sweet1;

        if(document.getElementById("user-body1").checked == false && document.getElementById("user-body2").checked == false && document.getElementById("user-body3").checked == false && document.getElementById("user-body4").checked == false && document.getElementById("user-body5").checked == false){
           var filteredWine;
        }
        else{var filteredWine = filteredWine_body1;}

        //console.log(filteredWine)
        var output =filteredWine
        autocomplete(output)
        var output = _.sortBy(filteredWine, 'id').reverse()


    nb_result.textContent = "Result - " + output.length +"/21605";
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
    "<td>" + (plot_stars(parseInt(output[i]['sweet'].charAt(output[i]['sweet'].length - 1))))+"</td>" + 
    "<td>" + (plot_stars(parseInt(output[i]['acidity'].charAt(output[i]['acidity'].length - 1))))+"</td>" + 
    "<td>" + (plot_stars(parseInt(output[i]['tannin'].charAt(output[i]['tannin'].length - 1))))+"</td>" + 
    "<td>" + (plot_stars(parseInt(output[i]['body'].charAt(output[i]['body'].length - 1))))+"</td>" +
    "<td>" + (output[i]['use'])+"</td>" +
    "<td>" + (output[i]['varieties1'])+"</td>") 
    //+ "<td>" + (output[i]['ml'])+"</td>") 
    };
  
        

}




function autocomplete(wine){
	      var name =[];
          var nation = [];
          var region = [];
          var year = [];
          var price =[];
          var producer = [];
          var varieties = [];


          for(j=0; j<wine.length; j++){
          	     name[j] = wine[j]['name'];
          	     nation[j] = wine[j]['nation'];
          	     region[j] = wine[j]['local1'];
          	     year[j] = wine[j]['year'];
          	     price[j] = wine[j]['price'];
          	     producer[j] = wine[j]['producer'];
                 varieties[j] = wine[j]['varieties1'];
                 
           }
           
           name = name.filter((v, i, a) => a.indexOf(v) === i);
           nation = nation.filter((v, i, a) => a.indexOf(v) === i);
           region = region.filter((v, i, a) => a.indexOf(v) === i);
           year = year.filter((v, i, a) => a.indexOf(v) === i);
           price = price.filter((v, i, a) => a.indexOf(v) === i);

           varieties = varieties.filter((v, i, a) => a.indexOf(v) === i);

           
          
          $("#user-input").autocomplete({ source: function(request, response) {
          	    var results = $.ui.autocomplete.filter(name, request.term);
          		response(results.slice(0, 15));}
          });

          $("#user-input1").autocomplete({ source: function(request, response) {
          		var results1 = $.ui.autocomplete.filter(nation, request.term);
          		response(results1.slice(0, 15));}
          });

          $("#user-input2").autocomplete({ source: function(request, response) {
          		var results2 = $.ui.autocomplete.filter(region, request.term);
          		response(results2.slice(0, 15));}
          });

          $("#user-input3").autocomplete({ source: function(request, response) {
          		var results3 = $.ui.autocomplete.filter(year, request.term);
          		response(results3.slice(0, 15));}
          });

          $("#user-input4").autocomplete({ source: function(request, response) {
          		var results4 = $.ui.autocomplete.filter(price, request.term);
          		response(results4.slice(0, 15));}
          });

          $("#user-input5").autocomplete({ source: function(request, response) {
          		var results5 = $.ui.autocomplete.filter(producer, request.term);
          		response(results5.slice(0, 15));}
          });

          $( "#user-input6" ).autocomplete({source: varieties});

}
