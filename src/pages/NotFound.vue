<script>
import { defineComponent } from 'vue';
import Logo from '../../public/icons/logo.svg?component'

export default defineComponent({
  name: 'NotFound',

  components: {
    Logo,
  },
});
</script>

<template>
  <div class="container not-found">
    <div class="content">
        <p>4</p>
        <Logo/>
        <p>4</p>
    </div>

    <router-link to="/">
        Retourner a l'accueil
    </router-link>
  </div>
</template>

<style style lang="scss">
  @import "../styles/NotFound.scss";
</style>
