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

const makeOrderNew = dish => {
    return Promise.resolve(`here your ${dish}`);
};

makeOrderNew('cake').then(onMakeOrderSuccsess);




    
// const p = makeOrder('cake');

// p.then(onMakeOrderSuccsess).catch(onMakeOrderError);

// makeOrder('cake').then(onMakeOrderSuccsess).catch(onMakeOrderError);
 
function onMakeOrderSuccsess(result) {
    console.log('onMakeOrderSuccsess');
    console.log(result);
}

function onMakeOrderError(error) {
    console.log('onMakeOrderError');
    console.log(error);
}

const fetchPokemonByld = id => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

// fetchPokemonByld(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonByld(10).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonByld(20).then(onFetchSuccess).catch(onFetchError);


function onFetchSuccess(pokemon) {
    console.log('onFetchSuccess -> onFetchSuccess');
    console.log(pokemon);
}

function onFetchError(error) {
    console.log('onFetchError -> onFetchError');
    console.log('its in block catch');
    console.log('error')
}

const makePromise = () => {
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;

        setTimeout(() => {
            if (passed) {
                resolve('this is resolve');
            }

            reject('this is reject')
        }, 2000);
    })
};

makePromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

const horses = [
        'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Mango',
]

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-resule-table'),
 }   

refs.startBtn.addEventListener('click', () => {
    const promises = horses.map(run);

    updateWinnerField(``);
            
    updateProgressFild('the Race is starting');
    
    Promise.race(promises).then(({ horse, time }) => {
        updateWinnerField (`win ${horse} finish time ${time}`);
    });

    Promise.all(promises).then(() => {
        refs.progressField.textContent = 'Race is finished';
});

});

function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}

function updateProgressFild(message) {
    refs.progressField.textContent = message;
}

function run(horse) {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500)
        setTimeout(() => {
            resolve({ horse, time });
        }, time);

    });

}

console.log('run started');

const promises = horses.map(run);
console.log(promises);

// Promise.race(promises).then(({ horse, time }) => {
//     console.log(
//         `win ${horse} finish time ${time}`
//     );
// })

// Promise.all(promises).then(x => {
//     console.log(x);
// });



run('Mango')
    .then(x => console.log(x))
    .catch(e => console.log(e));


function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}