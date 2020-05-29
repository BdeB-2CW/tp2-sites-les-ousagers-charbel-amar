function ins_dev() {
  let dev_rec = {
  };
  dev_rec.id_dev = document.getElementById("id_dev").value;
  dev_rec.nom_dev = document.getElementById("nom_dev").value;

  const URL =
      "https://dsz1bzjiwifhbdl-db202005111649.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/dev/";
    
fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dev_rec),
  });
then((resp) => resp.json()
	)}



fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let employees = data.items; //.results;
    return employees.map(function (employee) {
      if (employee.job === "CLERK") {
        let li = createNode("li"),
          span = createNode("span");
        span.innerHTML = `${employee.empno} ${employee.ename}`;
        append(li, span);
        append(emp_ul, li);
      }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });