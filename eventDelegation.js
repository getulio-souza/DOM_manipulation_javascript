//event delegation

//it allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.

// document.querySelector('#football').addEventListener('click', function (e) {
//   console.log('football is clicked')

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'pink'
//   }
// })

// document.querySelector('#baskeball').addEventListener('click', (e) => {
//   console.log('basketball is clicked')

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'yellow'
//   }
// })

// document.querySelector('#boxing').addEventListener('click', (e) => {
//   console.log('boxing is clicked');

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgreen'
//   }
// });

// document.querySelector('#tennis').addEventListener('click', (e) => {
//   console.log('tennis is clicked');

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightblue'
//   }
// })

// document.querySelector('#golf').addEventListener('click', (e) => {
//   console.log('golf is clicked');

//   const target = e.target;

//   if (target.matches('li')) {
//     target.style.backgroundColor = 'red'
//   }
// })

//there is a better way to do this

document.querySelector('#sports').addEventListener('click', (e) => {
  console.log(e.target.getAttribute('id') + ' is clicked')

  const target = e.target;

  if (target.matches('#tennis') || target.matches('#basketball')) {
    target.style.backgroundColor = 'red'
  } else {
    target.style.backgroundColor = 'green'
  }
});

//create another sport item

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Soccer';
newSport.setAttribute('id', 'soccer');
newSport.classList.add('list')

sports.appendChild(newSport)
