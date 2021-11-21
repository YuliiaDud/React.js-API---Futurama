import React, {useState,useEffect} from 'react';

function GeneralInfo(props) {

    const [desc,setDescr] = useState(null);
    const [years,setYears] = useState(null);
    const [creators,setCreators] = useState(null);
    const [infoIsVisible,setInfoIsVisible] = useState(false);

    useEffect(()=>{
       fetch('https://api.sampleapis.com/futurama/info')
            .then(resp => resp.json())
            .then(resp => {
                setDescr(resp[0].synopsis);
                setYears(resp[0].yearsAired);
                let creators = '';
                for (const creator of resp[0].creators) {
                    creators = creators + creator.name + ', ';
                }
                setCreators(creators);
            })
    });
    const showInfo = () =>{
        setInfoIsVisible(!infoIsVisible);
    };
    return (
        <div className={"flex"}>
            <button className={"outline"} onClick={showInfo}>
                <h3>Read General Information</h3>
            </button>
            {
                infoIsVisible &&
                <div className={"info"}>
                    <h2>Years:</h2><p> {years}</p>
                    <h2>Creators:</h2><p> {creators}</p>
                    <h2>Description:</h2>
                    <p> {desc}</p>
                </div>
            }

        </div>

    );
}

export default GeneralInfo;