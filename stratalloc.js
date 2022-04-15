var example=[
	{"Level":"State", "hhgq":"1", "cenrace":"2"},
	{"Level":"County", "hhgq":"1", "cenrace":"2"},
	{"Level":"Tract", "hhgq":"1", "cenrace":"2"}
]

PrintTable(example);

function PrintTable(example) {
    d3.select("#example").html("");
    var row=d3.select("#example").append("tr");//.selectAll("th").data(d3.keys(example[0])).enter().append("th").text(function(d) {return d});
	console.log(example)
    for (var j in example[0])
        row.append("th").text(j);

    // example.forEach(function(d) {
    //     var row=d3.select("#example").append("tr");
    //     for (var j in d)
    //          row.append("td").text(d[j]);
    // });
    for (var i=0; i<example.length; i++) {
        var row=d3.select("#example").append("tr");
        for (var j in example[i])
             row.append("td").data([{"row":i,"col":j,"data":example}]).text(example[i][j]).attr("contenteditable",true)
                .on('mouseout',function(d) {
                    d.data[d.row][d.col]=this.innerText;
                    //PlotGanntChart(d.data);
                });
    };
    //d3.select("body").selectAll("img").data(example).enter().append("img").attr("src",function(d) {return d.Image})
};
