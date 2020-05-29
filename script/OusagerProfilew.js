function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("client");

const url =
  "https://dsz1bzjiwifhbdl-db202005111649.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/cli";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let client = data.items; //.results;
    return client.map(function (client) {
    	if(client.id_client === 393943){
      						let p = createNode("p")
        					span = createNode("p");
      						span.innerHTML = `<h1>${client.username}</h1>
      										  <p>${client.nom}, ${client.prenom}<br>
      										  Votre code d'identification: ${client.id_client}</p>`;
      						append(p, span);
      						append(ul, p);
    	}
    });
  })


  .catch(function (error) {
    console.log(JSON.stringify(error));
  });