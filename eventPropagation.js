//event propagation

window.addEventListener('click', function () {
  console.log('window');
}, false);

document.addEventListener('click', function () {
  console.log('Document')
}, false);

document.querySelector('.div2').addEventListener('click', function (e) {
  console.log('DIV 2');
  e.stopPropagation()
}, {once: true});

document.querySelector('.div1').addEventListener('click', function () {
  console.log('div 1')
}, false);

document.querySelector('.button').addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e.target.innerText = 'clicked');
},false)