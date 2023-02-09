<template>
    <div>  
        <p v-if="tem_nome">Esta é a pessoa: {{name}}</p>
        <p v-else="tem_nome">huehue</p>
        <p> Acesse o Link <a v-bind:href="link_nome" target="_blank">{{link_nome}}</a> clique aqui </p>

    </div>
</template>

<script>
// somente o : pode ser intendido como o bind


export default {
    name: 'Pessoa',

    data() {
        return{
            name: 'Teste',
            tem_nome: true,
            link_nome: 'https://github.com/'
        }
    },
}
</script>