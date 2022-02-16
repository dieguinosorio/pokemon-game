import pokemonApi from "../api/pokemonApi"

const getPokemons = () =>{
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((el,index)=> {return index+1})
}

const getPokemonsOptions = async () =>{
    const mixedOptionsPokemons =  getPokemons().sort(()=>Math.random() - 0.5);
    const pokemons =  await getPokemonsName(mixedOptionsPokemons.splice(0,4))
    return pokemons
}

const getPokemonsName = async ([a,b,c,d] = [])=>{
    const promiseArr = [
        pokemonApi.get(`${a}`),
        pokemonApi.get(`${b}`),
        pokemonApi.get(`${c}`),
        pokemonApi.get(`${d}`),
    ]

    const [r1,r2,r3,r4] =  await Promise.all(promiseArr);

    return[
        {name: r1.data.name,id:a},
        {name: r2.data.name,id:b},
        {name: r3.data.name,id:c},
        {name: r4.data.name,id:d},
    ]
}

async function getApiPokemons(id){
    /*let {name}  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res=>{ return res.json() });
    return name;*/
}

export default getPokemonsOptions