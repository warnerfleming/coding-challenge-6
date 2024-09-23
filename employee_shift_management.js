//Task 1

const employees = [
    {name: `Dave`, shifts: [{day: `Monday`, hours: 6}, {day: `Friday`, hours: 4}]},
    {name: `Steve`, shifts: [{day: `Tuesday`, hours: 8}, {day: `Saturday`, hours: 8}]},
    {name: `Mary`, shifts: [{day: `Wedensday`, hours: 4}, {day: `Thursday`, hours: 4}]},
    {name: `Greg`, shifts: [{day: `Monday`, hours: 8}]}

]


//Task 2

function displayEmployeeShifts (employees) {
    employees.forEach(item => 
        item.shifts.forEach(shifts => 
        console.log(`${item.name} works ${shifts.day} for ${shifts.hours} hours`)
    ))

}

displayEmployeeShifts(employees)

//Task 3
function assignShift (employees) {
    employees.find((name) => name === name)
    if (employees.some((shifts) => shift.day === day))
        console.log(`Error: Employee already works that `)
}


//Task 4
function calculateTotalHours (employeeName){
let employee = employees.find(item => item.name === employeeName);
return employee.shifts.reduce((total, shift) => total + shift.hours, 0)
}
console.log(`Total hours this week for Dave: ${calculateTotalHours("Dave")}`)