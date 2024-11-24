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
