import React, {Component} from 'react';
import Character from "./Character";
import CharacterDetails from "./CharacterDetails";

class CharactersList extends Component {

    state = {
        characters: [],
        chosenCharacter: null,
        charactersIsVisible: false
    };

    componentDidMount() {
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(value => value.json())
            .then(value =>
                this.setState({characters: value}))
    };

    setChosenCharacter = (id) =>{
        let {characters} = this.state;
        let chosen = characters.find(char => char.id === id);
        this.setState({chosenCharacter: chosen});

    };
    clearChosenCharacter = () => {
        this.setState({chosenCharacter: null});
    };
    setCharactersIsVisible = () => {
        let {charactersIsVisible} = this.state;
        this.setState({charactersIsVisible: !charactersIsVisible});
    };

    render() {
        let {characters,chosenCharacter, charactersIsVisible} = this.state; // instead of writing this.state.characters
        return (
            <div>
                <div className={"flex"}>
                    <button className={"outline"} onClick={this.setCharactersIsVisible}>
                        <h3>Characters</h3>
                    </button>
                </div>
                <div className={"wrapper"}>
                    {
                        charactersIsVisible &&

                        <div className={"flex margin"}>
                            {
                                characters.map(character => <Character
                                    character={character}
                                    key={character.name.first}
                                    setChosenCharacter={this.setChosenCharacter}
                                />)
                            }
                        </div>
                    }
                </div>

                {
                    chosenCharacter && // chosenCharacter ? <tag/> : null
                    <CharacterDetails
                        chosenCharacter={chosenCharacter}
                        clearChosenCharacter={this.clearChosenCharacter}
                    />
                }
            </div>
        );
    }
}

export default CharactersList;