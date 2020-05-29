function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("dev");

const url =
  "https://dsz1bzjiwifhbdl-db202005111649.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/dev";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let dev = data.items; //.results;
    return dev.map(function (dev) {
      		let p = createNode("p")
        	span = createNode("p");
          span.innerHTML = `${dev.id_dev} - ${dev.nom_dev}<br>`;
          append(p, span);
          append(ul, p);
    });
  })


  .catch(function (error) {
    console.log(JSON.stringify(error));
  });