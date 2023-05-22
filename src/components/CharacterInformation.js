const CharacterInformation = ({character}) => {


    const doesCharacterAppearInFilm = () => {
        return character.films.length > 0

    }

    const listOfFilms = character.films.map((film, index) => {
        return(
            <li key={index}>{film}</li>
        )
    })

    const doesCharacterAppearInTvShow = () => {
        return character.tvShows.length > 0

    }

    const listOfShows = character.tvShows.map((show, index) => {
        return(
            <li key={index}>{show}</li>
        )
    })

    return (
        <>
            <h2>{character.name}</h2>
            <img src = {character.imageUrl} alt = "character image"/>
            {doesCharacterAppearInFilm() ? <h2>Films: </h2> : <><h2>Films: </h2><p>This character doesn't appear in any films!</p></>}
            {/* <h2>Films: </h2> */}
            <ul>{listOfFilms}</ul>
            {doesCharacterAppearInTvShow() ? <h2>TV Shows: </h2> : <><h2>TV Shows: </h2> <p>This character doesn't appear in any TV shows!</p></>}
            <ul>{listOfShows}</ul>
            <option></option>
        </>
    )


}

export default CharacterInformation