export interface Columns {
  id: number;
  title: string;
  description: string;
  userId: number;
  prayers: Prayer[];
}

export interface Prayer {
  id: number;
  title: string;
  description: string;
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

export const initialState: Columns[] = [];
