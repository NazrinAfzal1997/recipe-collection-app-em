<template>
  <div class="recipe-detail">
    <h2>{{ recipe.name }}</h2>
    <img :src="recipe.image" alt="Recipe image" />
    <p>Author: {{ recipe.author }}</p>
    <h3>Ingredients</h3>
    <ul>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
    </ul>
    <h3>Instructions</h3>
    <p>{{ recipe.instructions }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { Recipe } from '@/types';

export default defineComponent({
  props: {
    recipe: { type: Object as PropType<Recipe>, required: true }
  }
});
</script>

<style scoped>
.recipe-detail {
  padding: 1rem;
}
</style>
