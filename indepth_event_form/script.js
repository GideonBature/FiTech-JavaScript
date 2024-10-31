// select the elements
const outerDivElem = document.querySelector('#outerDiv');
const innerDivElem = document.querySelector('#innerDiv');

// add event listener
outerDivElem.addEventListener('click', function () {
  alert('outer div clicked');
});

innerDivElem.addEventListener('click', function () {
  alert('inner div clicked');
  
//   rufai.stopPropagation();
});

const divBtn = document.querySelector('#btnDiv');

divBtn.addEventListener('click', function (e) {
    console.log("Function working")
    if (e.target.className.includes('btn')) {

        e.target.textContent = 'button clicked';
    }
})