<template>
  <section id="home" class="container mx-auto pt-6">
    <div class="flex flex-wrap">
      <article class="self-auto px-4 py-2 w-4/12" v-for="team in result" v-bind:key='team.id'>
        <TeamList :itemTeam="team" :selectedIdFav='itemListId'/>
      </article>
    </div>
  </section>
</template>

<script>
  import TeamList from '@/components/TeamList.vue';

  export default {
    name: 'Home',
    components: {
      TeamList
    },
    props: {
      result: Array,
      itemListId: Array
    },
  }
</script>
