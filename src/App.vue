<template>
 
  <div id="app">
  <HeaderView/>
 
    
          
<router-view/> 
   <FooterView/>
  
  </div>
    
 
</template>


<script>
import HeaderView from "@/components/HeaderView.vue"
import FooterView from "./components/FooterView.vue"



export default{
  name: 'App',
  components:{
    HeaderView,
    FooterView,
  
}
  }
</script>



<style>

@import './assets/css/main.css';
@import './assets/fontawesome/css/all.css';
@import './assets/css/card-list.css';


</style>
