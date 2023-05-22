<script>
import { defineComponent } from 'vue';
import Logo from '../../public/icons/logo.svg?component'

export default defineComponent({
  name: 'Header',

  components: {
    Logo,
  },
});
</script>

<template>
  <header>
        <div className="container">
            <router-link to="/">
                <Logo/>
                <h1>Marti' <span>Welsh</span></h1>
            </router-link>
        </div>
    </header>
</template>

<style style lang="scss">
  @import "../styles/Header.scss";
</style>
