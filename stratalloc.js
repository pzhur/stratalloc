// var example=[
// 	{"Level":"State", "hhgq":"1", "cenrace":"10"},
// 	{"Level":"County", "hhgq":"3", "cenrace":"2"},
// 	{"Level":"Tract", "hhgq":"1", "cenrace":"6"}
// ]
// var unitqueries = {}//= {'hhgq': false, 'cenrace': true}

var example = [{"Level":"US","sex * hisp * hhtenshort * race * family_nonfamily_size":"None","sex * hisp * hhtenshort * race * hhage * family_nonfamily_size":"None","detailed":"662","tenvacgq":"162","multig * hisp * hhtenshort":"500","hisp * hhtenshort":"134","partner_type_own_child_status * sex * hhtenshort":"500","coupled_hh_type * hisp * hhtenshort":"500","sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize":"162","sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"162","hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"134","hisp * hhtenshort * race":"134"},{"Level":"State","sex * hisp * hhtenshort * race * family_nonfamily_size":"None","sex * hisp * hhtenshort * race * hhage * family_nonfamily_size":"None","detailed":"2750","tenvacgq":"2250","multig * hisp * hhtenshort":"500","hisp * hhtenshort":"135","partner_type_own_child_status * sex * hhtenshort":"500","coupled_hh_type * hisp * hhtenshort":"500","sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize":"2250","sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"2250","hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"135","hisp * hhtenshort * race":"134"},{"Level":"County","sex * hisp * hhtenshort * race * family_nonfamily_size":"None","sex * hisp * hhtenshort * race * hhage * family_nonfamily_size":"None","detailed":"700","tenvacgq":"700","multig * hisp * hhtenshort":"500","hisp * hhtenshort":"135","partner_type_own_child_status * sex * hhtenshort":"500","coupled_hh_type * hisp * hhtenshort":"500","sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize":"700","sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"700","hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"135","hisp * hhtenshort * race":"None"},{"Level":"Prim","sex * hisp * hhtenshort * race * family_nonfamily_size":"None","sex * hisp * hhtenshort * race * hhage * family_nonfamily_size":"None","detailed":"614","tenvacgq":"614","multig * hisp * hhtenshort":"614","hisp * hhtenshort":"135","partner_type_own_child_status * sex * hhtenshort":"614","coupled_hh_type * hisp * hhtenshort":"614","sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize":"614","sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"614","hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"135","hisp * hhtenshort * race":"None"},{"Level":"Tract_Subset_Group","sex * hisp * hhtenshort * race * family_nonfamily_size":"None","sex * hisp * hhtenshort * race * hhage * family_nonfamily_size":"None","detailed":"614","tenvacgq":"614","multig * hisp * hhtenshort":"614","hisp * hhtenshort":"135","partner_type_own_child_status * sex * hhtenshort":"614","coupled_hh_type * hisp * hhtenshort":"614","sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize":"614","sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"614","hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"135","hisp * hhtenshort * race":"None"},{"Level":"Tract_Subset","sex * hisp * hhtenshort * race * family_nonfamily_size":"1950","sex * hisp * hhtenshort * race * hhage * family_nonfamily_size":"1950","detailed":"1950","tenvacgq":"1950","multig * hisp * hhtenshort":"None","hisp * hhtenshort":"None","partner_type_own_child_status * sex * hhtenshort":"None","coupled_hh_type * hisp * hhtenshort":"None","sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize":"None","sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"None","hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"None","hisp * hhtenshort * race":"None"},{"Level":"Block_Group","sex * hisp * hhtenshort * race * family_nonfamily_size":"672","sex * hisp * hhtenshort * race * hhage * family_nonfamily_size":"672","detailed":"672","tenvacgq":"672","multig * hisp * hhtenshort":"None","hisp * hhtenshort":"None","partner_type_own_child_status * sex * hhtenshort":"None","coupled_hh_type * hisp * hhtenshort":"None","sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize":"None","sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"None","hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"None","hisp * hhtenshort * race":"None"},{"Level":"Block","sex * hisp * hhtenshort * race * family_nonfamily_size":"25","sex * hisp * hhtenshort * race * hhage * family_nonfamily_size":"25","detailed":"25","tenvacgq":"25","multig * hisp * hhtenshort":"None","hisp * hhtenshort":"None","partner_type_own_child_status * sex * hhtenshort":"None","coupled_hh_type * hisp * hhtenshort":"None","sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize":"None","sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"None","hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize":"None","hisp * hhtenshort * race":"None"}]
var unitqueries = {'tenvacgq': true}
var csv = "Level,multig * hisp * hhtenshort,hisp * hhtenshort,hisp * hhtenshort * race,partner_type_own_child_status * sex * hhtenshort,coupled_hh_type * hisp * hhtenshort,sex * hisp * hhtenshort * race * DetailedCoupleTypeMultGenDetOwnChildSize,sex * hisp * hhtenshort * race * hhage * DetailedCoupleTypeMultGenDetOwnChildSize,hhtenshort * hhage * DetailedCoupleTypeMultGenDetOwnChildSize,detailed,sex * hisp * hhtenshort * race * family_nonfamily_size,sex * hisp * hhtenshort * race * hhage * family_nonfamily_size\n" +
    "Block,,,,,,,,,25,25,25\n" +
    "Block_Group,,,,,,,,,672,672,672\n" +
    "Tract_Subset,,,,,,,,,1950,1950,1950\n" +
    "Tract_Subset_Group,614,135,,614,614,614,614,135,614,,\n" +
    "Prim,614,135,,614,614,614,614,135,614,,\n" +
    "County,500,135,,500,500,700,700,135,700,,\n" +
    "State,500,135,134,500,500,2250,2250,135,2750,,\n" +
    "US,500,134,134,500,500,162,162,134,662,,\n"


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
                    if (min >= 0)  {
                        l = 100 - Math.round((val - min) / (max - min) * 50)
                        h = "116"
                    } else {
                        if (val >= 0) {
                            // Use this to have separate scale on negatives
                            // l = 100 - Math.round((val) / (max) * 50)
                            // Use this to have the same scale on negatives, scaled to the larger absolute value of min or max
                            l = 100 - Math.round((val) / (mag) * 50)
                            h = "116"
                        } else {
                            // Use this to have separate scale on negatives
                            // l = 100 - Math.round((val) / (min) * 50)
                            // Use this to have the same scale on negatives, scaled to the larger absolute value of min or max
                            l = 100 - Math.round((val) / (-mag) * 50)
                            h = "0"
                        }
                    }
                    return "background-color: hsl(" + h + ",40%," + l + "%)"
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
        if (j!=='Level') {
            let cb = td.attr("align", "center").append("input").data([{"col": j}]).attr("type", "checkbox").attr("id", "cb"+j)
            if (unitqueries[j]) cb.attr("checked","1")
            cb.on("change", function (moevent) {
                unitqueries[moevent.target.__data__['col']] = !unitqueries[moevent.target.__data__['col']];
                PrintTable(example)
            })
        }

        else td.text("UnitQuery")
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

    // Uneditable table with floats
    d3.select("#float").html("");
    denom = document.getElementById('denom').value
    row = d3.select("#float").append("tr").selectAll("th").data(Object.keys(example[0])).enter().append("th").text(function(d) {return d});

    for (var i = 0; i < example.length; i++) {
        row = d3.select("#float").append("tr");
        for (var j in example[i])
            row.append("td").data([{"row": i, "col": j, "data": example}]).text(isNaN(parseInt(example[i][j]))?example[i][j]:example[i][j]/denom)
                .attr("style", function(d) {
                    val = parseInt(example[d.row][d.col])
                    if (isNaN(val)) return "background-color: hsl(0,100%,100%)"
                    max = Math.max(...example.map(d => Math.max(...Object.values(d).map(x => parseInt(x)).filter(x => !isNaN(x)))))
                    min = Math.min(...example.map(d => Math.min(...Object.values(d).map(x => parseInt(x)).filter(x => !isNaN(x)))))
                    mag = Math.max(Math.abs(min), Math.abs(max))
                    if (min >= 0)  {
                            l = 100 - Math.round((val - min) / (max - min) * 50)
                            h = "116"
                    } else {
                        if (val >= 0) {
                            // Use this to have separate scale on negatives
                            // l = 100 - Math.round((val) / (max) * 50)
                            // Use this to have the same scale on negatives, scaled to the larger absolute value of min or max
                            l = 100 - Math.round((val) / (mag) * 50)
                            h = "116"
                        } else {
                            // Use this to have separate scale on negatives
                            // l = 100 - Math.round((val) / (min) * 50)
                            // Use this to have the same scale on negatives, scaled to the larger absolute value of min or max
                            l = 100 - Math.round((val) / (-mag) * 50)
                            h = "0"
                        }
                    }
                    return "background-color: hsl(" + h + ",40%," + l + "%)"
                })
    }

    // Uneditable table with geolevel totals
    d3.select("#geoleveltotals").html("");
    denom = document.getElementById('denom').value
    row = d3.select("#geoleveltotals").append("tr")
    row.append("th").text("Geolevel Name")
    row.append("th").text("Geolevel Total")
    row.append("th").text("Geolevel Total Prop")

    total = 0
    example.forEach(function(d) {
        for (var j in d) {
            if ((j!=='Level') && (!isNaN(parseInt(d[j])))) total = total + parseInt(d[j])
        }
    })
    for (var i = 0; i < example.length; i++) {
        gl_total = 0
        row = d3.select("#geoleveltotals").append("tr");
        for (var j in example[i])
            gl_total += isNaN(parseInt(example[i][j]))?0:parseInt(example[i][j])
        row.append("td").text(example[i].Level)
        row.append("td").text(gl_total/denom)
        row.append("td").text(Math.round(gl_total/total*10000)/100 + "%")
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
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (!unitqueries[j])) codetext = codetext + '"' + j + '", '
        codetext = codetext + ")\n"
    })

    data.forEach(function (d) {
        codetext = codetext + "strategy[CC.QUERIESPROP][\"" + d['Level'] + "\"] = ("
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (!unitqueries[j])) codetext = codetext + 'Fr(' + d[j] + ', ' + parseInt(denom) + '), '
        codetext = codetext + ")\n"
    })

    data.forEach(function (d) {
        codetext = codetext + "strategy[CC.UNITDPQUERIES][\"" + d['Level'] + "\"] = ("
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (unitqueries[j])) codetext = codetext + '"' + j + '", '
        codetext = codetext + ")\n"
    })

    data.forEach(function (d) {
        codetext = codetext + "strategy[CC.UNITQUERIESPROP][\"" + d['Level'] + "\"] = ("
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (unitqueries[j])) codetext = codetext + 'Fr(' + d[j] + ', ' + parseInt(denom) + '), '
        codetext = codetext + ")\n"
    })

    codetext += "\n\n OR \n\n"

    codetext += "strategy[CC.DPQUERIES] = {\n"
    data.forEach(function (d) {
        codetext += '\t"' + d['Level'] + '": ('
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (!unitqueries[j])) codetext = codetext + '"' + j + '", '
        codetext += "),\n"
    })
    codetext += "}\n"

    codetext += "strategy[CC.QUERIESPROP] = {\n"
    data.forEach(function (d) {
        codetext += '\t"' + d['Level'] + '": ('
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (!unitqueries[j])) codetext = codetext + 'Fr(' + d[j] + ', ' + parseInt(denom) + '), '
        codetext = codetext + "),\n"
    })
    codetext += "}\n"

    codetext += "strategy[CC.UNITDPQUERIES] = {\n"
    data.forEach(function (d) {
        codetext += '\t"' + d['Level'] + '": ('
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (unitqueries[j])) codetext = codetext + '"' + j + '", '
        codetext = codetext + "),\n"
    })
    codetext += "}\n"

    codetext += "strategy[CC.UNITQUERIESPROP] = {\n"
    data.forEach(function (d) {
        codetext += '\t"' + d['Level'] + '": ('
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (unitqueries[j])) codetext = codetext + 'Fr(' + d[j] + ', ' + parseInt(denom) + '), '
        codetext = codetext + "),\n"
    })
    codetext += "}\n"

    codetext += "\n\n OR \n\n"

    codetext += "strategy[CC.DPQUERIES] = {\n"
    data.forEach(function (d) {
        codetext += '\t"' + d['Level'] + '": ('
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (!unitqueries[j])) codetext = codetext + '"' + j + '", '
        codetext += "),\n"
    })
    codetext += "}\n"

    codetext += "numerators = {\n"
    data.forEach(function (d) {
        codetext += '\t"' + d['Level'] + '": ('
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (!unitqueries[j])) codetext = codetext + d[j] + ', '
        codetext = codetext + "),\n"
    })
    codetext += "}\n"

    codetext += "strategy[CC.QUERIESPROP] = {gl: tuple(Fr(num, " + parseInt(denom) + ") for num in nums)  for gl,nums in numerators.items()}\n"

    codetext += "strategy[CC.UNITDPQUERIES] = {\n"
    data.forEach(function (d) {
        codetext += '\t"' + d['Level'] + '": ('
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (unitqueries[j])) codetext = codetext + '"' + j + '", '
        codetext = codetext + "),\n"
    })
    codetext += "}\n"

    codetext += "unitnumerators = {\n"
    data.forEach(function (d) {
        codetext += '\t"' + d['Level'] + '": ('
        for (var j in d)
            if ((j!=='Level') && (!isNaN(parseInt(d[j]))) && (unitqueries[j])) codetext = codetext + d[j] + ', '
        codetext = codetext + "),\n"
    })
    codetext += "}\n"

    codetext += "strategy[CC.UNITQUERIESPROP] = {gl: tuple(Fr(num, " + parseInt(denom) + ") for num in nums)  for gl,nums in unitnumerators.items()}\n"


	
	codetext += "\n\n" + JSON.stringify(data)

    document.getElementById('total').textContent = total + "/" + denom + "  (" + total / denom + ")"
    d3.select("#python").text(codetext)
}

var fileInput = d3.select('#files').node();
var uploadButton = d3.selectAll('#upload');
var loadButton = d3.selectAll('#load')

//find uploaded filename
var fname,ext;

uploadButton.on('click', function() {
    if (!window.FileReader) {
        alert('Your browser is not supported')
    }

    // Create a reader object
    var reader = new FileReader();
    if (fileInput.files.length) {

        fname = document.getElementById("files").value.split('\\');
        fname = fname[fname.length-1].split('/');
        fname = fname[fname.length-1];
        var nandext=fname.split('.');
        ext = nandext[nandext.length-1];

        var textFile = fileInput.files[0];
        reader.readAsBinaryString(textFile);
        reader.onload = function processFile(e) {
            var csvdata = (ext==='xlsx')?to_csv(XLSX.read(e.target.result, {type: 'binary'})):((ext==='csv')?e.target.result:"");
            if (csvdata!=="") {
                example = d3.csvParse(csvdata)
                PrintTable(example);
            }
            else alert('Only CSV and XLSX files are supported')
        };
    } else {
        alert('Please upload a file before continuing')
    }
});

loadButton.on('click', function() {
    csvdata = document.getElementById("csvtext").value
    if (csvdata!=="") {
        example = d3.csvParse(csvdata)
        PrintTable(example);
    }
});

