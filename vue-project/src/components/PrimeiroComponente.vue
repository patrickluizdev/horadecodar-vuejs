<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{nome}}, {{profissao}}</p>
    </div>
</template>

<script>
    export default {
        name: 'PrimeiroComponente',
        data() {
            return {
                nome: "Patrick",
                profissao: "Trabalho com TI"
            }
        }
    }
</script>