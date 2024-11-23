export interface BookResponse {
  items: Book[];
}

export interface Book {
  id: number;
  name: string;
  dateCreated: Date;
  lastUpdated: Date;
}

export interface CreateBookDto{
  name: string;
}
