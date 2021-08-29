export interface Comment {
  body: string;
  created: string;
  id: number;
  prayerId: number | null;
  userId: number;
}

export const initialState: Record<string, Comment> = {};
