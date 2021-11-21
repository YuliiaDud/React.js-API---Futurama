import React, {useState, useEffect} from 'react';

function QuotesCounter(props) {

    const [counter, setCounter] = useState(0);
    const quotesNumber = props.quotesNumber;

    useEffect(() => {
        let timer = setTimeout(() =>{
            const newCounter = counter + 1;
            while (newCounter <= quotesNumber){
                setCounter(newCounter);
                break;
            }
        }, 25)

    });
    return (
        <span>{counter}</span>
    );
}

export default QuotesCounter;