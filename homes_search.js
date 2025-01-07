document.getElementById('processButton').addEventListener('click', async () => {
    const targetAccountName = prompt("Entrez votre pseudo:");

	var results;
	d3.csv("homes.csv", function(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i][1] == targetAccountName) {
				console.log(data[i][2]);
				results = data[i][2];
				var homes = results.split('},');
				
				var table = "<tr><th>Nom du home</th><th>Monde</th><th>X</th><th>Y</th><th>Z</th></tr>";
				
				for (var j = 0; j < homes.length; j++) {
					table += "<tr>"
					table += "<td>"
					table += homes[j].split("':")[0].substring(2);
					table += "</td>"
					table += "<td>"
					table += homes[j].split("'world-name': '")[1].split("'")[0];
					table += "</td>"
					table += "<td>"
					table += homes[j].split("'x': ")[1].split(",")[0];
					table += "</td>"
					table += "<td>"
					table += homes[j].split("'y': ")[1].split(",")[0];
					table += "</td>"
					table += "<td>"
					table += homes[j].split("'z': ")[1].split(",")[0];
					table += "</td>"
					table += "</tr>"
				}
				
				document.getElementById("results").innerHTML = table;
			}
		}
	});
	
});
