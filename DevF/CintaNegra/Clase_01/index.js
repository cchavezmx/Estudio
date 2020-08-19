
const URL = 'https://pokeapi.co/api/v2/pokemon'

const getPokemones = async () => {
    const response = await axios.get(URL)
        const data = await response.json()
        console.log(data)
        return data
}
