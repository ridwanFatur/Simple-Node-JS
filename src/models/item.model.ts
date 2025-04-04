export interface Item {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

export interface CreateItemInput {
  name: string;
  description?: string;
}
