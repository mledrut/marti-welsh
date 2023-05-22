<script>
import { defineComponent } from 'vue';
import ArrowIcon from '../../public/icons/arrow-left.svg?component'

export default defineComponent({
    name: 'Welsh',
    data() {
        return {
            data: {},
        };
    },
    components: {
        ArrowIcon,
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            const route = this.$route.params.id;
            import('../../public/welsh.json')
                .then((json) => {
                    const index = json.default.findIndex((obj) => obj.route === route);
                    this.data = json.default[index];
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
    
});
</script>

<template>
    <div class="container">
        <div class="cat header">
            <div class="side">
                <router-link to="/" class="back-button">
                    <ArrowIcon />
                </router-link>
            </div>
            <div class="center">
                <h2>{{ data.name }}</h2>
                <p class="ville">{{ data.ville }}</p>
            </div>
            <div class="side">

            </div>
        </div>
        <div class="cat image">
            <img :src="`./images/${data.photo}`" alt="" />
        </div>
        <div class="cat description">
            <h3>Description</h3>
            <div class="sub-description">
                <h4>Prix</h4>
                <p>{{ data.prixComplet }} €</p>
                <h4>Sur la carte</h4>
                <p>{{ data.description }}</p>
                <h4>Bière cuisinée</h4>
                <p>{{ data.biere ? data.biere : "Non renseigné" }}</p>
            </div>
        </div>
        <div class="cat notes">
            <h3>Les notes</h3>
            <div class="notes-list">
                <div v-for="(note, title) in data.notes" :key="title">
                    <div class="note">
                        <div class="textes">
                            <p class="note-titre">{{ title }}</p>
                            <p class="note-note">{{ note }} / 10</p>
                        </div>
                        <div class="bar">
                            <div class="ligne-fix"></div>
                            <div :style="{ width: `${note * 10}%` }" class="ligne"></div>
                        </div>
                    </div>
                </div>
                <p>Date de dégustation : {{ data.date }}</p>
            </div>
        </div>
        <div class="cat infos">
            <h3>Informations</h3>
            <h4>{{ data.name }}</h4>
            <p>{{ data.adresse }}</p>
            <p>{{ data.telephone }}</p>
            <a :href="data.web" target="_blank">Site web</a>
        </div>
    </div>
</template>
  
<style style lang="scss">
@import "../styles/Details.scss";
</style>
