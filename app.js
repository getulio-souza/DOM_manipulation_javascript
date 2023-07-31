//DOM manipulation

// getElementById()
// const title = document.getElementById('main-heading')
// console.log(title)

// //GetElementByClassName()
// const listItem = document.getElementsByTagName('list-items')
// console.log(listItem)

// //getElementByTagName()

// const listItem2 = document.getElementsByTagName('li')
// console.log(listItem2)

//querySelector()
// const container = document.querySelector('div')
// console.log(container)

//querySelectorAll()
// const containers = document.querySelectorAll('div')
// console.log(containers)


//DOM Manipulation

// const title = document.querySelector('#main-heading');

//styling elements with javascript
// title.style.color = 'red'
// console.log(title)

// const listItems = document.querySelectorAll('.list-items')

// for (i = 0; i < listItems.length; i++){
//   listItems[i].style.fontSize = '20px'
//   listItems[i].style.color = 'pink'
// }

//creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li')

ul.append(li)

//modifying the text

// const firstListItem = document.querySelector('.list-items')
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML.toUpperCase())

li.innerText = 'new movie'
li.style.color = 'white'

//modifying attributes & classes

// li.setAttribute('id', 'heading');
// li.removeAttribute('id');


const title = document.querySelector('#heading')
console.log(title.getAttribute('id'))

// https://www.youtube.com/watch?v=5fb2aPlgoys&t=528s


// add a class to the new item
li.classList.add('list-items')
// li.classList.remove('list-items')

console.log(li.classList.contains('list-items'))

//remove elements

// li.remove()



//traverse the dom

// parent node traversal
let list = document.querySelector('ul');
console.log(ul.parentElement.parentNode)
console.log(ul.parentElement.parentElement)


//display all the html content
const html = document.documentElement;
console.log(html.parentNode)

console.log(ul.childNodes)
 
//child node always returns the children 
ul.childNodes[1].style.backgroundColor = 'green'
// child node traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling)

// sibling node traversal



