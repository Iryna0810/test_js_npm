const promise = new Promise((resolve, reject) => {
    const canFullFill = Math.random() > 0.5;

    setTimeout(() => {
        if (canFullFill) {
            resolve('Проміс виконався успішно');
        }

        reject("Проміс виконався з помилкою");
    }, 1000);
});

function handleFulFilled() {
    console.log('handleFulFilled -> onfullfilled ');
    console.log('Проміс виконався успішно');
}

promise
    .then(handleFulFilled)
    .then(x => {
        console.log(x);
        throw new Error('помилка в другому промісі')

        return 10;
    })
    .then(y => {
        console.log(y);
    })
    .catch(error => console.error(error))
    .finally(() => { console.log('Я буду виконаний в будь-якому випадку') });

// const makeOrder = (dish, onOrder, onError) => {
//     const DELAY = 1000;
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//         if (passed) {
//             onOrder('here your dish')
//         } else {
//             onError('sorry, all produsts are finished')
//         }
    
//     }, DELAY)
// };
    
// makeOrder('cake', onMakeOrderSuccsess, onMakeOrderError);

// function onMakeOrderSuccsess(result) {
//     console.log('onMakeOrderSuccsess');
//     console.log(result);
// }

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }
    
const makeOrder = dish => {
    const DELAY = 1000;
    
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;

        setTimeout(() => {
            if (passed) {
            resolve(`here your ${dish}`)
            }
            reject('sorry, all produsts are finished');
    
        }, DELAY)
    })
       
};


    
// const p = makeOrder('cake');

// p.then(onMakeOrderSuccsess).catch(onMakeOrderError);

makeOrder('cake').then(onMakeOrderSuccsess).catch(onMakeOrderError);
 
function onMakeOrderSuccsess(result) {
    console.log('onMakeOrderSuccsess');
    console.log(result);
}

function onMakeOrderError(error) {
    console.log('onMakeOrderError');
    console.log(error);
}