<template>
  <div class="sm:flex sm:justify-center sm:items-center sm:px-4 sm:py-3">
    <div class="rounded overflow-hidden shadow-lg bg-white">
      <img
        class="w-24 mx-auto"
        :src="this.imgTeam"
        :alt="this.teamSelected.school"
      />
      <div class="px-6 py-4">
        <h1 class="font-bold text-xl mb-2">{{this.teamSelected.school}}</h1>
        <small class="text-gray-700">Abreviacion: {{this.teamSelected.abbreviation}}</small>
        <p v-if="this.teamSelected.mascot"><strong>Mascota: </strong>  {{this.teamSelected.mascot}}</p>
        <p v-if="this.teamSelected.conference"><strong>Conference: </strong>  {{this.teamSelected.conference}}</p>
        <p v-if="this.teamSelected.alt_name1 || this.teamSelected.alt_name2 || this.teamSelected.alt_name3">
          <strong> Nombres Alternativos: </strong> {{this.teamSelected.alt_name1}} {{this.teamSelected.alt_name2}} {{this.teamSelected.alt_name3}}</p>
        <p v-if="this.teamSelected.conference"><strong> Nombres Alternativos: </strong>  {{this.teamSelected.conference}}</p>
        <p v-if="this.teamSelected.division"><strong>Division: </strong>  {{this.teamSelected.division}}</p>
        <br>
        <h4 class="font-bold text-center">Colores</h4>
        <div class="flex flex-wrap justify-around">
          <div v-if="this.teamSelected.color">
            <small>{{this.teamSelected.color}}</small>
            <div class="h-10 w-20" :style="{backgroundColor: this.teamSelected.color}"></div>
          </div>
          <div v-if="this.teamSelected.alt_color">
            <small>{{this.teamSelected.alt_color}}</small>
            <div class="h-10 w-20" :style="{backgroundColor: this.teamSelected.alt_color}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teamSelected',
  mounted() {
    for (let idResult = 0; idResult < this.result.length; idResult++) {
      const teamInfo = this.result[idResult].id;
      if (parseInt(this.$route.params.id) === teamInfo) {
        this.teamSelected = this.result[idResult];
      }  
    }
    this.getImageTeam()
  },
  props: {
    result: Array,
    itemListId: Array
  },
  data() {
    return {
      teamSelected: {},
      imgTeam: String
    }
  },
  methods: {
    getImageTeam: function() {
      if (this.teamSelected.logos[0]) {
        const teamImg = this.teamSelected.logos[0].toString()
          this.imgTeam = teamImg;
      }
    }
  },
}
</script>