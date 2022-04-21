// var example=[
// 	{"Level":"State", "hhgq":"1", "cenrace":"10"},
// 	{"Level":"County", "hhgq":"3", "cenrace":"2"},
// 	{"Level":"Tract", "hhgq":"1", "cenrace":"6"}
// ]

var example=[
    {"Query": "hhgq", "State":"1","County":"3","Tract":"1"},
    {"Query": "cenrace", "State":"10","County":"2","Tract":"6"}
]


PrintTable(example);

function PrintTable(example) {
    d3.select("#example").html("");
    let row = d3.select("#example").append("tr").selectAll("th").data(Object.keys(example[0])).enter().append("th").text(function(d) {return d});
    // for (var j in example[0])
    //     row.append("th").text(j);

    // example.forEach(function(d) {
    //     var row=d3.select("#example").append("tr");
    //     for (var j in d)
    //          row.append("td").text(d[j]);
    // });
    for (var i = 0; i < example.length; i++) {
        row = d3.select("#example").append("tr");
        for (var j in example[i])
            row.append("td").data([{"row": i, "col": j, "data": example}]).text(example[i][j])
                .attr("style", function(d) {
                    val = parseInt(example[d.row][d.col])
                    if (isNaN(val)) return "background-color: hsl(0,100%,100%)"
                    max = Math.max(...example.map(d => Math.max(...Object.values(d).map(x => parseInt(x)).filter(x => !isNaN(x)))))
                    min = Math.min(...example.map(d => Math.min(...Object.values(d).map(x => parseInt(x)).filter(x => !isNaN(x)))))
                    l = 100 - Math.round((val - min) / (max - min) * 50)
                    return "background-color: hsl(116,40%," + l + "%)"
                })
                .attr("contenteditable", true)
                .on('mouseout', function (moevent) {
                    d = moevent.fromElement.__data__
                    example[d.row][d.col] = this.innerText;
                    PrintTable(example);
                });
		row.append("td").append("input").attr("type", "button").attr("value", "Del Lev").data([{"row": i, "col": j, "data": example}])
				.on("click", function(moevent) {
					d = moevent.target.__data__
					lev2del = example[d['row']]['Level']
					example = example.filter(level => level['Level']!==lev2del)
					//moevent.target.parentElement.parentElement.remove()
                    d3.select("#albutton").on('click', function (d) {AddLevel(example)})
                    d3.select("#aqbutton").on('click', function (d) {AddQuery(example)})
                    PrintTable(example);
				})
    }

    row = d3.select("#example").append("tr");
    for (var j in example[0]) {
        td = row.append("td")
        if (j!=='Level') td.attr("align", "center").append("input").attr("type", "checkbox").attr("id", "cb"+j)
        else td.text("UnitQuery")
            //.label("Del Qry").data([{"col": j}])
        //     .on("click", function(moevent) {
        //         for (var i in example) {
        //             d = moevent.target.__data__
        //             delete example[i][d['col']]
        //         }
        //         d3.select("#albutton").on('click', function (d) {AddLevel(example)})
        //         d3.select("#aqbutton").on('click', function (d) {AddQuery(example)})
        //         PrintTable(example);
        // })
    }
    row = d3.select("#example").append("tr");
    for (var j in example[0]) {
        td = row.append("td")
        if (j!=='Level') td.append("button").text("Del Qry").data([{"col": j}]).on("click", function(moevent) {
           for (var i in example) {
               d = moevent.target.__data__
               delete example[i][d['col']]
           }
        d3.select("#albutton").on('click', function (d) {AddLevel(example)})
        d3.select("#aqbutton").on('click', function (d) {AddQuery(example)})
        PrintTable(example);
        })
    }
    PrintPythonCode(example);
}

function AddLevel(data) {
	newlevel = {}
	for (var j in data[0]) {
		newlevel[j] = "None"
	}
	data.push(newlevel)
	PrintTable(data)
}

function AddQuery(data) {
    qname = document.getElementById("qname").value
    for (var i in data) {
        data[i][qname] = "None"
    }
    PrintTable(data)
}


function PrintPythonCode(data) {
    denom = document.getElementById('denom').value
    codetext = ""
    total = 0
    data.forEach(function(d) {
        for (var j in d) {
            if ((j!=='Level') && (!isNaN(parseInt(d[j])))) total = total + parseInt(d[j])
        }
    })

    data.forEach(function (d) {
        codetext = codetext + "strategy[CC.DPQUERIES][\"" + d['Level'] + "\"] = ("
        for (var j in d)
            cb = document.getElementById("cb"+j)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (!cb.checked)) codetext = codetext + '"' + j + '", '
        codetext = codetext + ")\n"
    })

    data.forEach(function (d) {
        codetext = codetext + "strategy[CC.QUERIESPROP][\"" + d['Level'] + "\"] = ("
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j])))) codetext = codetext + 'Fr(' + d[j] + ', ' + parseInt(denom) + '), '
        codetext = codetext + ")\n"
    })
	
	codetext += "\n\n" + JSON.stringify(data)

    document.getElementById('total').textContent = total + "/" + denom + "  (" + total / denom + ")"
    d3.select("#python").text(codetext)
        // "test_strategy = defaultdict(lambda: defaultdict(dict))  # So as to avoid having to specify empty dicts and defaultdicts\n" +
        // "        test_strategy.update({\n" +
        // "            CC.GEODICT_GEOLEVELS: levels,\n" +
        // "            CC.DPQUERIES + \"default\": (\n" +
        // "                \"sex * hhage\",\n" +
        // "                \"sex * hisp * race * hhtype_dhch\",\n" +
        // "                \"elderly * sex * hhtype_dhch\",\n" +
        // "                \"hisp * race\",\n" +
        // "                \"hhage * hhtype_dhch * sex\",\n" +
        // "                \"detailed\"),\n" +
        // "            CC.QUERIESPROP + \"default\": (tuple(Fr(num, 100) for num in (20, 20, 20, 15, 10, 10))),\n" +
        // "            # CC.DPQUERIES: {},\n" +
        // "            # CC.QUERIESPROP: {},\n" +
        // "            # CC.UNITDPQUERIES: {},\n" +
        // "            # CC.UNITQUERIESPROP: {},\n" +
        // "            # CC.VACANCYDPQUERIES: {},\n" +
        // "            # CC.VACANCYQUERIESPROP: {},\n" +
        // "        })\n" +
        // "\n" +
        // "        def queries(level):\n" +
        // "            return test_strategy[CC.DPQUERIES + \"default\"]\n" +
        // "\n" +
        // "        def allocation(level):\n" +
        // "            if level == CC.GEOLEVEL_COUNTY:\n" +
        // "                return tuple(Fr(num, 100) for num in (10, 30, 20, 15, 10, 10))\n" +
        // "            if level == CC.GEOLEVEL_TRACT:\n" +
        // "                return tuple(Fr(num, 100) for num in ( 5, 35, 20, 15, 10, 10))\n" +
        // "            if level == CC.GEOLEVEL_BLOCK_GROUP:\n" +
        // "                return tuple(Fr(num, 100) for num in ( 1, 39, 20, 15, 10, 10))\n" +
        // "            if level == CC.GEOLEVEL_BLOCK:\n" +
        // "                return tuple(Fr(num, 100) for num in (39,  1, 20, 15, 10, 10))\n" +
        // "            return test_strategy[CC.QUERIESPROP + \"default\"]\n" +
        // "\n" +
        // "        for level in test_strategy[CC.GEODICT_GEOLEVELS]:\n" +
        // "            test_strategy[CC.DPQUERIES][level] = queries(level)\n" +
        // "            test_strategy[CC.QUERIESPROP][level] = allocation(level)\n" +
        // "            test_strategy[CC.UNITDPQUERIES][level] = (\"tenvacgq\", \"vacantoccupied\", )\n" +
        // "            test_strategy[CC.UNITQUERIESPROP][level] = (Fr(4, 100), Fr(1, 100), )\n" +
        // "\n" +
        // "        return test_strategy")
    d3.select("body").selectAll("img").data(example).enter().append("img").attr("src",function(d) {return d.Image})
}
