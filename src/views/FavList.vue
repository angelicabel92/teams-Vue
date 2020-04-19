<template>
  <div class="favlist container mx-auto pt-6">
    <div class="flex flex-wrap">
      <article class="self-auto px-4 py-2 w-4/12" v-for="team in favoritesTeam" v-bind:key='team.id'>
        <TeamList :itemTeam="team" :selectedIdFav='itemListId'/>
      </article>
    </div>
  </div>
</template>

<script>
  import TeamList from '@/components/TeamList.vue';

  export default {
    name: 'favList',
    mounted: function() {
      this.findIdTeams();
    },
    components: {
      TeamList
    },
    props: {
      result: Array,
      itemListId: Array
    },
    data: () => ({
      favoritesTeam: [],
    }),
    methods: {
      findIdTeams: function() {
        for (let teamID = 0; teamID < this.result.length; teamID++) {
          const UniqueIdTeam = this.result[teamID].id;
          if (this.itemListId.includes(UniqueIdTeam)) {
            this.favoritesTeam.push(this.result[teamID])
          }
        }
        return this.favoritesTeam;
      }
    }
  }

</script>