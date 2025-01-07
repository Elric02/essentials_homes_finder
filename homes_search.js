document.getElementById('processButton').addEventListener('click', async () => {
    const targetAccountName = prompt("Entrez votre pseudo:");

	var results;
	d3.csv("homes.csv", function(data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i][1] == targetAccountName) {
				console.log(data[i]);
				results = data[i][2];
				//results.replace("'", '%%temp%%');
				//results.replace('"', "'");
				//results.replace("%%temp%%", '"');
				//console.log(results);
				//results = JSON.parse(results);
				var homes = jsyaml.load(results);
				
				//var homes = Object.keys(results);
				var table = document.getElementById("results").innerHTML;
				
				for (var i = 0; i < homes.length; i++) {
					console.log(results[homes[i]])
					table += "<tr>"
					table += "<td>"
					table += homes[i];
					table += "</td>"
					table += "<td>"
					table += results[homes[i]]["world-name"];
					table += "</td>"
					table += "<td>"
					table += results[homes[i]].x;
					table += "</td>"
					table += "<td>"
					table += results[homes[i]].y;
					table += "</td>"
					table += "<td>"
					table += results[homes[i]].z;
					table += "</td>"
					table += "</tr>"
				}
				
				document.getElementById("results").innerHTML = table;
			}
		}
	});
	
});
