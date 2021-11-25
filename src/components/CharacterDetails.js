import React, {Component} from 'react';
import { Link } from "react-router-dom";
import QuotesCounter from "./QuotesCounter";

class CharacterDetails extends Component {

    render() {
        let {chosenCharacter, clearChosenCharacter} = this.props;
        const quotesNumber = chosenCharacter.sayings.length;
        return (
            <div>
                <div className="backdrop"></div>
                <div className={"dialog"}>
                    <button onClick={() => clearChosenCharacter()} className={"close"}>Close</button>
                    <h1>{chosenCharacter.name.first +" "+ chosenCharacter.name.last}</h1>
                    <h2>Gender: {chosenCharacter.gender}</h2>
                    <h2>Age: {chosenCharacter.age}</h2>
                    <h2>Species: {chosenCharacter.species}</h2>
                    <h2>Home Planet: {chosenCharacter.homePlanet || "Unknown"}</h2>
                    <h2>Occupation: {chosenCharacter.occupation}</h2>
                    <h2>Quotes: <QuotesCounter quotesNumber={quotesNumber}/></h2>
                    <Link to="/quotes">
                        <button>Check out {chosenCharacter.name.first}'s quotes</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CharacterDetails;