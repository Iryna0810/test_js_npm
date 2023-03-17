console.log(`Hello from main.js`);

const onButtonClick = document.querySelector('button');

onButtonClick.addEventListener('click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button');
    }, 2000);
});
console.log(`до виклику setTimeout`);

setTimeout(() => {
    console.log('Виклик відкладеної функції 1000')
}, 1000
);

setTimeout((
    function timeout() {
        console.log('Click the button')
    }
), 5000);

setTimeout(() => {
    console.log('Виклик відкладеної функції 2000')
}, 2000
);

console.log(`після виклику setTimeout`);

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const refs = {
    notification: document.querySelector('.class'),
};


refs.notification.addEventListener("click", onNotificationClick);

showNotification();
    
function onNotificationClick() {
    hideNotificationClick();
    clearTimeout(timeoutId);
}

function showNotification () {
    refs.notification.classList.add("is-visible");
 
    timeoutId = setTimeout(() => {
        console.log('need close alert');
           hideNotificationClick();
    }, NOTIFICATION_DELAY);
}

function hideNotificationClick() {
    refs.notification.classList.remove('is-visible');
}
