// decrease -> reduce count by 1
// increase -> increase count by 1
// reset -> reset count to 0

// display that shows count.

/* 
    1. Select all the elements (add, subtract, reset, value)
       - using querySelector.
    2. take the value of the count and convert to a number.
    3. Add event listener to Reset button.
       - addEventListener - click
*/
// selected all elements
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const value = document.querySelector('#value');

// convert value to number
let count = Number(value.textContent);
console.log(typeof(count));
console.log(count);

// add event listener to reset button
resetBtn.addEventListener('click', () => {
    count = 0;
    value.textContent = count;
})

// add event listener to increase button
increaseBtn.addEventListener('click', function(){
    // count++, count += 1, count = count + 1
    count++;
    value.textContent = count;
})

// add event listener to decrease button
decreaseBtn.addEventListener('click', function() {
    // count--, count -= 1, count = count - 1
    // count--;
    // value.textContent = count;
    if (count === 0) {
        return;
    }
    count--;
    value.textContent = count;
})