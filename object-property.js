const students = [
    { id: 3, name: "Manna bhai" },
    { id: 5, name: "Omar khan" },
    { id: 8, name: "Shapnoor" },
    { id: 11, name: "Purnima" },
]
const names = students.map(s => s.name)
const ids = students.map(id => id.id)
const bigger = students.filter(s => s.id > 5)
const bigger1 = students.find(s => s.id > 5)
console.log(bigger1);