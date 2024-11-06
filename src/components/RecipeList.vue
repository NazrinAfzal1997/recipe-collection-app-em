<template>
  <div>
    <h2>Public Recipes</h2>
    <div class="recipe-list">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
    <h2>Your Saved Recipes</h2>
    <div class="recipe-list">
      <RecipeCard v-for="recipe in savedRecipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRecipeStore } from '@/store/recipeStore';
import RecipeCard from './RecipeCard.vue';

export default defineComponent({
  components: { RecipeCard },
  setup() {
    const store = useRecipeStore();
    onMounted(() => {
      store.fetchPublicRecipes();
      store.loadSavedRecipes();
    });
    return { recipes: store.recipes, savedRecipes: store.savedRecipes };
  }
});
</script>

<style scoped>
.recipe-list {
  display: grid;
  gap: 1rem;
}
</style>
