const CharacterSelect = ({disneyCharacters, updateSelectedCharacter}) => {

    console.log("Characters:", disneyCharacters)

    if (disneyCharacters === undefined) {
        return null
    }

    const characterSelection = disneyCharacters.map((character, _id) => {
        return(
            <option key={character._id} value = {_id}>{character.name}</option>
        )
    })


    const handleOnChange = (evt) => {
        console.log("options chosen")
        const id = evt.target.value
        const character = disneyCharacters[id]
        updateSelectedCharacter(character)
    }

    

    return (
        <>
            <h2>This is character select</h2>
            <select onChange = {handleOnChange}>
                {characterSelection}
            </select>
        </>
    )


}

export default CharacterSelect