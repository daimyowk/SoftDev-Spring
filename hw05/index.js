/*
Javis Wu
SoftDev2 pd6
HW05 -- The Best Defense Against Tyranny
2016-03-22
*/
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

d3.select("#total")
  .html("Total Delgates:"+total);

d3.select("#allotted")
  .html("Allotted Delegates:"+allotted);

d3.select("#unallotted")
  .html("Unallotted Delegates:"+unallotted);
    
