import React from "react";

const Card = ({ image, name, status }) => {
    return (
        <div className="character-card">
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