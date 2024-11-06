<template>
  <div class="card">
    <img :src="recipe.image" alt="Recipe image" />
    <h3>{{ recipe.name }}</h3>
    <p>By {{ recipe.author }}</p>
    <button @click="toggleSaveRecipe">{{ isSaved ? 'Remove' : 'Save' }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { useRecipeStore } from '@/store/recipeStore';
import type { Recipe } from '@/types';

export default defineComponent({
  props: {
    recipe: { type: Object as PropType<Recipe>, required: true }
  },
  setup(props) {
    const store = useRecipeStore();
    const isSaved = computed(() => store.savedRecipes.some(r => r.id === props.recipe.id));
    
    function toggleSaveRecipe() {
      isSaved.value ? store.removeRecipe(props.recipe.id) : store.saveRecipe(props.recipe);
    }

    return { isSaved, toggleSaveRecipe };
  }
});
</script>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
