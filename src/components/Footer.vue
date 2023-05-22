<script>
  import { defineComponent } from 'vue';
  import GithubIcon from '../../public/icons/github.svg?component'

  export default defineComponent({
    name: 'Footer',
  
    components: {
        GithubIcon,
    },    
});
</script>

<template>
  <footer>
    <div className="container">
      <p>© Martin Ledrut</p>
      <a href="https://github.com/mledrut" target="_blank"><GithubIcon/></a>
    </div>
  </footer>
</template>

<style style lang="scss">
@import "../styles/Footer.scss";
</style>
