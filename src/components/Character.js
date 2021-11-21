import React, {Component} from 'react';

class Character extends Component {
    render() {
        let {character, setChosenCharacter} = this.props;
        const fullName = character.name.first + " " + character.name.middle + " " + character.name.last;
        return (
            <div className={"chracter-wrapper"}>
                <h1>{fullName}</h1>
                <a href={"#"}><img src={character.images.main} alt={character.name.first}/></a>
                <button onClick={()=> setChosenCharacter(character.id)}>More Details</button>
            </div>
        );
    }
}

export default Character;