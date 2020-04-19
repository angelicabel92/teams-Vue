<template>
  <div id="app" class="bg-gray-200  h-auto">
    <header class="bg-gray-900 sm:flex sm:justify-center sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0" id="nav">
        <router-link class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800" to="/">Home</router-link>
        <router-link class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" to="/fav">Favoritos</router-link>
      </nav>
    </header>
    <section id="wrapper" class="container mx-auto pt-6">
        <article v-if="errored">
          <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
        </article>
        <div v-else class="flex flex-wrap justify-center">
          <div v-if="loading">Cargando...</div>
          <router-view v-else :result='result' :itemListId='this.itemListId' />
        </div>
      </section>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    mounted: function() {
      if (localStorage.getItem('id')) {
        const arrTeams = JSON.parse(localStorage.getItem('id'));
        this.itemListId = arrTeams;
      } else {
        return this.itemListId;
      }
    },
    data:() => ({
      result: null,
      loading: true,
      errored: false,
      isOpen: false,
      itemListId: []
    }),
    created() {
      axios.get("https://api.collegefootballdata.com/teams").then((result) => {
        this.result = result.data;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }
  }
</script>
