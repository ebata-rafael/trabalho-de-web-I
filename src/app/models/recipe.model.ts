export interface CreateRecipeDto{
  name: string;
  description: string;
  preparationTime: number;
  portion: number;
  calories: number;
  category: {
    id: number;
  }
}

export interface RecipeResponse {
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  items: Recipe[];
}
export interface Recipe {
  id: number;
  dataCreated: Date;
  lastUpdate: Date;
  name: string;
  description: string;
  preparationTime: number;
  portion: number;
  calories: number;
  published_at: Date;
  categoryId: number;
  userId: number;
  score: number;
}

export interface Ingrediente{
  name: string;
  amount: number;
  type: string;
}

export interface Rating{
  rating: number;
  comment: string;
}

export interface Image{
  id: number;
  fileName: string;
  contentLength: number;
  contentType: number;
  url: string;
  recipeId: string;
}

export interface Instruction{
  step: string;
}


