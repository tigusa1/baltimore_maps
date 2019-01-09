    var paths = d3.selectAll("path")                                   // get the svg xml container
      .data(baltimoreNames)
      .attr("name",function(d){return d})
    console.log(paths)
    console.log(paths[0][1])                                           // examine a path    
