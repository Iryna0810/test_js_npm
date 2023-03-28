import { Button } from 'bootstrap.native';
import Notiflix from 'notiflix';
// import pokemonCardTpl from "./exsample_pokemon.hbs"
import getRefs from '../get-refs';

const refs = getRefs();
console.log(refs.searchForm);

refs.searchForm.addEventListener('submit', handleSearch);
    // const searchQuerry = refs.searchInput.value;
    // console.log(searchQuerry);

function handleSearch(event) {
    event.preventDefault();

    const form = event.currentTarget ;
    console.log(form.elements);
    const searchQuery = form.elements.query.value;
    // const searchQuerry = refs.searchInput.value;
    console.log(searchQuery);


    fetchPokemonByld(searchQuery)
        .then(renderPokemonCard)
        .catch(handleFetchError)
        .finally(() => form.reset());
}

function handleFetchError(error) {
    console.warn(error);
    return Notiflix.Notify.failure("error");
        }

function fetchPokemonByld(pokemonId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => {
    // console.log(response.json());
        if (!response.ok) {
            throw new Error(response.status)
        }
    return response.json();
})
}

function renderPokemonCard(pokemon) {
        
        const markup = ({ sprites, name, weight, height, abilities }) => {
            return `<div class="card">
            <div class="card-img-top">
            <img src="${sprites.front_default}" alt="">
            </div>
              </div>
        <div class="card-body">
            <h2 class="card-title">Name: ${name} </h2>
            <p class="card-text">Weight: ${weight} </p>
            <p class="card-text">Height: ${height} </p>
            <p class="card-text"><b>Abilities</b></p>
            
            <ul class="list-group">
            <li class="list-group-item"> ${abilities[0].ability.name} </li>
            <li class="list-group-item"> ${abilities[1].ability.name} </li>
        </ul>
            </div>`
        };

    const markupF = markup(pokemon);
    
    refs.markup.innerHTML = markupF;
    console.log(markup(pokemon));

    }


fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(r => r.json())
    .then(console.log)

fetch('https://pixabay.com/api/?key=34769662-caad36a1f3170139f3332b200&q=dogs&image_type=photo')    
    .then(r => r.json())
    .then(console.log)

const url = 'https://newsapi.org/v2/everything?q=bitcoin';
const options = {
    headers: {
        Authorization:'567231439280463c8671c619b60356ac',
},
};

fetch(url, options)
        .then(r => r.json())
    .then(console.log)