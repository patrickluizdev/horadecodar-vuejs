<template>
    <div>  
        <p v-if="tem_nome">Esta é a pessoa: {{name}}</p>
        <p> Acesse o Link <a v-bind:href="link_nome" target="_blank">{{link_nome}}</a> clique aqui </p>
        <p>Para acessar clique aqui <a :href="meu_link" target="_blank">Clique Aqui</a></p>
        <button @click="showname">{{text_button}}</button>
        <div v-if="show_img">
            <Picture/>
        </div>

    </div>
</template>

<script>
// somente o : pode ser intendido como o bind
    
    import Picture from './Picture.vue'

    export default {
        name: 'Pessoa',
        components: {
            Picture
        },

        data() {
            return{
                name: 'Teste',
                tem_nome: true,
                link_nome: 'https://github.com/',
                meu_link: 'https://github.com/',
                text_button: 'Mostrar Imagem',
                show_img: false
            }
        },

        methods: {
            showname(){
                this.show_img = !this.show_img
                if(!this.show_img){
                    this.text_button = 'Mostrar Imagem'
                }else{
                    this.text_button = 'Esconder Imagem'
                }
            }
        }
    }
</script>