const CharacterInformation = ({character}) => {


    const doesCharacterAppearInFilm = () => {
        if (character.films.length > 0) {
            console.log("this character appears in films")
            return <li>{character.films}</li>
        }

    }

    doesCharacterAppearInFilm()

    return (
        <>
            <h2>{character.name}</h2>
            <img src = {character.imageUrl} alt = "character image"/>
            <h2>Films: {doesCharacterAppearInFilm}</h2>
            <option></option>
        </>
    )


}

export default CharacterInformation