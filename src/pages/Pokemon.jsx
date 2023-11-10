import { useState, useEffect } from 'react';

import axios from 'axios'

import pokeball from '../images/pokeball.png'

const url = "https://pokeapi.co/api/v2/pokemon/";

const typeColor = {
    bug: "#8DC000",
    dragon: "#7B00C1",
    electric: "#FAFA27",
    fairy: "#FCC2DF",
    fighting: "#B30000",
    fire: "#FF9317",
    flying: "#B096BC",
    grass: "#00B235",
    ground: "#D5C660",
    ghost: "#685A87",
    ice: "#88E9F3",
    normal: "#B7A68F",
    poison: "#9557A1",
    psychic: "#FA7DBC",
    rock: "#A69B4F",
    water: "#374EE6",
    dark: "#624F21",
    steel: "#A5A5A5"
};
const shadowColor = {
    bug: "#BDE942",
    dragon: "#C06EEF",
    electric: "#DBDB00",
    fairy: "#FFDBEE",
    fighting: "#FF3D3D",
    fire: "#FFF95B",
    flying: "#D5A7E9",
    grass: "#62FF91",
    ground: "#FFF39B",
    ghost: "#B799F3",
    ice: "#D0FBFF",
    normal: "#ECDBC2",
    poison: "#DFA6EB",
    psychic: "#FFB3DA",
    rock: "#DCCE6D",
    water: "#6BA6FF",
    dark: "#847553",
    steel: "#DCDCDC"
};

function capitalizeFirstLetter(string) {
    return string.replace(/^./, string[0].toUpperCase());
}

function Pokemon() {
    const [pokeName, setPokeName] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [themeColor, setThemeColor] = useState('');
    const [themeColor2, setThemeColor2] = useState('');

    useEffect(() => {
        // Load a Pokémon when the component mounts
        getPokeData();
    }, []);

    const getPokeData = () => {
        let id = Math.floor(Math.random() * 649) + 1;

        axios.get(url + id)
            .then(res => {
                generatePokemon(res.data);
            });
    };

    const generatePokemon = (data) => {
        let newName = '';
        let newImgSrc = '';

        // Shiny roll
        let shiny = Math.floor(Math.random() * 10) + 1;
        if (shiny === 1) {
            newName = "Shiny " + capitalizeFirstLetter(data.species.name);
            newImgSrc = data.sprites.other["official-artwork"].front_shiny;
        } else {
            newName = capitalizeFirstLetter(data.species.name);
            newImgSrc = data.sprites.other.dream_world.front_default;
        }

        const currentThemeColor = typeColor[data.types[0].type.name];
        const currentThemeColor2 = data.types.length === 2 ? typeColor[data.types[1].type.name] : shadowColor[data.types[0].type.name];

        setPokeName(newName);
        setImgSrc(newImgSrc);
        setThemeColor(currentThemeColor);
        setThemeColor2(currentThemeColor2);
    };

    const handlePokeballClick = () => {
        getPokeData();
    };

    return (
        <section className='pokemon-container mx-auto mt-10 mb-3 w-[1000px]'>
            <div className='pokeball'>
                <button className='pokeball-btn' onClick={handlePokeballClick}>
                    <img src={pokeball} alt="Pokeball" />
                </button>
            </div>
            <div className='pokemon-card'>
                <div className='pokemon-img mx-auto py-28 w-[1000px]' style={{ backgroundImage: `linear-gradient(to bottom, ${themeColor}, ${themeColor2})` }}>
                    <img className="block mx-auto my-5 h-[400px] w-[400px]" src={imgSrc} alt={pokeName + ' image'} />
                </div>
                <div className='pokemon-name mx-auto text-center my-2.5 text-3xl font-semibold text-black'>
                    <p>A wild <span style={{ color: themeColor }}>{pokeName}</span> appeared!</p>
                </div>
            </div>
        </section>
    );
}

export default Pokemon