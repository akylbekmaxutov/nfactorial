// Создать свой Ресторан / Магазин / Футбольную команду используя
const footballClub = {
    name: "Astana",
    personnel: 100,
    champion: true,
    worldChampions: null,
}

// Работа с объектами
vehicle = {}
vehicle.brandName = "BMW"
vehicle.model = "X5"
vehicle.model = "M1"
delete vehicle.model

// Работа с перебором свойств в объектах
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

sum = 0
for (let person in salaries) {
    sum += salaries[person]
}
console.log(sum)