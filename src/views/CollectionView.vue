<template>
<!-- Main Wrapper -->
				<div id="main-wrapper">
					<div class="wrapper style2">
						<div class="inner">
							<div class="container">
								<div id="content">

									<!-- Content -->

										<article>
											<header class="major">
												<h2>Ma Collection</h2>
											</header>
											<div class='card-list' v-for="(card, index) in cards" :key="index">
												<div class='card-title'><b>#{{index+1}} </b>{{card.name}}</div>
												<div style="cursor :pointer" class='card-action' @click="goToDetails(card.id)">👀</div>
											</div>
											

										</article>

								</div>
							</div>
						</div>
					</div>

				</div>
</template>

<script>



import axios from 'axios';

const MAGIC_ALL_API_URL = "https://api.magicthegathering.io/v1/cards "

export default {
    name: 'App',
    data: () => ({
        cards: []
    }), 
    components:{
   
   
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