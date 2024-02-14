'use strict'

// Task A

var gEmployees = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 5,
    department: 'IT',
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering',
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering',
  },
  {
    name: 'Jane Janet',
    yearsExperience: 15,
    department: 'Management',
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT',
  },
]

////////////////////////////////////////////////////

console.log('******* TASK A *******')

// Task 01

const yearsExperienceSum = sumAllExperience()
console.log(`yearsExperienceSum: `, yearsExperienceSum)

function sumAllExperience() {
  return gEmployees.reduce(
    (acc, employee) => (acc += employee.yearsExperience),
    0
  )
}

// Task 02

const experienceByDepartment = getDepartmentExperienceMap()
console.log(`experienceByDepartment: `, experienceByDepartment)

function getDepartmentExperienceMap() {
  const departmentExperienceMap = gEmployees.reduce((map, employee) => {
    if (!map[employee.department]) map[employee.department] = 0
    map[employee.department] += employee.yearsExperience
    return map
  }, {})

  return departmentExperienceMap
}

// Task 03

const groupByExperience = groupEmployeesByExperience()
console.log(`groupByExperience: `, groupByExperience)

function groupEmployeesByExperience() {
  const experienceMap = gEmployees.reduce((map, employee) => {
    if (!map[employee.yearsExperience]) map[employee.yearsExperience] = []
    map[employee.yearsExperience].push(employee)
    return map
  }, {})

  return experienceMap
}

// Task 04

const empCountInDepartments = countEmpByDepartment()
console.log(`empCountInDepartments: `, empCountInDepartments)

function countEmpByDepartment() {
  const empCount = gEmployees.reduce((map, employee) => {
    if (!map[employee.department]) map[employee.department] = 0
    map[employee.department]++
    return map
  }, {})

  return empCount
}

////////////////////////////////////////////////////

// Task B
console.log('******* TASK B *******')

const gValues = [1, 2, 3, 1, 1, 5, 6]
findModes(gValues)

function findModes(values) {
  const modesMap = values.reduce((map, value) => {
    if (!map[value]) map[value] = 0
    map[value]++
    return map
  }, {})

  const modes = []
  for (const mode in modesMap) {
    modes.push([mode, modesMap[mode]])
  }

  const maxMode = modes.reduce((max, mode) => {
    const currValue = mode[1]
    const currMaxValue = max[1]
    if (currValue > currMaxValue) max = mode
    return max
  }, modes[0])

  console.log(`The max mode was ${maxMode[0]} with ${maxMode[1]} appearances`)
}

////////////////////////////////////////////////////

// Task C
console.log('******* TASK C *******')

var input = ['hello', [9, 6], 18, [4, 7, 8]]
var expected = ['hello', 9, 6, 18, 4, 7, 8]
var actual = flatten(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

function flatten(values) {
  const flattenArray = values.reduce((acc, val) => {
    if (Array.isArray(val)) {
      val.forEach((value) => acc.push(value))
    } else {
      acc.push(val)
    }
    return acc
  }, [])

  return flattenArray
}
