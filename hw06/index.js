/*
Javis Wu
SoftDev2 pd6
HW05 -- The Best Defense Against Tyranny
2016-03-22
*/
var chart = document.getElementById("chart");
states=["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

delegates=[50,28,58,40,172,37,28,16,99,76,19,32,69,57,30,40,46,46,23,38,42,59,38,40,52,27,36,30,23,51,24,95,72,28,66,43,28,71,19,50,29,58,155,40,16,49,44,34,42,29]

stats={};
total=0;
for (x=0;x<states.length;x++){
    stats[states[x]]=delegates[x];
    total+=delegates[x];
}

allottedStates=["Iowa","New Hampshire","South Carolina","Nevada","Alabama","Alaska","Arkansas","Georgia","Massachusetts","Minnesota","Oklahoma","Tennessee","Texas","Vermont","Virginia","Kansas","Kentucky","Louisiana","Maine","Hawaii","Idaho","Michigan","Mississippi","Wyoming","Florida","Illinois","Missouri","North Carolina","Ohio"]

allotted=0;
for (x=0;x<allottedStates.length;x++){
    allotted+=stats[allottedStates[x]];
}
unallotted=total-allotted;

var stateCounter=0;
var scale = d3.scale.linear()
   .domain([0,d3.max(delegates)])
   .range([0,1000]);
d3.select(".chart")
  .selectAll("div")
    .data(states)
  .enter().append("div")
    .style("width",function(d){
	return scale(stats[d])+"px";})
    .style("background-color",function(d){
	for (x=0;x<allottedStates.length;x++){
	    if(allottedStates[x]==d){
		return "green";
	    }
	}
	return "red";
    })
    .text(function(d){
	return d+":"+stats[d];
    });



/*DEMOCRATS*/
var demoStates = {"Alabama": 53, "Alaska": 16, "Arizona": 75, "Arkansas" : 32, "California": 475, "Colorado": 66, "Connecticut": 55, "Delaware": 21, "Florida": 214, "Georgia": 102, "Hawaii": 25, "Idaho": 23,
"Illinois": 156, "Indiana": 83, "Iowa": 44, "Kansas": 33, "Kentucky": 55, "Louisiana": 51, "Maine": 25, "Maryland": 95, "Massachusetts": 91, "Michigan": 130, "Minnesota": 77, "Mississippi": 36,
"Missouri": 71, "Montana": 21, "Nebraska": 25, "Nevada": 35, "New Hampshire": 24, "New Jersey": 126, "New Mexico": 34, "New York": 257, "North Carolina": 107, "North Dakota": 18, "Ohio": 143, "Oklahoma": 38,
"Oregon": 61, "Pennsylvania": 189, "Rhode Island": 24, "South Carolina": 53, "South Dakota": 20, "Tennessee": 67, "Texas": 222, "Utah": 33, "Vermont": 16, "Virginia": 95, "Washington": 101, "West Virginia": 29,
"Wisconsin": 86, "Wyoming": 14};

var demoAllotted = ["Texas", "Florida", "Ohio", "Illinois", "Georgia", "Michigan", "Virginia", "North Carolina", "Massachusetts", "Alabama", "Tennessee", "South Carolina", "Louisiana", "Missouri", "Minnesota", "Colorado", "Iowa", "Arkansas",
"Nevada", "Oklahoma", "Nebraska", "Kansas", "Maine", "New Hampshire"];

var demoDelegates = d3.values(demoStates);
var demoStateNames = d3.keys(demoStates);

var demoScale = d3.scale.linear()
   .domain([0,d3.max(demoDelegates)])
   .range([0,1700]);

window.addEventListener("click",function(){
    var demCounter=0;
    total=0;
    allotted=0;
    for (x=0;x<demoDelegates.length;x++){
	total+=demoDelegates[x];
    }
    for (x=0;x<demoAllotted.length;x++){
	allotted+=demoStates[demoAllotted[x]];
	console.log(demoAllotted[x]);
    }
    unallotted = total - allotted;
    d3.select(".chart")
	.selectAll("div")
        .remove();
    d3.select(".chart")
        .selectAll("div")
	.data(demoStateNames)
	.enter().append("div")
        .transition()
        .duration(1000)
	.style("width",function(d){
	    console.log("doing here");
	    return demoScale(demoStates[d])+"px";})
	.style("background-color",function(d){
	    for (x=0;x<demoAllotted.length;x++){
		if(demoAllotted[x]==d){
		    return "green";
		}
	    }
	    return "red";
	})
	.text(function(d){
	    return d+":"+demoStates[d];
	});
    d3.select("#total")
	.html("Total Delgates:"+total);
    
    d3.select("#allotted")
	.html("Allotted Delegates:"+allotted);
    
    d3.select("#unallotted")
	.html("Unallotted Delegates:"+unallotted);
    
    d3.select("#party")
        .html("Democratic Party Delegates");

    d3.select("#title")
        .html("Democratic Convention Delegates");
});
    
d3.select("#total")
  .html("Total Delgates:"+total);

d3.select("#allotted")
  .html("Allotted Delegates:"+allotted);

d3.select("#unallotted")
  .html("Unallotted Delegates:"+unallotted);
