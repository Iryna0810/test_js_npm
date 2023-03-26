import { Button } from 'bootstrap.native';
import Notiflix from 'notiflix';
// import pokemonCardTpl from "./exsample_pokemon.hbs"

const refs = {
    markup: document.querySelector('.js-card-create'),
    searchForm: document.querySelector('.form-control'),
    searchInput: document.querySelector ('.form-control-input')
    }
console.log(refs.searchForm);
refs.searchForm.addEventListener('submit', handleSearch);
    // const searchQuerry = refs.searchInput.value;
    // console.log(searchQuerry);

function handleSearch(event) {
    event.prevantDefault();

    // const form = event.currentTarget ;
    // console.log(form.elements);
    const searchQuerry = refs.searchInput.value;
    console.log(searchQuerry);


    fetchPokemonByld(searchQuerry)
    .then(renderPokemonCard)
    .catch(error => {
        return Notiflix.Notify.failure("error");
    });
}








function fetchPokemonByld(pokemonId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => {
    // console.log(response.json());
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

