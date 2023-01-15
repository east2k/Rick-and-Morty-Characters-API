import React from "react";

const ChosenFilter = ({ filter }) => {
    return (
        <p className="chosen-filter">{filter}
            <span className="material-symbols-outlined close">
                close
            </span>
        </p>
    );
}

export default ChosenFilter;