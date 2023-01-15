const rickAndMortyAPI = () => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(err => {
            console.error(err)
            throw err;
        });
}

export default rickAndMortyAPI;
