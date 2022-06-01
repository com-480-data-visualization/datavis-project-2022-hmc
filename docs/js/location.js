function init(){
   
   document.getElementById('custom-select').onchange = function() {
       update(this.value,3,'France')
  }
    var region = null;
   var selected_country = "";
   var selected_region = "";
   var format = d3.format(",");
   

  var   width = 950,
        height = 650,
       active = d3.select(null);

   var projection = d3.geoMercator()
       .center([0, 40])
       .scale([width / (2 * Math.PI)])
       .translate([width / 2, height / 2]);
  
   var zoom = d3.zoom().on("zoom", zoomed);
   var path = d3.geoPath().projection(projection);

   var tip_country = d3.tip()
        .attr('class', 'd3-tip')
        .offset([0, 0])
        .html(function(d) {
        return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>Number of wine: </strong><span class='details'>" + format(d.properties.nb_wine) +"</span>";
    })

   var tip_region = d3.tip()
        .attr('class', 'd3-tip')
        .offset([0, 0])
        .html(function(d) {
        return "<strong>Region: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>Number of wine: </strong><span class='details'>" + format(d.properties.nb_wine) +"</span>";
    })

    var color_country = d3.scaleThreshold()
        .domain([1, 500,1000,1500,2000,2500,3000,3500,4000])
        .range(["rgb(200, 200, 200)", "rgb(225, 237, 250)", "rgb(172, 210, 252)", "rgb(144, 195, 252)", "rgb(120, 181, 250)", "rgb(82, 159, 247)", "rgb(46, 125, 217)","rgb(25, 95, 176)","rgb(10, 70, 140)", "rgb(4, 44, 92)"]);

    var color_region = d3.scaleThreshold()
       .domain([1, 50, 100, 150, 250, 500, 1000,  1500, 2000, 2500])
       .range(["rgb(200, 200, 200)", "rgb(190, 245, 116)", "rgb(127, 221, 76)", "rgb(50,205,50)", "rgb(58, 157, 35)", "rgb(34, 139, 34)", "rgb(0, 128, 0)", "rgb(9, 106, 9)", "rgb(0, 86, 27)", "rgb(2, 56, 25)"]);

    var svg = d3.select("#map")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .on("click", stopped, true);

    svg.append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height)
        .on("click", reset);

    var g = svg.append("g");
    svg.call(tip_country);
    svg.call(tip_region);

    queue()
        .defer(d3.json, "https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-hmc/main/docs/output.json")
        .defer(d3.json, "https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-hmc/main/docs/wine_loc.json")
        .defer(d3.json, "https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-hmc/main/docs/Wine.json") 
        .await(ready);

    function ready(error, world, wine_loc, wine_dataset) {
        var level = 0;
        update('year',level,"")

        if (error) throw error;

        for (var i = 0; i < wine_loc.length; i++) {
          counter=0;
          country = wine_loc[i]['name'];
          for (var j=0; j < wine_dataset.length; j++){
            if (country == wine_dataset[j]['nation']){
              counter++
            };
          }
          wine_loc[i]['nb_wine'] = counter;
        }

        var wineById  = {};
        wine_loc.forEach(function(d) { wineById[d.id] = +d.nb_wine; });
        topojson.feature(world, world.objects.WORLD).features.forEach(function(d) { d.properties.nb_wine = wineById[d.properties.id] })

        g.append("g")
          .attr("class", "boundary")
        .selectAll("boundary")
          .data(topojson.feature(world, world.objects.WORLD).features)
          .enter().append("path")
          .attr("d", path)
          .on("click", function(d){
             if (active.node() === this) return reset();
             // active.classed("active", false);
             // active = d3.select(this).classed("active", true);
             country = d.properties['name']
             bounds = path.bounds(d)
             clicked(bounds, world, country, wine_loc, wine_dataset)
          })
          .style("fill",function(d) { return color_country(wineById[d.properties.id]); })
          .style('stroke', 'white')
          .style('stroke-width', 1.5)
          .style("opacity",0.8)
             .style("stroke","white")
             .style('stroke-width', 0.3)
             .on('mouseover',function(d){
                 tip_country.show(d);

                 d3.select(this)
                      .style("opacity", 1)
                      .style("stroke","white")
                      .style("stroke-width",3);
             })
            .on('mouseout', function(d){
                 tip_country.hide(d);

                 d3.select(this)
                       .style("opacity", 0.8)
                       .style("stroke","white")
                       .style("stroke-width",0.3);
            });
    };

    function clicked(bounds, world, country, wine_loc, wine_dataset) {
      var level = 1;
      update('year',level,country)

      region = d3.selectAll('.region')
                 .remove();

      phrase.textContent = "";
      region_selected.textContent = "";
      country_selected.textContent = "";
      country_selected.textContent = "You have selected " + country + " !";

      let nb_wine_country = wine_loc.find(el => el.name === country);
      nb_wine_country = nb_wine_country.nb_wine;
      if (nb_wine_country == 0) {
        result_nb_wine.textContent = "";
        result_nb_wine.textContent = "Unfortunatly, there is no data for " + country + "... Try an other country !";
      }
      else if (nb_wine_country > 0) {
        result_nb_wine.textContent = "";
        result_nb_wine.textContent = "Perfect, there is " + nb_wine_country + " different sort of wine in " + country;
      }

      var dx = bounds[1][0] - bounds[0][0],
          dy = bounds[1][1] - bounds[0][1],
          x_bounds = (bounds[0][0] + bounds[1][0]) / 2,
          y_bounds = (bounds[0][1] + bounds[1][1]) / 2,
          scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
          translate = [width / 2 - scale * x_bounds, height / 2 - scale * y_bounds];

      svg.transition()
         .duration(750)
         .call( zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1]).scale(scale) );

      variable = world.objects[country];

      if(typeof variable === 'undefined') {//region_selected.textContent = "Pas de region";
      } 
      else{ 
        data_region = wine_dataset.filter( element => element.nation == country)
        var region_of_country = [];
        for(i=0; i<variable.geometries.length; i++){
          counter = 0;
          var nom_region =  variable.geometries[i].properties.name;
          for (var j=0; j < data_region.length; j++){
            if (nom_region ==  data_region[j]['region']){
              counter++
            };
            variable.geometries[i].properties['nb_wine'] = counter
          }
        }
      var wineByName  = {};
      variable.geometries.forEach(function(d) { wineByName[d.properties.name] = +d.properties.nb_wine; });

      g.append("g")
          .attr("class", "boundary region hidden")
      .selectAll("boundary")
          .data(topojson.feature(world, variable).features)
          .enter().append("path")
          .style("fill",function(d) { return color_region(wineByName[d.properties.name]); })
          .on("click", function(d){
            if (active.node() === this) return reset_color(bounds, world, country, wine_loc, wine_dataset);

            active.classed("active", false)
             .style("fill",function(d) { return color_region(wineByName[d.properties.name]); })
            active = d3.select(this).classed("active", true)
             .style("fill", "orange")
            region_selected.textContent = "";
            region_selected.textContent = "You have selected "  + d.properties.name+ " !";
            region_select= d.properties.name
            level = 2;
            update('year',level,region_select)
  
             
          })
          .style("opacity", 0.8)
          .style("stroke", "white")
          .style("stroke-width", 0.2)
          .attr("d", path)
          .on('mouseover',function(d){
                 tip_region.show(d);

                 d3.select(this)
                      .style("opacity", 1)
                      .style("stroke","white")
                      .style("stroke-width",1);
             }) 
          .on('mouseout', function(d){
                 tip_region.hide(d);

                 d3.select(this)
                       .style("opacity", 0.8)
                       .style("stroke","white")
                       .style("stroke-width",0.2);
            });
          
      region = d3.selectAll('.region');
      region.classed('hidden', false);
      }
    }

    function reset_color(bounds, world, country, wine_loc, wine_dataset){
      clicked(bounds, world, country, wine_loc, wine_dataset)
    }

    function reset() {  
      level = 0;
      update('nation', level, "");
      region.classed('hidden', true);
      result_nb_wine.textContent = "";
      region_selected.textContent = "";
      phrase.textContent = "Click on a country to show statistics !";
      country_selected.textContent = "";
      svg.transition()
         .duration(1000)
         .call( zoom.transform, d3.zoomIdentity );
    }

    function zoomed() {
      g.style("stroke-width", 1.5 / d3.event.transform.k + "px");
      g.attr("transform", d3.event.transform); 
    }

    function stopped() {
      if (d3.event.defaultPrevented) d3.event.stopPropagation();
    }


    function getItems(input,selectedVar) {
      var arr = input, obj = {};
      for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i][selectedVar]]) { obj[arr[i][selectedVar]] = 1;} 
        else if (obj[arr[i][selectedVar]]) {obj[arr[i][selectedVar]] += 1;}
      }
      return obj;
    }

    function keep_n_elements(data){
      var props = Object.keys(data).map(function(key) {
        return { key: key, value: this[key] };}, data);
      props.sort(function(p1, p2) { return p2.value - p1.value; });
      var topN = props.slice(0, 30).reduce(function(obj, prop) {
       obj[prop.key] = prop.value;
       return obj;
      }, {});
      var data_conv = []
      for (const property in topN) {
        if (property != 0){
          data_conv.push({
            name: property,
            count: data[property]
          });
        }
      }
      return data_conv;
    }

    var levelRem = (function() {
      var value = 0;
      function levelRem(a) {
        if(a != 3){
          value = a;
        }
        return value;
      }
    return levelRem;
    }());

    var locationRem = (function() {
      var loc = 0;
      function locationRem(level,location) {
        if(level != 3){
          loc = location;
        }
        return loc;
      }
    return locationRem;
    }());

    var margin_graph = {top_g: 10, right_g: 10, bottom_g: 50, left_g: 120},
        width_graph = 380 - margin_graph.left_g - margin_graph.right_g,
        height_graph = 500 - margin_graph.top_g - margin_graph.bottom_g;

    var svg = d3.select("#graph")
        .append("svg")
           .attr("width", width_graph + margin_graph.left_g + margin_graph.right_g)
           .attr("height", height_graph + margin_graph.top_g + margin_graph.bottom_g)
        .append("g")
           .attr("transform", "translate(" + margin_graph.left_g + "," + margin_graph.top_g + ")");

    var y = d3.scaleBand()
        .range([ 0, height_graph ])
        .padding(0.2);
    var yAxis = svg.append("g").attr("class", "myYaxis")

    var x = d3.scaleLinear().range([ 0, width_graph]);
    var xAxis = svg.append("g").attr("transform", "translate(0," + height_graph + ")");

    

    function update(selectedVar,level,location) {

      d3.json("https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-hmc/main/docs/Wine.json", function(data) {
        location = locationRem(level,location)
        level = levelRem(level)

        if (level ==1){
          console.log("data filtered")
          data = data.filter( element => element.nation ==location)
        }
        if(level == 2){
          console.log("data filtered")
          data = data.filter( element => element.region ==location)
        }

        data = getItems(data,selectedVar);
        data = keep_n_elements(data);

        y.domain(data.map(function(d) { return d.name; }))
        yAxis.transition().duration(1000).call(d3.axisLeft(y))

        x.domain([0, d3.max(data, function(d) { return +d.count }) ]);
        xAxis.transition().duration(1000).call(d3.axisBottom(x)).selectAll("text")
             .attr("transform", "translate(-10,0)rotate(-45)")
             .style("text-anchor", "end");;

        d3.select('#graph').selectAll("rect").remove()

        var u = svg.selectAll("rect")
           .data(data)

        u
           .enter()
           .append("rect")
           .merge(u)
           .transition()
           .duration(1000)
           .attr("x", x(0) )
           .attr("y", function(d) { return y(d.name); })
           .attr("width", function(d) { return x(d.count); })
           .attr("height", y.bandwidth() )
           .attr("fill", "#69b3a2")
      })
    }

}
