<template>
    <h1>Meu nome é: {{name}}</h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    data(){
        return{
            name: 'Ainda não Sei'
        }
    },            
    created(){
        setTimeout(() => {
        this.name = 'Patrick'; 
        }, 2000);
    },
    mounted(){
        this.name = 'Teste'
    }
}
</script>
