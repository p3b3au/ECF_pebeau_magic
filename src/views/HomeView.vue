<template>
<div>
<BannerView/>

				

			<!-- Main Wrapper -->
				<div id="main-wrapper">
					<div class="wrapper style1">
						<div class="inner">

							<!-- Feature 1 -->
								<section class="container box feature1">
									<div class="row">
										<div class="col-12">
											<header class="first major">
												<h2>Mes 3 Dernières Cartes</h2>
											</header>
										</div>
										<div class="col-4 col-12-medium">
											<section>
												<a @click="goToDetails(cards[99].id)" class="image featured"><img :src="cards[99].imageUrl" alt="" /></a>
												<header class="second icon solid fa-dragon">
													<h3>{{cards[99].name}}</h3>
													<p>{{cards[99].type}}</p>
												</header>
											</section>
										</div>
										<div class="col-4 col-12-medium">
											<section>
												<a @click="goToDetails(cards[96].id)" class="image featured"><img :src="cards[96].imageUrl" alt="" /></a>
												<header class="second icon solid fa-dragon">
													<h3>{{cards[96].name}}</h3>
													<p>{{cards[96].type}}</p>
												</header>
											</section>
										</div>
										<div class="col-4 col-12-medium">
											<section>
												<a @click="goToDetails(cards[97].id)" class="image featured"><img :src="cards[97].imageUrl" alt="" /></a>
												<header class="second icon solid fa-dragon">
													<h3>{{cards[97].name}}</h3>
													<p>{{cards[97].type}}</p>
												</header>
											</section>
										</div>

									</div>
								</section>

						</div>
					</div>
				</div>
</div>
</template>


<script>

import BannerView from "@/components/BannerView.vue"
import axios from 'axios';

const MAGIC_ALL_API_URL = "https://api.magicthegathering.io/v1/cards "

export default {
    name: 'App',
    data: () => ({
        cards: []
    }), 
    components:{
    BannerView
   
},
    methods: {
         goToDetails(id) {
            this.$router.push({ name: 'details', params: { cardId: id } })
           
        }
    },

    async created() {
        const cards = await axios.get(MAGIC_ALL_API_URL)
        this.cards = cards.data.cards
             
    }

};


 



</script>
<style>
@import '@/assets/css/main.css';
@import '@/assets/fontawesome/css/all.css';
</style>

