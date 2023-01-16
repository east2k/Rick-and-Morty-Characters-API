import React from "react";

const Card = ({ id, image, name, status, handleClick }) => {
    return (
        <div
            className="character-card"
            onClick={() => handleClick(id)}
        >
            <div className="character-card-image">
                <img src={image} />
            </div>
            <div className="character-card-details">
                <h3 className="character-card-details-name">{name}</h3>
                <p className="character-card-details-status">{status}</p>
            </div>
        </div>
    );
}
export default Card;