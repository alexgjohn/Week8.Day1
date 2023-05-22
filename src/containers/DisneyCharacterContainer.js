import React, { useState, useEffect } from 'react';
import CharacterSelect from '../components/CharacterSelect';
import CharacterInformation from '../components/CharacterInformation';


const DisneyCharacterContainer = () => {
    
    const [disneyCharacters, setDisneyCharacters] = useState({})
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    // const [listOfFilms, setListOfFilms] = useState({})
    // const [selectedFilm, setSelectedFilm] = useState(null)
    
    useEffect(() => {
        getDisneyCharacters();
    }, [])
    
    // useEffect(() => {
    //     getListOfFilms();
    // }, [])
    

    const getDisneyCharacters = function(){
        fetch('https://api.disneyapi.dev/character?page=41&pageSize=50') 
        .then(res => res.json())
        .then(disneyCharacters => setDisneyCharacters(disneyCharacters))
    }   
    
    // const getListOfFilms = function(){
    //     const originalList = []
    //     const stuff = disneyCharacters.data
    //     for (const character of stuff){
    //         character.films.map((film) => {
    //             if (!originalList.includes(film)){
    //                 originalList.push(film)
    //             }
    //         })
    //     }
    //     setListOfFilms(originalList)
    // }

    const updateSelectedCharacter = (character) => {
        setSelectedCharacter(character)
    }
    // const updateSelectedFilm = (character) => {
    //     setSelectedFilm(character)
    // }
    
    return (
        <>
            <CharacterSelect disneyCharacters={disneyCharacters.data} updateSelectedCharacter = {updateSelectedCharacter}/>
            {selectedCharacter ? <CharacterInformation character = {selectedCharacter}/> : null}
        </>
    )
}

export default DisneyCharacterContainer