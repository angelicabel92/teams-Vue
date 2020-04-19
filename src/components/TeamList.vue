<template>
  <div class="TeamList" >
    <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg">
      <div :style="{ backgroundImage: createGradient }" class="h-5"></div>
      <img class="w-20 mx-auto mt-5" :src="itemTeam.logos[0]" :alt='itemTeam.abbreviation'>
      <div class="px-6 py-4 text-center">
        <div class="flex justify-between">
          <h5 class="font-bold text-xl">{{ itemTeam.school }}</h5>
          <svg :class="{ 'text-orange-400': isFav }" class="text-gray-500 fill-current hover:text-orange-300 inline-block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path @click="selectFav" :id="itemTeam.id" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        </div>
        <router-link :to="{ path:'/team/' + itemTeam.id }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mt-4 py-1 px-5 rounded inline-flex items-center">Ver más</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeamList',
    mounted: function() {
      if (this.selectedIdFav.includes(this.itemTeam.id)) {
        this.isFav = true;
      }
    },
    props: {
      itemTeam: Object,
      selectedIdFav: Array
    },
    data() {
      return {
        color1: this.itemTeam.color,
        color2: this.itemTeam.alt_color,
        logo: this.itemTeam.logos !== null ? (!this.itemTeam.logos[0] ? '../assets/american.jpg' : this.itemTeam.logos[0]): '',
        isFav: false
      }
    },
    methods: {
      selectFav: function(e) {
        const idTeam = parseInt(e.target.id);
        const findTeam = this.selectedIdFav.indexOf(idTeam);
        this.isFav = !this.isFav;

        //Add itemListId el event.id
        if (findTeam > -1) {
          this.selectedIdFav.splice(idTeam, 1);
          console.log(this.selectedIdFav)
        } else {
          this.selectedIdFav.push(idTeam)
        }
        const jsonTeams = JSON.stringify(this.selectedIdFav);
        localStorage.setItem('id', jsonTeams);
      }
    },
    computed: {
      createGradient() {
        return `linear-gradient(to bottom right, ${this.color1}, ${this.color2})`
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
