<template>
  <div>
    <PrimeiroComponente/>
    <LifeCycle/>
    <Pessoa/>
    <Picture/>
  </div>
</template>

<script>

    import PrimeiroComponente from './components/PrimeiroComponente.vue'

    import LifeCycle from './components/LifeCycle.vue'
    import Pessoa from './components/Pessoa.vue'
    import Picture from './components/Picture.vue'


    export default{
      name: 'App',
      components: {
        PrimeiroComponente,
        LifeCycle,
        Pessoa,
        Picture
      }
    }

</script>