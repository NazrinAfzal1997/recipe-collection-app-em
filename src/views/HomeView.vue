<template>
  <div>
    <SearchBar />
    <RecipeList />
  </div>
</template>

<script lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  components: { RecipeList, SearchBar }
};
</script>
