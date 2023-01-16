import React, { useState, useEffect } from "react";
import { getCharacter, getCharacters } from "rickmortyapi";
import Sidemenu from "./component/sidemenu/Sidemenu"
import Content from "./component/content/Content"
import rickAndMortyAPI from "../../api"

const Body = () => {
    const characters  = async () => {
        const characters  = await getCharacters();
        console.log(characters );
    }

    characters ()

    let chars;
    const [characterList, setCharacterList] = useState([])

    const [checkFilters, setCheckFilters] = useState({
        "Alive": false,
        "Dead": false,
        "Unknown": false,
        "Human": false,
        "Alien": false,
        "Humanoid": false,
        "Mythological Creature": false,
        "Male": false,
        "Female": false,
        "Genderless": false,
        "Unknown Gender": false
    });

    const handleFilter = (event) => {
        const { name, value, checked } = event.target;

        setCheckFilters(prevState => {
            return {
                ...prevState,
                [value]: checked
            }
        });

    }

    const checkedFilters = Object.entries(checkFilters)
        .filter(category => category[1])
        .map(category => category[0]);

    const filteredChars = characterList.filter(({ status, species, gender }) => {
        let check = false;
        checkedFilters.includes(status) ||
            checkedFilters.includes(species) ||
            checkedFilters.includes(gender) ?
            check = true :
            check = false;
        return check;
    });

    useEffect(() => {
        rickAndMortyAPI()
            .then(data => {
                chars = data.results;
                setCharacterList(chars)
            }).catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <main className="main-body">
            <Sidemenu
                chosenFilters={checkFilters}
                handleFilter={handleFilter}
            />
            <Content
                result={filteredChars.length === 0 ? characterList : filteredChars}
            />
        </main>
    )
}

export default Body;

