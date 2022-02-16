<template>
    <h1 v-if="!pokemon">Cargando el pokemon ...</h1>
    <div v-else>
        <h1>¿Quién es este pokémon ?</h1>
        <pokemon-picure :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <pokemon-options :pokemons="pokemonsArr" @pokemon-select="pokemonSelected"></pokemon-options>
        <template v-if="showAnswer">
            <h1  class="fade-in">{{message}}</h1>
            <button  @click.prevent="getPokemonsArray()">Nuevo Juevo</button>
        </template>
    </div>
</template>
<script>
import PokemonPicure from '@/components/PokemonPicure.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonsOptions from '@/helpers/getPokemonOptions.js'
export default {
    components:{
        PokemonPicure,
        PokemonOptions
    },

    data() {
        return {
            pokemonsArr:[],
            pokemon:null,
            showPokemon:false,
            showAnswer:false,
            message:null
        }
    },

    created(){
        this.getPokemonsArray();
    },

    methods:{
        async getPokemonsArray(){
            this.showPokemon = false;
            this.showAnswer = false;
            this.pokemonsArr = await getPokemonsOptions();
            let rand = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonsArr[rand];
        },

        pokemonSelected(pokemonId){
            this.showAnswer = true;
            this.showPokemon = true;
            if(pokemonId === this.pokemon.id){
                this.message = `Felicitaciones, el pokémon ${this.pokemon.name} es el correcto !!!`
            }
            else{
                this.message = `Uppss :(, el pokémon era ${this.pokemon.name} !!!`
            }
        }
    },
}
</script>