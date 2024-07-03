console.log(document);

const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

myMessage.innerText = 'Hello(Sawubona lapho), DOM!';

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', () => {
    myMessage.innerText = 'Button was pressed(Beliqindezelwe)!';
});

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', () => {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    }
});

myMessage.addEventListener('click', () => {
    myMessage.classList.toggle('darkmode');
});

setTimeout(() => {
    myMessage.innerText = 'Hello, DOM!';
}, 3000);

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector('.fruits');
fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
});

const listItemElements = document.querySelectorAll('li');
listItemElements.forEach(element => {
    element.style.listStyle = 'none';
});

const theMessageButton1 = document.querySelector('.theMessageButton1');
theMessageButton1.addEventListener('click', () => {
    alert('Button pressed, Siyabonga🙏🏾👊🏾!');
});

const buttonElements = document.querySelectorAll('button');
buttonElements.forEach(button => {
    button.style.backgroundColor = 'green';
    button.style.color = 'yellow';
});

theMessageButton.addEventListener('dblclick', () => {
    document.body.classList.toggle('lightmode');
});
