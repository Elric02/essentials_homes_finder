document.getElementById('processButton').addEventListener('click', async () => {
    const targetAccountName = prompt("Entrez votre pseudo:");

	var results;
	d3.csv("homes.csv", function(data) {
		for (var i = 0; i < data.length; i++) {
			console.log("test");
			/*if (i%100 == 0) {
				console.log(i);
			}
			if (data[i][1] == targetAccountName) {
				console.log(i);
				console.log(data[i][2]);
				results = data[i][2];
				var homes = results.split('},');
				
				var table = document.getElementById("results").innerHTML;
				
				for (var i = 0; i < homes.length; i++) {
					table += "<tr>"
					table += "<td>"
					table += homes[i].split("':")[0].substring(1);
					table += "</td>"
					table += "<td>"
					table += homes[i].split("'world-name': '")[1].split("'}")[0];
					table += "</td>"
					table += "<td>"
					table += homes[i].split("'x': ")[1].split(",")[0];
					table += "</td>"
					table += "<td>"
					table += homes[i].split("'y': ")[1].split(",")[0];
					table += "</td>"
					table += "<td>"
					table += homes[i].split("'z': ")[1].split(",")[0];
					table += "</td>"
					table += "</tr>"
				}
				
				document.getElementById("results").innerHTML = table;
			}*/
		}
	});
	
});
