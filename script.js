/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(employees => {
    if(employees.profession === "developer") {
            console.log(employees);
        }
  })
}

function PrintDeveloperbyForEach() {
  arr.forEach(employees => {
    if (employees.profession === "developer") {
      console.log(employees);
    }
  })
}

function addData() {
  let newEmployee = {id:4, name:"Priyansh", age:"22", profession:"intern"};
    arr.push(newEmployee);
    console.log(newEmployee);
}

function removeAdmin() {
  arr = arr.filter(employees => employees.profession !== "admin");
    console.log(arr);
}

function concatenateArray() {
  let newEmployees = [
        {id:5, name:"Ram", age:"22", profession:"developer"},
        {id:6, name:"Shyam", age:"23", profession:"admin"},
        {id:7, name:"Krishna", age:"21", profession:"manager"}
    ];
    let concatenatedArray = arr.concat(newEmployees);
    console.log(concatenatedArray);
}
