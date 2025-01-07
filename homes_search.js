async function readYMLFiles(folderPath, targetAccountName) {
	var results;

	try {
		const folder = await fetch(folderPath).then(res => res.arrayBuffer());
        const zip = await JSZip.loadAsync(folder);
        const files = Object.keys(zip.files);

        let processedFiles = 0;
		
		for (const fileName of files) {
            if (!fileName.endsWith('.yml')) {
                continue;
            }

			const fileContent = await zip.files[fileName].async('string');
			
			try {
                const data = jsyaml.load(fileContent); // Using js-yaml for YAML parsing

                if (data && data['last-account-name'] === targetAccountName) {
                    results.push({ fileName, home: data['home'] || null });
                }
            } catch (e) {
                console.error(`Error processing file ${fileName}: ${e.message}`);
            } finally {
                processedFiles++;
                console.log(`Processed ${processedFiles}/${files.length} files`);
            }
        }

    } catch (err) {
        console.error("Error accessing folder: ", err);
    }
	return results;
}

document.getElementById('processButton').addEventListener('click', async () => {
    //const targetAccountName = prompt("Enter the value of 'last-account-name' to search for:");

    //const folderPath = "/userdata";

    //var results = await readYMLFiles(folderPath, targetAccountName);
	d3.csv("homes.csv", function(data) {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	});

    console.log("\nFound the following matches:");
    console.log(data);
	
	/*var homes = Object.keys(results);
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
	
	document.getElementById("results").innerHTML = table;*/
});
