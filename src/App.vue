<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Home from './pages/Home.vue'
  import Details from './pages/Details.vue'
  import './styles/Main.scss'

  export default {
    components: {
      Header,
      Home,
      Details,
      Footer,
    }
  };
</script>

<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@100;200;300;400;500;600;700&display=swap');
</style>