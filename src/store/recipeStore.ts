import { defineStore } from 'pinia';
import type { Recipe } from '@/types';

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [] as Recipe[],
    savedRecipes: [] as Recipe[]
  }),
  actions: {
    async fetchPublicRecipes() {
      const response = await fetch(
        'https://raw.githubusercontent.com/micahcochran/json-cookbook/refs/heads/main/cookbook-100.json'
      );
      const data = await response.json();
      this.recipes = data;
    },
    saveRecipe(recipe: Recipe) {
      this.savedRecipes.push(recipe);
      localStorage.setItem('savedRecipes', JSON.stringify(this.savedRecipes));
    },
    loadSavedRecipes() {
      const saved = localStorage.getItem('savedRecipes');
      if (saved) {
        this.savedRecipes = JSON.parse(saved);
      }
    },
    removeRecipe(id: string) {
      this.savedRecipes = this.savedRecipes.filter(recipe => recipe.id !== id);
      localStorage.setItem('savedRecipes', JSON.stringify(this.savedRecipes));
    }
  }
});
