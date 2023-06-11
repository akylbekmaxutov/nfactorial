let user = {}
user.name = prompt("Your name?")
user.age = prompt("Your age?")
user.sex = prompt("Your sex?")

console.log(`${user.name} is ${user.sex} and is ${user.age} years old`)

let num = 0
if (user.name === "Akylbek") {
    num = prompt("GPA?")
}
alert(num)

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
        alert( '2,3' );
        break;
    case 3:
        alert( '2,3' );
        break;
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += 2;
    }
}

console.log(sum)

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


