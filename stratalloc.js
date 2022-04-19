var example=[
	{"Level":"State", "hhgq":"1", "cenrace":"2"},
	{"Level":"County", "hhgq":"1", "cenrace":"2"},
	{"Level":"Tract", "hhgq":"1", "cenrace":"2"}
]

PrintTable(example);

function PrintTable(example) {
    d3.select("#example").html("");
    var row = d3.select("#example").append("tr");//.selectAll("th").data(d3.keys(example[0])).enter().append("th").text(function(d) {return d});
    for (var j in example[0])
        row.append("th").text(j);

    // example.forEach(function(d) {
    //     var row=d3.select("#example").append("tr");
    //     for (var j in d)
    //          row.append("td").text(d[j]);
    // });
    for (var i = 0; i < example.length; i++) {
        var row = d3.select("#example").append("tr");
        for (var j in example[i])
            row.append("td").data([{"row": i, "col": j, "data": example}]).text(example[i][j]).attr("contenteditable", true)
                .on('mouseout', function (moevent) {
                    d = moevent.fromElement.__data__
                    d.data[d.row][d.col] = this.innerText;
                    PrintPythonCode(d.data);
                });
    }
    PrintPythonCode(example);
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
            if ((j!=='Level') && (!isNaN(parseInt(d[j])))) codetext = codetext + '"' + j + '", '
        codetext = codetext + ")\n"
    })

    data.forEach(function (d) {
        codetext = codetext + "strategy[CC.QUERIESPROP][\"" + d['Level'] + "\"] = ("
        for (var j in d)
            if (j!=='Level') codetext = codetext + 'Fr(' + d[j] + ', ' + parseInt(denom) + '), '
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
