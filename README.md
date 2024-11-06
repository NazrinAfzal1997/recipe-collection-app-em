# Recipe Collection Web Application

This project is a **Recipe Collection web application** built with Vue 3 and TypeScript. It allows users to browse public recipes, view recipe details, and save their favorite recipes locally. The application integrates with an external API for public recipes and uses local storage for user data.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)

## Features
- **Public Recipes**: Browse a list of public recipes fetched from an external API.
- **Recipe Details**: View detailed information for each recipe, including ingredients and instructions.
- **Favorite Recipes**: Save recipes to local storage for quick access later.
- **Search and Filter**: Dynamically filter recipes by name, ingredient, or category.
- **Responsive Design**: Looks great on both desktop and mobile devices.

## Tech Stack
- **Framework**: Vue 3
- **Language**: TypeScript
- **State Management**: Pinia
- **UI Libraries**: Vuetify or Bootstrap
- **CSS Framework**: Tailwind CSS or Bootstrap

## Project Structure
```plaintext
src/
├── components/
│   ├── RecipeCard.vue         # Displays a single recipe in a card format
│   ├── RecipeDetail.vue       # Shows detailed information for a selected recipe
│   ├── RecipeList.vue         # Lists recipes from API and local storage
│   └── SearchBar.vue          # Search and filter recipes
├── store/
│   └── recipeStore.ts         # State management with Pinia
├── views/
│   └── HomeView.vue           # Main view displaying RecipeList and SearchBar
├── App.vue                    # Root component
└── main.ts                    # Main entry point of the app
