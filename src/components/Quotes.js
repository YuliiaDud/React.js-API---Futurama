import React,{useState, useEffect} from 'react';
import Slider from "react-slick";
import TheHeader from "./layout/TheHeader";


function Quotes(props) {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(value => value.json())
            .then(value => setCharacters(value));
    });
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <TheHeader/>
            <div>
                <div>
                    {
                        characters.map(character => <div key={character.id}>
                            {
                                character.id === 1 &&
                                    <Slider {...settings}>
                                        {
                                            character.sayings.map((phrase,index) =>
                                                <div className={"wrapper"} key={index}>
                                                    <h2>{phrase}</h2>
                                                </div>
                                            )
                                        }
                                    </Slider>
                            }
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Quotes;