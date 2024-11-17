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
  name: string;
  description: string;
  category: {
    name: string;
    id: number;
    dateCreated: string;
    lastUpdated: string;
  };
  preparationTime: number;
  portion: number;
  calories: number;
  published_at: string;
  user: {
    name: string;
    email: string;
    password: string;
    id: number;
    dateCreated: string;
    lastUpdated: string;
  };
  score: number;
  ingredients: {
    recipe: string;
    name: string;
    amount: number;
    type: string;
    id: number;
    dateCreated: string;
    lastUpdated: string;
  }[];
  instructions: {
    recipe: string;
    step: string;
    id: number;
    dateCreated: string;
    lastUpdated: string;
  }[];
  ratings: {
    recipe: string;
    user: {
      name: string;
      email: string;
      password: string;
      id: number;
      dateCreated: string;
      lastUpdated: string;
    };
    rating: number;
    comment: string;
    id: number;
    dateCreated: string;
    lastUpdated: string;
  }[];
  id: number;
  dateCreated: string;
  lastUpdated: string;
}
