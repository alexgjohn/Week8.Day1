import React, { useState, useEffect } from 'react';
import CharacterSelect from '../components/CharacterSelect';
import CharacterInformation from '../components/CharacterInformation';
import ReactPaginate from 'react-paginate';


const DisneyCharacterContainer = () => {
    
    const [disneyCharacters, setDisneyCharacters] = useState({})
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    
    useEffect(() => {
        getDisneyCharacters();
    }, [])
    

    const getDisneyCharacters = function(){
        fetch('https://api.disneyapi.dev/character?page=41&pageSize=50') 
        .then(res => res.json())
        .then(disneyCharacters => setDisneyCharacters(disneyCharacters))
    }    

    const updateSelectedCharacter = (character) => {
        setSelectedCharacter(character)
    }
    
    return (
        <>
            <CharacterSelect disneyCharacters={disneyCharacters.data} updateSelectedCharacter = {updateSelectedCharacter}/>
            {selectedCharacter ? <CharacterInformation character = {selectedCharacter}/> : null}
        </>
    )
}

export default DisneyCharacterContainer