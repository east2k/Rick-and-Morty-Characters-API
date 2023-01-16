import React, { useState } from "react";
import Input from "./component/Input";
import categoryFilters from "./categoryFilters";

const Sidemenu = ({ chosenFilters, handleFilter }) => {
    const status = categoryFilters[0]; // Status Filter
    const specie = categoryFilters[1]; // Specie Filter
    const gender = categoryFilters[2]; // Gender Filter

    const addAttribute = (filter) => {
        return (
            <Input
                key={filter.id}
                id={filter.id}
                name={filter.name}
                value={filter.value}
                handleFilter={handleFilter}
                chosenFilter={chosenFilters[filter.name]}
            />
        )
    }

    const statusFilters = status.map(filter => {
        return addAttribute(filter)
    });
    const specieFilters = specie.map(filter => {
        return addAttribute(filter)
    });
    const genderFilters = gender.map(filter => {
        return addAttribute(filter)
    });

    return (
        <div className="main-body-sidemenu">
            <div className="main-body-sidemenu-header">
                <h2>Choose Filter</h2>
            </div>
            <div className="main-body-sidemenu-body">
                <div className="sidemenu-filter-category">
                    <h3>Status</h3>
                    {statusFilters}
                </div>
                <div className="sidemenu-filter-category">
                    <h3>Specie</h3>
                    {specieFilters}
                </div>
                <div className="sidemenu-filter-category">
                    <h3>Gender</h3>
                    {genderFilters}
                </div>
            </div>
        </div>
    )
}

export default Sidemenu;