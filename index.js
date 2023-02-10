let employee = {
    name: "A",
    streetAddress: "2"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee= { ...employee};
    newemployee[key] = value;
    return newemployee;

}

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return Object.assign({}, employee, { [key]: value })
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value
//     return employee
// }

// function deleteFromEmployeeByKey(employee, key) {
//     const newObject = Object.assign({}, employee)
//     delete newObject[key]
//     return newObject
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key]
//     return employee

// }