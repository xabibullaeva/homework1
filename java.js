var age = prompt("Enter your age");

if (age >= 0 && age <= 18) {
    alert("Teenager. You need to study")
    console.log("Teenager. You need to study")
} else if (age > 18 && age <= 50) {
    alert("You need to work")
    console.log("You need to work")
} else if (age > 50 && age <= 59) {
    alert("You will retire soon")
    console.log("You will retire soon")
} else if (age > 59 && age <= 150) {
    alert("Pensioner. If you alive")
    console.log("Pensioner. If you alive")
} else {
    alert("Something WRONG")
    console.log("Something WRONG")
}


