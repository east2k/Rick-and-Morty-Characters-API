import React from "react";

const Input = ({ id, name, value, handleClick }) => {
    return (
        <label
            className="category-container"
            htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                onClick={handleClick}
            />
            {value}
        </label>
    );
}

export default Input;