export interface Recipe {
    id: string;
    name: string;
    author: string;
    image: string;
    ingredients: string[];
    instructions: string;
  }
  
  export interface RecipeAPIResponse {
    recipes: Recipe[];
  }
  