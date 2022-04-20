<template>

    <!-- Main Wrapper -->
    <div id="main-wrapper">
        <div class="wrapper style2">
            <div class="inner">
                <div class="container">
                    <div class="row">
                        <div class="col-8 col-12-medium">
                            <div id="content">

                                <!-- Content -->

                                <article>
                                    <header class="major">
                                        <h2>{{card.type}}</h2>
                                        <p>{{card.artist}}</p>
                                    </header>

                                    <span class="image featured">
                                        <img :src="card.imageUrl"
                                            alt="" />
                                    </span>

                                    <p>{{card.text}}</p>
                                </article>

                            </div>
                        </div>
                        <div class="col-4 col-12-medium">
                            <div id="sidebar">

                                <!-- Sidebar -->

                                <section>
                                    <header class="major">
                                        <h2>Infos</h2>
                                    </header>
                                    <p>set name: <b>{{card.name}}</b></p>
                                    <p>rarity: <b>{{card.rarity}}</b></p>
                                    <p>toughness: <b>{{card.toughness}}</b></p>

                                    <span class="button alt icon ">
                                        Card power {{displayStars(card.power)}}
                                        
                                    </span>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>




<script>
import axios from 'axios'
const MAGIC_ALL_API_URL = "https://api.magicthegathering.io/v1/cards/"

export default {
    name: 'DetailsView',
    data: () => ({
        card: {}
    }),
    async created() {
        const { cardId } = this.$route.params
        const apiDetailsUri = MAGIC_ALL_API_URL+cardId
        this.oneCard = await axios.get(apiDetailsUri)
        this.card= this.oneCard.data.card
       console.log(this.card)
         

    },
    methods:{
        displayStars(nb) {
      let a = "🔥";
      return a.repeat(nb)
    },
    }
}

</script>