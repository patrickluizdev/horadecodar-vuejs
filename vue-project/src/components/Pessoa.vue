<template>
    <div>  
        <p v-if="tem_nome">Esta é a pessoa: {{name}}</p>
        <p v-else="tem_nome">huehue</p>
        <p> Acesse o Link <a v-bind:href="link_nome" target="_blank">{{link_nome}}</a> clique aqui </p>

        <button @click="showname">{{text_button}}</button>

        <p>Para acessar clique aqui <a :href="meu_link" target="_blank">Clique Aqui</a></p>
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
            link_nome: 'https://github.com/',
            meu_link: 'https://github.com/',
            text_button: 'Mostrar Nome'
        }
    },

    methods: {
        showname(){
            this.tem_nome = !this.tem_nome
            if(!this.tem_nome){
                this.text_button = 'Mostrar Nome'
            }else{
                this.text_button = 'Esconder Nome'
            }
        }
    }
}
</script>