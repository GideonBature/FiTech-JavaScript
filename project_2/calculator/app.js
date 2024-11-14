import add from './operations/add.js';
import subtract from './operations/subtract';
import multiply from './operations/multiply';
import divide from './operations/divide';
// import {result as result1, result2} from '../calc'

const result = add(1, 2);
console.log(result);

const dom = document.querySelector("h1");
// const dom1 = document.querySelector(".r1");
// const dom2 = document.querySelector(".r2");
// const dom3 = document.querySelector(".r3");

dom.textContent = "result: " + result;

// console.log(result1);
// console.log(result2);

dom1.textContent = "result: " + result;
// dom2.textContent = "result1: " + result1;
// dom3.textContent = "result2: " + result2;