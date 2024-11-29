import { Recipe } from "./recipe.model";

export interface BookResponse {
  items: Book[];
}

export interface Book {
  id: number;
  name: string;
  dateCreated: Date;
  lastUpdated: Date;
}

export interface BookRecipe{
  id: number;
  dateCreated: Date;
  lastUpdated: Date;
  notes: string;
  bookId: number;
  recipe: Recipe;
}

export interface BookRecipeDto{
  book: Book;
  recipe: {
    id: number;
  }
  notes: string;
}


