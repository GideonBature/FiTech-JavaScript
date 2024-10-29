// I click on h1, it changes to "Hello Gideon"
// 1. select h1
// 2. add event listener (click)
// 3. write function

const elem_h1 = document.querySelector('#heading');

console.log(elem_h1);

elem_h1.addEventListener("mouseover", hello_name);

function hello_name() {
    elem_h1.textContent = "Hello Gideon";
    elem_h1.style.color = "blue";
}