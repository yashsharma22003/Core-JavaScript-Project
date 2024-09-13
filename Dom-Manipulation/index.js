const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

// for(let fruit of fruits){
// fruit.style.backgroundColor = "yellow";
// }

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// })

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

const liElements = document.getElementsByTagName("li");

// h4Elements[0].style.backgroundColor = "yellow"
// h4Elements[1].style.backgroundColor = "yellow"

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});

const element = document.querySelector(".fruits");

element.style.backgroundColor = "red";

const foods = document.querySelectorAll("li");

console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "cyan";
})