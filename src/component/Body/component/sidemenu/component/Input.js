import React from "react";

const Input = ({ id, name, value, chosenFilter, handleFilter }) => {
    return (
        <label
            className="category-container"
            htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                onChange={handleFilter}
                checked={chosenFilter}
            />
            {value}
        </label>
    );
}

export default Input;