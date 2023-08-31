function addToll() {
  document.getElementById("add-new-toll").style.display = "block";
}

function addVehicle() {
  document.getElementById("add-vehicle").style.display = "block";
}

function close() {
  document.getElementById("add-new-toll ").style.display = "none";
}

tollDetails = [];
const tollName = document.getElementById("toll-name").value;

function addTollName() {
  const tollName = document.getElementById("toll-name").value;
  const dropdown1 = document.getElementById("dropdown1").value;
  const dropdown1SJ = document.getElementById("dropdown1-sj").value;
  const dropdown1Rj = document.getElementById("dropdown1-rj").value;

  const dropdown2 = document.getElementById("dropdown2").value;
  const dropdown2SJ = document.getElementById("dropdown2-sj").value;
  const dropdown2Rj = document.getElementById("dropdown2-rj").value;

  const dropdown3 = document.getElementById("dropdown3").value;
  const dropdown3SJ = document.getElementById("dropdown3-sj").value;
  const dropdown3Rj = document.getElementById("dropdown3-rj").value;

  const dropdown4 = document.getElementById("dropdown4").value;
  const dropdown4SJ = document.getElementById("dropdown4-sj").value;
  const dropdown4Rj = document.getElementById("dropdown4-rj").value;

  class fairtype1 {
    constructor(vehicleType1, SingleJourney, ReturnJourney) {
      this.vehicleType1 = vehicleType1;
      this.SingleJourney = SingleJourney;
      this.ReturnJourney = ReturnJourney;
    }
  }

  class fairtype2 {
    constructor(vehicleType1, SingleJourney, ReturnJourney) {
      this.vehicleType1 = vehicleType1;
      this.SingleJourney = SingleJourney;
      this.ReturnJourney = ReturnJourney;
    }
  }

  class fairtype3 {
    constructor(vehicleType1, SingleJourney, ReturnJourney) {
      this.vehicleType1 = vehicleType1;
      this.SingleJourney = SingleJourney;
      this.ReturnJourney = ReturnJourney;
    }
  }

  class fairtype4 {
    constructor(vehicleType1, SingleJourney, ReturnJourney) {
      this.vehicleType1 = vehicleType1;
      this.SingleJourney = SingleJourney;
      this.ReturnJourney = ReturnJourney;
    }
  }
  class tolls {
    constructor(name, fair) {
      this.name = name;
      this.fair = fair;
    }
  }

  class fair {
    constructor(fair1, fair2, fair3, fair4) {
      this.fair1 = fair1;
      this.fair2 = fair2;
      this.fair3 = fair3;
      this.fair4 = fair4;
    }
  }

  const newfair1 = new fairtype1(dropdown1, dropdown1SJ, dropdown1Rj);
  const newfair2 = new fairtype2(dropdown1, dropdown1SJ, dropdown1Rj);
  const newfair3 = new fairtype3(dropdown1, dropdown1SJ, dropdown1Rj);
  const newfair4 = new fairtype4(dropdown1, dropdown1SJ, dropdown1Rj);
  const fairtype = new fair(newfair1, newfair2, newfair3, newfair4);
  tollDetails.push(new tolls(tollName, fairtype));

  console.log(tollDetails);

  const addRow = tollTable.insertRow();
  const cell1 = addRow.insertCell(0);
  const cell2 = addRow.insertCell(1);
  const cell3 = addRow.insertCell(2);
  const cell4 = addRow.insertCell(3);
  const cell5 = addRow.insertCell(4);

  cell1.innerHTML = tollName;
  cell2.innerHTML = dropdown1SJ + "/" + dropdown1Rj;
  cell3.innerHTML = dropdown2SJ + "/" + dropdown2Rj;
  cell4.innerHTML = dropdown3SJ + "/" + dropdown3Rj;
  cell5.innerHTML = dropdown4SJ + "/" + dropdown4Rj;

  const dropdownlist = document.getElementById("dropdownlist");
  const newOption = document.createElement("option");
  newOption.value = tollName;
  newOption.textContent = tollName;

  dropdownlist.appendChild(newOption);
}

flag = false;
tname = "";
vehicleType = "";
function fair() {
  event.preventDefault();
  // const value = Object.entries(tollDetails.fair);
  // value.forEach((item) => {
  //   console.log(item);
  // });

  const tname = document.getElementById("dropdownlist").value;
  const vtype = document.getElementById("dropdown-vehicle").value;
  console.log(vtype);

  tollDetails.forEach((item) => {
    if (item.name === tname) {
      vehicleType = item.fair.fair1.vehicleType1;
    }
    console.log(vehicleType);
    // tname = item.name;
    // vehicleType = item.fair.fair1.vehicleType1;
    // flag = true;
  });

  if (flag === true) {
    const result =
      tname === tollName
        ? vehicleType === vtype
          ? "0"
          : vehicleType === vtype
          ? "1"
          : null
        : null;
    console.log(result);
  }
}

function vehicletable() {
  event.preventDefault();
  const VehicleType = document.getElementById("dropdown-vehicle").value;
  const vehicleNumber = document.getElementById("number").value;
  const tollName = document.getElementById("dropdownlist").value;
  const tariff = document.getElementById("");

  const addRow = vehicleTable.insertRow();
  const cell1 = addRow.insertCell(0);
  const cell2 = addRow.insertCell(1);
  const cell3 = addRow.insertCell(2);
  const cell4 = addRow.insertCell(3);
  const cell5 = addRow.insertCell(4);

  cell1.innerHTML = VehicleType;
  cell2.innerHTML = vehicleNumber;
  cell3.innerHTML = "30/08/2023";
  cell4.innerHTML = tollName;
  cell5.innerHTML = "50";
}
