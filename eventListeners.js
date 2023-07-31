//event listeners

// const buttonTwo = document.querySelector('.btn-2');

// // //callback function
// function alertBtn() {
//   alert('I love javascript too!')
// }

// buttonTwo.addEventListener('click', alertBtn);

// //mouseover event

// const newBgColor = document.querySelector('.box-3');

// function changeBgColor() {
//   newBgColor.style.backgroundColor = 'green'
// }

// newBgColor.addEventListener('mouseover', changeBgColor)


// hide and display content

//create two variables to store the classes
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

//create a function to handle the content that will be shown or hidden from the screen
function revealContent() {
  if (hiddenContent.classList.contains('reveal-btn')) {
    hiddenContent.classList.remove('reveal-btn')
  } else {
    hiddenContent.classList.add('reveal-btn')
  }
}

//apply event listener to the button
revealBtn.addEventListener('click', revealContent);