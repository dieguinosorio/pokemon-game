<template>
    <div class="pokemon-container">
        <img  class="hidde-pokemon" :src="imgSrc" alt="pokemon"/>
        <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="pokemon"/>
    </div>
</template>
<script>
export default {
    props:{
        pokemonId:{
            type:Number,
            required:true,
            default:0
        },
        showPokemon:{
            required:true,
            type:Boolean,
            default:false
        }
    },

    computed:{
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    },

    mounted() {
    },
}
</script>
<style scoped>
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidde-pokemon{
        filter: brightness(0);
    }
</style>