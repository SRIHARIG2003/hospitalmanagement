var button = document.getElementById("add");

function createTableElement(sNo, doctorName, timeStart, timeEnd) {
  var table = document.querySelector("table");

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.appendChild(document.createTextNode(sNo));
  tr.appendChild(td1);

  var td2 = document.createElement("td");
  td2.appendChild(document.createTextNode(doctorName));
  tr.appendChild(td2);

  var td3 = document.createElement("td");
  td3.appendChild(document.createTextNode(timeStart));
  tr.appendChild(td3);

  var td4 = document.createElement("td");
  td4.appendChild(document.createTextNode(timeEnd));
  tr.appendChild(td4);

  table.appendChild(tr);
}

function addListAfterClick() {
  var sNo = prompt("S NO:");
  var doctorName = prompt("Doctor Name: ");
  var timeStart = prompt("Starting Time: ");
  var timeEnd = prompt("Ending Time: ");

  if (sNo && doctorName && timeStart && timeEnd) {
    createTableElement(sNo, doctorName, timeStart, timeEnd);
  } else {
    alert("All fields are required.");
  }
}

button.addEventListener("click", addListAfterClick);
