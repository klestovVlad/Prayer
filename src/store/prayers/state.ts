export interface Prayer {
  id: number;
  title: string;
  description: string | null;
  checked: boolean;
  columnId: number;
  comments: Comment[];
}

export interface Comment {
  body: string;
  created: string;
  id: number;
  prayerId: number;
}

export const initialState: Record<string, Prayer> = {};
