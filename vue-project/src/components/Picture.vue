<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return{
        avatar: './src/img/teste.png',
        descricao:'Teste Imagem'
        }
    },
}
</script>