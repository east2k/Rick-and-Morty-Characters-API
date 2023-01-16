import React from "react";
import Card from "./component/Card"
import ChosenFilter from "./component/ChosenFilter";

const Content = ({ result }) => {
    const handleOnClick = (id) =>{
        console.log(result[id-1]);
    }
    const newCard = result.map(info => {
        return (
            <Card
                key={info.id}
                id={info.id}
                image={info.image}
                name={info.name}
                status={info.status}
                handleClick={handleOnClick}
            />
        )
    });

    return (
        <div className="main-body-content">
            <div className="main-body-content-header">
                <div className="content-header-searchbar">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="header-searchbar"
                    />
                    <span className="material-symbols-outlined search">
                        search
                    </span>
                </div>
                <div className="content-header-chosen-filters">
                    <ChosenFilter
                        filter="Alive"
                    />
                </div>
            </div>
            <div className="main-body-content-container">
                {newCard}
            </div>
        </div>
    );
}

export default Content;