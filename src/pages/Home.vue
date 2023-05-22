<script>
import welshData from "../../public/welsh.json";

export default {
  data() {
    return {
      welshs: welshData,
    };
  },
  methods: {
    navigate(route) {
        this.$router.push(route);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="last">
      <ul>
          <li v-for="item in welshs" :key="item.route" @click="navigate(`/${item.route}`)">
            <div class="image">
                <img :src="`/images/${item.photo}`" alt="" />
            </div>
            <div class="textes">
                <h4>{{ item.name }}</h4>
                <p class="ville">{{ item.ville }}</p>
                <p class="prix">{{ item.prixComplet }} €</p>
                <p class="note">{{ item.notes.general }}/10</p>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style style lang="scss">
  @import "../styles/Home.scss";
</style>
