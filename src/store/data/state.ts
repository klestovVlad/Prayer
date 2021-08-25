export interface Columns {
  id: number;
  title: string;
  description: string;
  userId: number;
  prayers: Pray[];
}

export interface Pray {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: [];
}

export const initialState: Columns[] = [];
