const rickAndMortyAPI = () => {
    return fetch('https://rickandmortyapi.com/api/character?page=1')
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
