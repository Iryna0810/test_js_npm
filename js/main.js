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

const refs = {
    notification: document.querySelector('.js-alert'),

};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();
    
function onNotificationClick() {
    hideNotificationClick();
}
function showNotification () {
    refs.notification.classList.add("is-visible");
}

function hideNotificationClick() {
    refs.notification.classList.remove('is-visible');
}
